/**
 * Central configuration file for the project
 * This file exports all configurations for easier management
 */

// Re-export configurations
const eslintConfig = require('./eslint.config.mjs');
const nextConfig = require('./next.config.ts');
const postcssConfig = require('./postcss.config.mjs');
const tailwindConfig = require('./tailwind.config.js');
const tsConfig = require('./tsconfig.json');
const lintStagedConfig = require('./.lintstagedrc.js');
const commitlintConfig = require('./commitlint.config.js');
const prettierConfig = require('./.prettierrc');

module.exports = {
  eslint: eslintConfig,
  next: nextConfig,
  postcss: postcssConfig,
  tailwind: tailwindConfig,
  typescript: tsConfig,
  lintStaged: lintStagedConfig,
  commitlint: commitlintConfig,
  prettier: prettierConfig,
}; 