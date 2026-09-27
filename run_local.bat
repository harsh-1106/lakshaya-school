@echo off
title Lakshaya International School - Full Stack Launcher
color 0A
echo =========================================================================
echo       LAKSHAYA INTERNATIONAL SCHOOL - LOCAL DEV ENVIRONMENT
echo =========================================================================
echo.
echo [1/2] Starting Python Serverless Backend (FastAPI on Port 8000)...
start "Lakshaya Backend API" cmd /k "py backend/run_server.py"
timeout /t 2 >nul

echo [2/2] Starting React.js Frontend (Vite on Port 5173)...
start "Lakshaya React Frontend" cmd /k "npm run dev"
timeout /t 3 >nul

echo.
echo =========================================================================
echo   SYSTEM IS READY! OPENING YOUR BROWSER...
echo =========================================================================
echo   - Main Website:     http://localhost:5173/
echo   - Alumni Portal:    http://localhost:5173/alumni
echo   - Result Portal:     http://localhost:5173/#results
echo   - Admin Command Hub: http://localhost:5173/#admin
echo   - Backend Swagger:   http://localhost:8000/docs
echo =========================================================================
start http://localhost:5173/
pause
