const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Brain dir
const brainDir = 'C:\\Users\\Mohithsai Malla\\.gemini\\antigravity\\brain\\67ca32b4-cf33-4843-935e-23f7f28d4b60';

// 1. Copy user logo
const logoSrc = path.join(brainDir, '.user_uploaded', 'media_1789167306019.png');
const logoDest = path.join(publicImagesDir, 'prime-realty-logo.png');
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, logoDest);
  console.log('Copied prime-realty-logo.png');
}

// 2. Copy hero image
const heroSrc = path.join(brainDir, 'hero_real_estate_1789168140331.jpg');
const heroDest = path.join(publicImagesDir, 'hero-real-estate.jpg');
if (fs.existsSync(heroSrc)) {
  fs.copyFileSync(heroSrc, heroDest);
  console.log('Copied hero-real-estate.jpg');
}

// 3. Copy luxury villa
const villaSrc = path.join(brainDir, 'luxury_villa_1789168186096.jpg');
const villaDest = path.join(publicImagesDir, 'luxury-villa.jpg');
if (fs.existsSync(villaSrc)) {
  fs.copyFileSync(villaSrc, villaDest);
  console.log('Copied luxury-villa.jpg');
}

// 4. Copy modern apartment
const aptSrc = path.join(brainDir, 'modern_apartment_1789168205414.jpg');
const aptDest = path.join(publicImagesDir, 'modern-apartment.jpg');
if (fs.existsSync(aptSrc)) {
  fs.copyFileSync(aptSrc, aptDest);
  console.log('Copied modern-apartment.jpg');
}

console.log('Initial asset copy completed.');
