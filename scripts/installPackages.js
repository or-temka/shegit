const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function installPackages(directory) {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const packagePath = path.join(entryPath, "package.json");
      if (fs.existsSync(packagePath)) {
        console.log(`Installing packages in ${entryPath}`);
        try {
          execSync("npm install", { cwd: entryPath, stdio: "inherit" });
          console.log(`Packages installed successfully in ${entryPath}`);
        } catch (error) {
          console.error(`Failed to install packages in ${entryPath}:`, error.message);
        }
      }
      installPackages(entryPath);
    }
  });
}

try {
  const targetDirectory = process.argv[2] || "src/functions";
  installPackages(targetDirectory);
  console.log("All dependencies installed successfully.");
} catch (error) {
  console.error("An error occurred while installing dependencies:", error.message);
  process.exit(1);
}
