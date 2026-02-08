import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        accent: {
          50: '#fef5e7',
          100: '#fdeaca',
          200: '#fbd995',
          300: '#f8c45f',
          400: '#f4a933',
          500: '#e68a00',
          600: '#c97500',
          700: '#a15f00',
          800: '#7a4900',
          900: '#533200',
        },
      },
    },
  },
  plugins: [],
};
export default config;
