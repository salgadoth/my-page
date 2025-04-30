#!/bin/bash
echo "Stopping existing my-page app (if running)..."
pm2 stop my-page || true
echo "Removing old app files..."
sudo rm -rf /var/www/my-page/*