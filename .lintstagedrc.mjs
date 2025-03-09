// @ts-check
import { readFile, stat } from 'fs/promises';
import { resolve } from 'path';

const config = {
  // Run ESLint and Prettier on TypeScript files
  "src/**/*.{ts,tsx}": [
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
  "**/*.{png,jpeg,jpg,gif,svg}": async (files) => {
    const maxSize = 500 * 1024; // 500KB
    const commands = [];
    
    for (const file of files) {
      const filePath = resolve(file);
      const fileStats = await stat(filePath);
      if (fileStats.size > maxSize) {
        console.error(`Error: ${file} is larger than ${maxSize / 1024}KB`);
        process.exit(1);
      }
    }
    
    return commands;
  },
};

export default config; 