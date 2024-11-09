/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { colorText } = require('./utils/colorText');

const sourceDir = 'src/functions';
const destDir = 'dist/functions';

function copyPackageFiles(src, dest) {
  try {
    if (src.includes('node_modules')) {
      return;
    }

    fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      try {
        if (entry.isDirectory()) {
          copyPackageFiles(srcPath, destPath);
        } else if (
          entry.isFile() &&
          (entry.name === 'package.json' || entry.name === 'package-lock.json')
        ) {
          fs.mkdirSync(dest, { recursive: true });
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied ${entry.name} to ${destPath}`);
        }
      } catch (error) {
        console.error(`Error processing entry ${srcPath}: ${error.message}`);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${src}: ${error.message}`);
  }
}

try {
  console.log(colorText('blue', 'Copying "package.json" and "package-lock.json"...'));
  copyPackageFiles(sourceDir, destDir);
  console.log('All package.json and package-lock.json files copied successfully.');
} catch (error) {
  console.error('An unexpected error occurred:', error.message);
  process.exit(1);
}
