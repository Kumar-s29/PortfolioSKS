/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jscolors: {
          bg: '#0a0a0a',
          surface: '#111111',
          border: '#1e1e1e',
          'accent-green': '#00ff88',
          'accent-amber': '#f5a623',
          'accent-blue': '#4fc3f7',
          'text-primary': '#e8e8e8',
          'text-muted': '#666666',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
