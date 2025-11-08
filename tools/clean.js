const fs = require('fs');
const path = require('path');

console.log('Cleaning build artifacts...');

// Remove dist directory
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
    console.log('Removed dist directory');
}

// Remove node_modules if requested
if (process.argv[2] === '--all') {
    const nodeModulesDir = path.join(__dirname, '..', 'node_modules');
    if (fs.existsSync(nodeModulesDir)) {
        fs.rmSync(nodeModulesDir, { recursive: true, force: true });
        console.log('Removed node_modules directory');
    }
}

console.log('Clean completed!');