@echo off
echo Cleaning build artifacts...

REM Remove dist directory
if exist "dist" (
    rmdir /S /Q "dist"
    echo Removed dist directory
)

REM Remove node_modules if requested
if "%1"=="--all" (
    if exist "node_modules" (
        rmdir /S /Q "node_modules"
        echo Removed node_modules directory
    )
)

echo Clean completed!