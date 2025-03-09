import { resolve } from 'path';
import { stat } from 'fs/promises';

import type { Config } from 'lint-staged';

const checkFileSize = async (
  filenames: string[],
  maxSize: number = 500 * 1024
): Promise<string[]> => {
  const files = filenames.map(f => resolve(f));
  const commands: string[] = [];

  for (const file of files) {
    const fileStats = await stat(file);
    if (fileStats.size > maxSize) {
      console.error(`Error: ${file} is larger than ${maxSize / 1024}KB`);
      process.exit(1);
    }
  }
  return commands;
};

const config: Config = {
  // Run ESLint and Prettier on JavaScript and TypeScript files
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
    await checkFileSize(files);
    return [];
  },
};

export default config; 