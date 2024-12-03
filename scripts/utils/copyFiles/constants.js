const DEFAULT = {
  sourceDir: 'src',
  destDir: process.argv[2] || 'dist',
  filesToCopy: ['package.json', 'package-lock.json'],
  useConsoleLog: true,
};

module.exports = {
  DEFAULT,
};
