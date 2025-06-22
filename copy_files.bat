@echo off
echo Copying frontend files to current directory...
echo.

xcopy /E /I /Y "final Crop\crop-insurance-system\crop-insurance-system\frontend\*" "."

echo.
echo Files copied successfully!
echo.
pause 