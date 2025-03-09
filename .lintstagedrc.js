module.exports = {
  // Run ESLint and Prettier on JavaScript and TypeScript files
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  
  // Format CSS files with Prettier
  "src/**/*.css": [
    "prettier --write"
  ],
  
  // Format JSON, YAML, and Markdown files with Prettier
  "**/*.{json,md,yaml,yml}": [
    "prettier --write"
  ],
  
  // Make sure no large files are committed
  "**/*.{png,jpeg,jpg,gif,svg}": [
    "node -e \"const { extname, basename } = require('path'); const { statSync } = require('fs'); const maxSize = 500 * 1024; const file = process.argv[1]; const size = statSync(file).size; if (size > maxSize) { console.error(`Error: \${file} is larger than \${maxSize / 1024}KB`); process.exit(1); }\"",
  ],
}; 