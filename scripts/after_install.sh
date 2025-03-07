#!/bin/bash
cd /var/www/my-page
echo "Installing dependencies..."
npm install --production
echo "Building my-page app..."
npm run build