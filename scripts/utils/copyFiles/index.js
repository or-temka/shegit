/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const DEFAULT = require('./constants');

function copyFiles({
  files = DEFAULT.filesToCopy,
  src = DEFAULT.sourceDir,
  dest = DEFAULT.destDir,
  useConsoleLog = DEFAULT.useConsoleLog,
}) {
  try {
    if (src.includes('node_modules')) {
      return;
    }

    fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      try {
        if (entry.isDirectory()) {
          copyFiles({ src: srcPath, dest: destPath });
        } else if (entry.isFile() && files?.includes(entry.name)) {
          fs.mkdirSync(dest, { recursive: true });
          fs.copyFileSync(srcPath, destPath);
          if (useConsoleLog) console.log(`Copied ${entry.name} to ${destPath}`);
        }
      } catch (error) {
        console.error(`Error processing entry ${srcPath}: ${error.message}`);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${src}: ${error.message}`);
  }
}

module.exports = {
  copyFiles,
};
