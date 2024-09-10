import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: { min: '324px', max: '678px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' }
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['18px', '28px'],
      lg: ['32px', '40px'],
      xl: ['40px', '51px'],
      '2xl': ['56px', '70px']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        design: {
          100: 'hsl(252, 66%, 62%)',
          200: 'hsl(28, 89%, 67%)',
          300: 'hsl(0, 78%, 79%)',
          400: 'hsl(7, 77%, 66%)',
          500: 'hsl(172, 46%, 57%)',
          600: 'hsl(314, 45%, 23%)',
          700: 'hsl(0, 0%, 1%)',
          800: 'hsl(30, 5%, 45%)',
          900: 'hsl(28, 100%, 97%)'
        }
      }
    }
  },
  plugins: []
};
export default config;
