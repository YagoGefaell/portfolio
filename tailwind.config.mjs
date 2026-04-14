/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f13',
        surface: '#1a1a24',
        'surface-2': '#22222f',
        accent: '#7c6af7',
        'accent-light': '#a99df8',
        text: '#e8e8f0',
        'text-muted': '#8888a8',
        border: '#2e2e42',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '8px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      spacing: {
        18: '4.5rem',
        120: '30rem',
      },
      maxWidth: {
        container: '1100px',
      },
      height: {
        '4.5': '1.125rem',
      },
      width: {
        '4.5': '1.125rem',
      },
      scale: {
        110: '1.1',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hover-border-with-color': {
          '@apply hover:shadow-lg': {},
        },
      })
    },
  ],
};

