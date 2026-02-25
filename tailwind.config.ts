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
        carrillo: {
          blue: {
            light: '#9DA8C5',
            DEFAULT: '#66728D',
            dark: '#51679C',
          },
          slate: {
            light: '#888C96',
            DEFAULT: '#7B7C7D',
            dark: '#9DA8C5',
          },
          gray: '#D9DBE0',
          // Paleta de Acento — "El Motor LegalTech" (usar máx 10%)
          cyan: '#00F2FF',
          orange: '#E67E22',
          violet: '#7D5FFF',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'glow-cyan': 'glowCyan 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(157, 168, 197, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(81, 103, 156, 0.6)' },
        },
        glowCyan: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 242, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 242, 255, 0.45)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
