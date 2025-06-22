@echo off
echo Starting Crop Insurance System Server...
echo.

cd "E:\final Crop\final Crop\crop-insurance-system\crop-insurance-system\frontend"
if %ERRORLEVEL% NEQ 0 (
    echo Error: Could not change to the frontend directory.
    echo Please make sure the path exists: E:\final Crop\final Crop\crop-insurance-system\crop-insurance-system\frontend
    pause
    exit /b 1
)

echo Server starting at http://localhost:8000
echo Press Ctrl+C to stop the server
echo.

python -m http.server 8000
pause 