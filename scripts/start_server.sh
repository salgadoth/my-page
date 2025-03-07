#!/bin/bash
cd /var/www/my-page
echo "Starting Next.js app with PM2..."
pm2 start npm --name "my-page" -- start
pm2 save