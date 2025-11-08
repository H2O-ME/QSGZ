const fs = require('fs');
const path = require('path');

console.log('Building Zibo Qisheng High School Website...');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Copy pages
console.log('Copying pages...');
const pagesSrc = path.join(__dirname, '..', 'src', 'pages');
const pagesDest = distDir;
copyDir(pagesSrc, pagesDest);

// Copy assets
console.log('Copying assets...');
const assetsSrc = path.join(__dirname, '..', 'src', 'assets');
const assetsDest = path.join(distDir, 'assets');
copyDir(assetsSrc, assetsDest);

// Copy root files
console.log('Copying root files...');
const rootFiles = ['robots.txt', 'sitemap.xml'];
for (const file of rootFiles) {
    const srcPath = path.join(__dirname, '..', file);
    const destPath = path.join(distDir, file);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
    }
}

console.log('Build completed! Files are in the \'dist\' directory.');
console.log('You can preview the build with: npm run preview');