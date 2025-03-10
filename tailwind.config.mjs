/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e11d48',
        backgroundary: '#eab308',
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
};

export default config;
