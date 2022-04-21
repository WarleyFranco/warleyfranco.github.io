const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*.{ts, tsx}', './src/components/**/*.{ts, tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: colors.black,
        blue: colors.indigo,
        current: 'currentColor',
        gray: colors.coolGray,
        green: colors.emerald,
        primary: colors.indigo,
        red: colors.red,
        transparent: 'transparent',
        white: colors.white,
        yellow: colors.amber,
        accent: '#6A5ACD',
        'dark-accent': '#958BDA',
      },
      typography: {
        xl: {
          css: {
            h1: {
              color: colors.coolGray['700'],
              fontWeight: 700,
            },
            h2: {
              color: colors.coolGray['700'],
            },
            h3: {
              color: colors.coolGray['700'],
            },
            h4: {
              color: colors.coolGray['700'],
            },
          },
        },
        dark: {
          css: {
            p: {
              color: colors.coolGray['300'],
            },
            'p strong': {
              color: colors.coolGray['300'],
            },
            pre: {
              backgroundColor: colors.coolGray['900'],
              borderColor: colors.coolGray['500'],
              borderWidth: 1,
              borderStyle: 'solid',
            },
            'p a': {
              color: '#958BDA',
            },
            'p code': {
              color: '#958BDA',
            },
            h1: {
              color: colors.coolGray['200'],
            },
            h2: {
              color: colors.coolGray['200'],
            },
            h3: {
              color: colors.coolGray['200'],
            },
            h4: {
              color: colors.coolGray['200'],
            },
          }
        },
        indigo: {
          css: {
            'p a': {
              color: '#6A5ACD',
            },
            '--tw-prose-body': '#6A5ACD',
            '--tw-prose-headings': '#6A5ACD',
            '--tw-prose-lead': '#6A5ACD',
            '--tw-prose-links': '#6A5ACD',
            '--tw-prose-bold': '#6A5ACD',
            '--tw-prose-counters': '#6A5ACD',
            '--tw-prose-bullets': '#6A5ACD',
            '--tw-prose-hr': '#6A5ACD',
            '--tw-prose-quotes': '#6A5ACD',
            '--tw-prose-quote-borders': '#6A5ACD',
            '--tw-prose-captions': '#6A5ACD',
            '--tw-prose-code': '#6A5ACD',
            '--tw-prose-pre-code': '#6A5ACD',
            '--tw-prose-pre-bg': '#6A5ACD',
            '--tw-prose-th-borders': '#6A5ACD',
            '--tw-prose-td-borders': '#6A5ACD',
            // '--tw-prose-invert-body': '#6A5ACD',
            // '--tw-prose-invert-headings': '#FFFFFF',
            // '--tw-prose-invert-lead': '#6A5ACD',
            // '--tw-prose-invert-links': '#FFFFFF',
            // '--tw-prose-invert-bold': '#FFFFFF',
            // '--tw-prose-invert-counters': '#6A5ACD',
            // '--tw-prose-invert-bullets': '#6A5ACD',
            // '--tw-prose-invert-hr': '#6A5ACD',
            // '--tw-prose-invert-quotes': '#6A5ACD',
            // '--tw-prose-invert-quote-borders': '#6A5ACD',
            // '--tw-prose-invert-captions': '#6A5ACD',
            // '--tw-prose-invert-code': '#FFFFFF',
            // '--tw-prose-invert-pre-code': '#6A5ACD',
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': '#6A5ACD',
            // '--tw-prose-invert-td-borders': '#6A5ACD',
          }
        }
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      margin: ['first'],
      typography: ['dark'],
      display: ['hover', 'group-hover', 'last', 'first']
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
