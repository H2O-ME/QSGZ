const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '..', 'src', 'assets', 'image');

console.log('Converting images to WebP...');

fs.readdirSync(imageDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
        const inputPath = path.join(imageDir, file);
        const outputPath = path.join(imageDir, path.basename(file, ext) + '.webp');

        sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(() => {
                console.log(`Converted ${file} to ${path.basename(outputPath)}`);
                // Optionally, delete the original file
                // fs.unlinkSync(inputPath);
            })
            .catch(err => {
                console.error(`Error converting ${file}:`, err);
            });
    }
});

console.log('Conversion completed!');