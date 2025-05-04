#!/bin/bash
cd /var/www/my-page
echo "Starting Next.js app with PM2..."
pm2 start ecosystem.config.js --env production
echo "Saving PM2 process list..."
pm2 save