const fs = require("fs");
const path = require("path");

const sourceDir = "src/functions";
const destDir = "dist/functions";

function copyPackageFiles(src, dest) {
  try {
    fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      try {
        if (entry.isDirectory()) {
          copyPackageFiles(srcPath, destPath);
        } else if (entry.isFile() && entry.name === "package.json") {
          fs.mkdirSync(dest, { recursive: true });
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied package.json to ${destPath}`);
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
  copyPackageFiles(sourceDir, destDir);
  console.log("All package.json files copied successfully.");
} catch (error) {
  console.error("An unexpected error occurred:", error.message);
  process.exit(1);
}
