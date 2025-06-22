@echo off
echo Starting Crop Insurance System Server...
echo.
cd /d "%~dp0"
python -m http.server 8000
pause 