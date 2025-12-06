Write-Host "Starting Frontend Server Only..." -ForegroundColor Green
Write-Host ""
Write-Host "Frontend will run on: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Note: Backend is not running. Some features may not work." -ForegroundColor Yellow
Write-Host ""

cd frontend
npm run dev

