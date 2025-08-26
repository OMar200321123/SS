@echo off
setlocal ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

title React + Vite - Quick Dev Launcher

REM Run this file from INSIDE your project folder (where package.json exists).

REM 1) Move to this file's directory
cd /d "%~dp0"

REM 2) Check Node & NPM
where node >nul 2>&1 || (
  echo [ERROR] Node.js is not installed or not in PATH.
  echo Download: https://nodejs.org/en/download/
  pause
  exit /b 1
)
where npm >nul 2>&1 || (
  echo [ERROR] NPM is not installed or not in PATH. Reinstall Node.js.
  pause
  exit /b 1
)

REM 3) Verify package.json
if not exist "package.json" (
  echo [ERROR] package.json not found. Please place this BAT inside your React project root.
  pause
  exit /b 1
)

REM 4) Allow PowerShell scripts for CurrentUser (fix npm.ps1 issue)
powershell -NoProfile -ExecutionPolicy Bypass -Command "Try { Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force } Catch { }" >nul 2>&1

REM 5) Install dependencies if node_modules missing
if not exist "node_modules" (
  echo.
  echo === Installing dependencies ===
  npm install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
) else (
  echo.
  echo node_modules found. Skipping install.
)

REM 6) Start Vite dev server and open browser
echo.
echo === Starting Dev Server (Vite) ===
start "" "http://localhost:3000"
npm run dev

echo.
echo Press Ctrl+C to stop the server.
pause
endlocal
