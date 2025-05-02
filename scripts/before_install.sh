#!/bin/bash
# Check if the PM2 process is running before stopping
# This prevents errors if the process is not found
# and allows the script to continue
# without interruption.
echo "Stopping existing my-page app (if running)..."
if pm2 list | grep -q "my-page"; then
  pm2 stop my-page
else
  echo "PM2 process 'my-page' not found, skipping stop."
fi
echo "Removing old app files..."
sudo rm -rf /var/www/my-page/*