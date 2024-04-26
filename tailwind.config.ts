import { type Config } from 'tailwindcss'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { transform } from 'next/dist/build/swc'

export default {
  content: ['./src/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      colors: {
        gray: {
          600: '#666666',
          700: '#333333',
          800: '#222222',
        },
        red: {
          500: '#fb3a5d',
        },
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'skew-scroll': {
          '0%': {
            transform:
              'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
          },
          '100%': {
            transform:
              'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
          },
        },
        buttonheartbeat: {
          '0%': {
            'box-shadow': '0 0 0 0 theme("colors.red.500")',
            transform: 'scale(1)',
          },
          '50%': {
            'box-shadow': '0 0 0 7px theme("colors.red.500/0")',
            transform: 'scale(1.05)',
          },
          '100%': {
            'box-shadow': '0 0 0 0 theme("colors.red.500/0")',
            transform: 'scale(1)',
          },
        },
        'hover-tada': {
          '0%': {
            transform: 'scale(1)',
          },
          '10%': {
            transform: 'scale(0.9) rotate(-3deg)',
          },
          '20%': {
            transform: 'scale(0.9) rotate(-3deg)',
          },
          '30%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '40%': {
            transform: 'scale(1.1) rotate(-3deg)',
          },
          '50%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '60%': {
            transform: 'scale(1.1) rotate(-3deg)',
          },
          '70%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '80%': {
            transform: 'scale(1.1) rotate(-3deg)',
          },
          '90%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '100%': {
            transform: 'scale(1) rotate(0)',
          },
        },
        'hover-jiggle': {
          '0%': {
            transform: 'rotate(-4deg)',
          },
          '50%': {
            transform: 'rotate(4deg)',
          },
          '100%': {
            transform: 'rotate(-4deg)',
          },
        },
        'hover-vibrate': {
          '0%': {
            transform: 'translateY(0)',
          },
          '10%': {
            transform: 'translateY(-3px)',
          },
          '20%': {
            transform: 'translateY(0px)',
          },
          '30%': {
            transform: 'translateY(3px)',
          },
          '40%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-3px)',
          },
          '60%': {
            transform: 'translateY(0px)',
          },
          '70%': {
            transform: 'translateY(3px)',
          },
          '80%': {
            transform: 'translateY(0px)',
          },
          '90%': {
            transform: 'translateY(-3px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'hover-pop': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.07)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'tag-input-scale-in': {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'discord-button-angle': {
          '0%': {
            '--discord-button-angle': '0deg',
          },
          '50%': {
            '--discord-button-angle': '180deg',
          },
          '100%': {
            '--discord-button-angle': '360deg',
          },
        },
        'discord-button-x': {
          '0%': {
            '--discord-button-x': '50px',
          },
          '50%': {
            '--discord-button-x': '-50px',
          },
          '100%': {
            '--discord-button-x': '50px',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'skew-scroll': 'skew-scroll 20s linear infinite',
        buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
        'hover-tada': 'hover-tada 1s ease-in-out',
        'hover-jiggle': 'hover-jiggle 0.3s ease-in-out',
        'tag-input-scale-in': 'tag-input-scale-in 0.3s ease-in-out forwards',
        'hover-pop': 'hover-pop 0.5s ease-out',
        'hover-vibrate': 'hover-vibrate 0.4s ease-in-out',
        'discord-button':
          'discord-button-angle 6s linear infinite, discord-button-x 6s 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [typographyPlugin, headlessuiPlugin, require('tailwindcss-animate')],
} satisfies Config
