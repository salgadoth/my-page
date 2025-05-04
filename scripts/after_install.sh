#!/bin/bash
cd /var/www/my-page
echo "Installing dependencies..."
sudo npm install --omit=dev
echo "Building my-page app..."
sudo npm run build