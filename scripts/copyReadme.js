/* eslint-disable no-console */
const { colorText } = require('./utils/colorText');
const { copyFiles } = require('./utils/copyFiles');

const sourceDir = 'src';
const destDir = process.argv[2] || 'dist';

try {
  console.log(colorText('blue', 'Copying "README.md"...'));
  copyFiles({ src: sourceDir, dest: destDir, files: ['README.md'] });
  console.log('All README.md files copied successfully.');
} catch (error) {
  console.error('An unexpected error occurred:', error.message);
  process.exit(1);
}
