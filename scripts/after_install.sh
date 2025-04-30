#!/bin/bash
cd /var/www/my-page
echo "Installing dependencies..."
sudo npm install --production
echo "Building my-page app..."
npm run build