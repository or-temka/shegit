/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { colorText } = require('./utils/colorText');

function deleteFolderRecursive(folderPath) {
  try {
    if (!fs.existsSync(folderPath)) {
      console.log(colorText('yellow', `Folder ${folderPath} does not exist.`));
      return;
    }

    fs.readdirSync(folderPath, { withFileTypes: true }).forEach((entry) => {
      const currentPath = path.join(folderPath, entry.name);

      try {
        if (entry.isDirectory()) {
          deleteFolderRecursive(currentPath);
        } else {
          fs.unlinkSync(currentPath);
        }
      } catch (error) {
        console.error(colorText('red', `Error deleting ${currentPath}: ${error.message}`));
      }
    });

    fs.rmdirSync(folderPath);
    console.log(`Folder ${folderPath} successfully deleted.`);
  } catch (error) {
    console.error(colorText('red', `Error reading folder ${folderPath}: ${error.message}`));
  }
}

const folderToDelete = process.argv[2];
if (!folderToDelete) {
  console.error(colorText('red', 'Error: please specify a folder path to delete.'));
  process.exit(1);
}

const targetPath = path.resolve(folderToDelete);
console.log(colorText('blue', `Starting deletion of folder: ${targetPath}`));
deleteFolderRecursive(targetPath);
