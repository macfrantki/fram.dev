module.exports = {
  // Run ESLint on JavaScript and TypeScript files
  "**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  // Format CSS, JSON, and Markdown files with Prettier
  "**/*.{css,json,md}": ["prettier --write"],
}; 