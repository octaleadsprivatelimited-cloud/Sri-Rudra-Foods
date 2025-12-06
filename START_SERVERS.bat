@echo off
echo Starting Sri Rudra Foods Servers...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && node server.js"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend && npm run dev"

echo.
echo Servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit this window (servers will continue running)
pause >nul

