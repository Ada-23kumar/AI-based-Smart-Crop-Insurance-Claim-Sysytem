@echo off
echo Starting Crop Insurance System Server...
echo.
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Available files:
dir *.html
echo.
echo Starting Python HTTP server on port 8000...
python -m http.server 8000
pause 