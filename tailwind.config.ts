import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#ECF6FD',
          '100': '#B5DCF7',
          '200': '#7EC1F1',
          '300': '#47A7EB',
          '400': '#188BDC',
          '500': '#1268A5',
          '600': '#0A3A5C',
          '700': '#062337',
          '800': '#041825',
          '900': '#020C12',
        },

        secondary: {
          '50': '#FEF0EB',
          '100': '#FBC5B1',
          '200': '#F89A77',
          '300': '#F56E3D',
          '400': '#E9470C',
          '500': '#AE3509',
          '600': '#742306',
          '700': '#3A1203',
          '800': '#270C02',
          '900': '#130601',
        },

        tertiary: {
          '50': '#ECFEEC',
          '100': '#B1FBB1',
          '200': '#77F877',
          '300': '#3DF53D',
          '400': '#0CE90C',
          '500': '#09AE09',
          '600': '#067406',
          '700': '#033A03',
          '800': '#022702',
          '900': '#011301',
        },

        quaternary: {
          '400': '#E935C1',
        },

        background: '#0D0F10',

        text: {
          DEFAULT: '#E7ECF1',
          darken: '#9CA6AF',
          component: '#111011',
        },

        container: {
          '700': '#2D3439',
          '800': '#1B1F22',
          '900': '#15181A',
        }
      },

      fontFamily: {
        'inter': 'var(--font-inter)',
        'crimson': 'var(--font-crimson-text)',
        'rubik': 'var(--font-rubik-mono-one)',
        'chakra': 'var(--font-chakra-petch)',
        'digital-dismay': 'var(--font-digital-dismay)',
      },

      keyframes: {
        'stack-switch': {
          '0%, 40%': { 'transform': 'translateY(0)' },
          '60%, 100%': { 'transform': 'translateY(-100%)' }
        },

        'counter-increase': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
          '100%': { transform: 'translateY(0px)' },
        },

        'counter-decrease': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(25px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },

      maxWidth: {
        content: '100rem'
      },

      animation: () => ({
        'counter-increase': 'counter-increase 800ms cubic-bezier(.8, 0, 0.56, 1)',
        'counter-increase-slow': 'counter-increase 2000ms cubic-bezier(.8, 0, 0.56, 1)',
        'counter-decrease': 'counter-decrease 800ms cubic-bezier(.8, 0, 0.56, 1)',
        'counter-decrease-slow': 'counter-decrease 2000ms cubic-bezier(.8, 0, 0.56, 1)',
      })
    },
  },
  plugins: [],
}
export default config
