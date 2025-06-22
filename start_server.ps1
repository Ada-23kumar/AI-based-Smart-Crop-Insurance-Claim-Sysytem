Write-Host "Starting Crop Insurance System Server..." -ForegroundColor Green
Write-Host ""

# Change to the current directory
Set-Location -Path "E:\final Crop"

# Start the Python HTTP server
python -m http.server 8000 