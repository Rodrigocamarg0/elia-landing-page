#!/bin/bash

# Verifica se o certificado SSL já foi obtido
if [ ! -f /etc/letsencrypt/live/elia.com.de/fullchain.pem ]; then
  echo "Obtendo certificado SSL para elia.com.de..."
  certbot certonly --nginx --non-interactive --agree-tos --email contato@elia.com.de -d elia.com.de
fi

# Inicia o Nginx em primeiro plano
nginx -g "daemon off;"
