#!/bin/bash
echo "Stopping my-page app..."
pm2 stop my-page || true