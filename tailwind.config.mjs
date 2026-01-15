// tailwind.config.mjs - Tailwind theme and content configuration.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          900: '#18181b', // Main background
          800: '#27272a', // Card background
          100: '#f4f4f5', // Main text
        },
        gold: '#D4AF37',
        goldLight: '#F3E5AB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(24,24,27,0.8), rgba(24,24,27,0.95))',
      },
    }
  },
  plugins: []
};
