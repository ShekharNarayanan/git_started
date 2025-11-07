@echo off
setlocal

:: ===== Configuration =====
set PORT=8000

:: Get the directory where the batch file is located
cd /d "%~dp0"

echo Starting local server on http://localhost:%PORT%
echo Press Ctrl+C to stop the server.
echo.

:: Start the Python HTTP server in a new window
start "" python -m http.server %PORT%

:: Give the server a moment to start
timeout /t 2 >nul

:: Open index.html in the default browser
start "" "http://localhost:%PORT%/index.html"

:: Keep window open
pause
