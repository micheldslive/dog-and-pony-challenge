import { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: '#33a6ba',
          red: '#ff7b92',
        },
        primary: {
          'dark-blue': '#313e4f',
          grey: '#989Ea7',
          'light-grey': '#e8edf3',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
      boxShadow: {
        'extra-large': '0px 25px 50px -10px rgba(0, 0, 0, 0.25)',
        base: '0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
        inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
        large:
          '0px 20px 25px -10px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        micro:
          '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        small:
          '0px 2px 4px -5px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        show: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideCollapsibleDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        slideCollapsibleUp: {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        show: 'show 150ms ease-in',
        hide: 'hide 150ms ease-out',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideCollapsibleDown:
          'slideCollapsibleDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideCollapsibleUp:
          'slideCollapsibleUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}
export default config
