//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    
    extend: {
        colors: {
            primary: colors.sky[600],
            neutral: colors.zinc[950]
        },
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      fontFamily: {
            sans: ['FoundersGrotesk', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1rem',
            maxWidth: '1280px',
        }
    },
    // Remove the font families you don't want to use.
    fontFamily: {
      mono: [
        // Use a custom mono font for this site by changing 'Anonymous' to the
        // font name you want and uncommenting the following line.
        // 'Anonymous',
        ...defaultTheme.fontFamily.mono,
      ],
      sans: [
        // Use a custom sans serif font for this site by changing 'Gaultier' to the
        // font name you want and uncommenting the following line.
        // 'Gaultier',
        ...defaultTheme.fontFamily.sans,
      ],
      serif: [
        // Use a custom serif font for this site by changing 'Lavigne' to the
        // font name you want and uncommenting the following line.
        // 'Lavigne',
        ...defaultTheme.fontFamily.serif,
      ],
    },
    // The font weights available for this site.
    fontWeight: {
      // hairline: 100,
      // thin: 200,
      // light: 300,
      normal: 400,
      // medium: 500,
      semibold: 600,
      bold: 700,
      // extrabold: 800,
      // black: 900,
    },
  },
  plugins: [
    plugin(function({ addBase, addComponents, addUtilities, theme }) {
        addComponents({
            '.container': {
              maxWidth: '1280px'
            }}),
      addBase({
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .3s ease-in-out',
          },
        },
        'html': {
            color: theme('colors.neutral.DEFAULT'),
            //--------------------------------------------------------------------------
            // Set sans, serif or mono stack with optional custom font as default.
            //--------------------------------------------------------------------------
            // fontFamily: theme('fontFamily.mono'),
            fontFamily: theme('fontFamily.sans'),
            // fontFamily: theme('fontFamily.serif'),
        },
        ':root': {
          '--focus-outline-width': '2px',
          '--focus-outline-offset': '3px',
          '--focus-outline-color': 'currentColor',
          '--focus-outline-style': 'dotted',
          '--focus-form-outline-width': '3px',
          '--focus-form-outline-offset': '0',
          '--focus-form-outline-color': "theme('colors.primary.DEFAULT / .5')",
          '--focus-form-outline-style': 'solid',
        },
        ':focus': {
          outlineWidth: 'var(--focus-outline-width, 2px)',
          outlineOffset: 'var(--focus-outline-offset, 3px)',
          outlineColor: 'var(--focus-outline-color, currentColor)',
          outlineStyle: 'var(--focus-outline-style, dotted)',
        },
        '*:focus:not(:focus-visible)': {
          outline: '2px solid transparent',
          outlineOffset: '2px',
        },
        'input:not([type="button"]):focus, textarea:focus, select:focus': {
          boxShadow: 'none',
          outlineWidth: 'var(--focus-form-outline-width, 3px)',
          outlineOffset: 'var(--focus-form-outline-offset, 0)',
          outlineColor: 'var(--focus-form-outline-color, currentColor)',
          outlineStyle: 'var(--focus-form-outline-style, solid)',
        },
        'mark': {
          backgroundColor: "theme('colors.primary.DEFAULT / 1')",
          color: theme('colors.white')
        },
      }),
      // Custom components for this particular site.
      addComponents({
      }),
      // Custom utilities for this particular site.
      addUtilities({
      })
    }),
  ]
}