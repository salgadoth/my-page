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
      colors: {
        indigo: '#041947',
        seaGreen: '#A7B304',
      },
    },
  },
  plugins: [],
}
