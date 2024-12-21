/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   ibm: ['IBM Plex Sans', 'sans-serif'],
      //   museo: ['museo_sans700']
      // },
      colors: {
        primary: withOpacity('--primary'),
        teritary: withOpacity('--teritary'),
        secondary: withOpacity('--secondary'),
        foreground1: withOpacity('--foreground-1'),
        background: withOpacity('--background'),
        accent: withOpacity('--accent'),
        accent2: withOpacity('--accent-2'),
        accent3: withOpacity('--accent-3'),
        overlay: withOpacity('--overlay'),
        overlayForeground: withOpacity('--overlay-foreground'),
        accentSecondary: withOpacity('--accent-secondary'),
        success: withOpacity('--success'),
        error: withOpacity('--error'),
      },
      fontSize: {
        sm: [14, '22.4px'],
        base: [16, '25.6px'],
        lg: [18, '21.6px'],
        xl: [20, '24px'],
        '3xl': [30, '36px'],
        '4xl': [36, '43.2px'],
      },
      spacing: {
        '8xl': '85rem',
        '9xl': '90rem',
      }
    },
  },
  plugins: [],
}

