/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
