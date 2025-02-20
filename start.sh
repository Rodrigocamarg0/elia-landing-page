#!/bin/bash

# Se o certificado não existir, tenta obtê-lo
if [ ! -f /etc/letsencrypt/live/elia.com.de/fullchain.pem ]; then
  echo "Obtendo certificado SSL para elia.com.de..."
  certbot certonly --standalone --non-interactive --agree-tos --email contato@elia.com.de -d elia.com.de
fi

# Inicia o Nginx em primeiro plano
nginx -g "daemon off;"