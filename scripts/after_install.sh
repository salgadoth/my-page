#!/bin/bash
cd /var/www/my-page
echo "Retrieving secrets..."
aws secretsmanager get-secret-value \
  --secret-id my-app-env \
  --query SecretString \
  --output text > .env
echo "Installing dependencies..."
sudo npm install --omit=dev
echo "Building my-page app..."
sudo npm run build