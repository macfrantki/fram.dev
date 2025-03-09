/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, '../src/pages/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, '../src/components/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, '../src/app/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#86198f",
        secondary: "#111111",
        tertiary: "#222222",
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
};
