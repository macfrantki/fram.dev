import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import TypeScript configuration
try {
  // Try to import using ts-node
  require('ts-node').register({
    compilerOptions: {
      module: 'commonjs',
      esModuleInterop: true,
    },
  });
  
  const tsConfigPath = resolve(__dirname, './.lintstagedrc.ts');
  const config = require(tsConfigPath).default;
  
  export default config;
} catch (error) {
  // Fallback configuration if ts-node import fails
  /** @type {import('lint-staged').Config} */
  const fallbackConfig = {
    "src/**/*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "src/**/*.css": [
      "prettier --write"
    ],
    "**/*.{json,md,yaml,yml}": [
      "prettier --write"
    ],
  };
  
  export default fallbackConfig;
} 