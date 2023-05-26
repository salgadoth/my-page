/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        kanitMed: ['Kanit-Medium', 'sans-serif'],
        kanitBold: ['Kanit-Bold', 'sans-serif'],
        sourceCode: ['Source-Code-Pro', 'sans-serif'],
        sourceCodeMed: ['Source-Code-Pro-Medium', 'sans-serif'],
        sourceCodeSemiBold: ['Source-Code-Pro-Semi-Bold', 'sans-serif'],
        sourceCodeBold: ['Source-Code-Pro-Bold', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1.5s',
        fadeOut: 'fadeOut 1s',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeOut: { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
      },
      colors: {
        indigo: '#041947',
        seaGreen: '#A7B304',
      },
    },
  },
  plugins: [],
}
