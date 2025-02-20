# Use uma imagem leve do Alpine Linux
FROM alpine:3.16

# Instale Nginx, Certbot (e plugin para Nginx) e outras dependências
RUN apk update && apk add --no-cache nginx certbot certbot-nginx bash

# Crie diretórios necessários para o Nginx e os certificados
RUN mkdir -p /run/nginx && mkdir -p /etc/letsencrypt

# Copie os arquivos de configuração do Nginx para o container
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copie o script de inicialização e torne-o executável
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Exponha as portas 80 (HTTP) e 443 (HTTPS)
EXPOSE 80 443

# Defina o script de inicialização como comando padrão
CMD ["/start.sh"]
