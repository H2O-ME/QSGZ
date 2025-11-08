@echo off
echo Building Zibo Qisheng High School Website...

REM Create dist directory if it doesn't exist
if not exist "dist" mkdir dist

REM Copy pages
echo Copying pages...
xcopy /E /I /Y "src\pages\*" "dist\"

REM Copy assets
echo Copying assets...
xcopy /E /I /Y "src\assets\*" "dist\"

REM Copy root files
echo Copying root files...
copy "robots.txt" "dist\" >nul 2>&1
copy "sitemap.xml" "dist\" >nul 2>&1

echo Build completed! Files are in the 'dist' directory.
echo You can preview the build with: npm run preview