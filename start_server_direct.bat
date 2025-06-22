@echo off
echo Starting Crop Insurance System Server...
echo.

echo Current directory:
cd
echo.

echo Server starting at http://localhost:8000
echo Press Ctrl+C to stop the server
echo.

python -m http.server 8000
pause 