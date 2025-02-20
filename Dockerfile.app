# Dockerfile.app
FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de package e instala as dependências
COPY package.json package-lock.json* ./
RUN npm install

# Copia o restante da aplicação
COPY . .

# Constrói a aplicação
RUN npm run build

# Expõe a porta onde a aplicação roda (por padrão, 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
