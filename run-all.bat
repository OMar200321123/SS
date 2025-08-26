@echo off
title Laravel + Vite Runner
color 0A

echo Starting Laravel server...
start cmd /k "php artisan serve"

echo Starting Vite development server...
start cmd /k "npm run dev -- --host 127.0.0.1"

echo All services started successfully!
pause
