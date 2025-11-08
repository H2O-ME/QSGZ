#!/bin/bash
echo "Building Zibo Qisheng High School Website..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy pages
echo "Copying pages..."
cp -r src/pages/* dist/

# Copy assets
echo "Copying assets..."
cp -r src/assets/* dist/

# Copy root files
echo "Copying root files..."
cp robots.txt dist/
cp sitemap.xml dist/

echo "Build completed! Files are in the 'dist' directory."
echo "You can preview the build with: npm run preview"