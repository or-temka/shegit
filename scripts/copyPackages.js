/* eslint-disable no-console */
const { colorText } = require('./utils/colorText');
const { copyFiles } = require('./utils/copyFiles');

const sourceDir = 'src';
const destDir = process.argv[2] || 'dist';

try {
  console.log(colorText('blue', 'Copying "package.json" and "package-lock.json"...'));
  copyFiles({ src: sourceDir, dest: destDir, files: ['package.json', 'package-lock.json'] });
  console.log('All package.json and package-lock.json files copied successfully.');
} catch (error) {
  console.error('An unexpected error occurred:', error.message);
  process.exit(1);
}
