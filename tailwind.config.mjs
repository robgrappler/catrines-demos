// tailwind.config.mjs - Tailwind theme and content configuration.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0b',
        coal: '#131313',
        ember: '#1b1b1b',
        gold: '#c9a46a',
        goldLight: '#e7cfa1',
        bone: '#f4efe6',
        ash: '#b9b3aa'
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Oswald', 'Impact', '"Arial Narrow"', 'sans-serif'],
        body: ['Inter', '"Helvetica Neue"', 'Arial', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(201, 164, 106, 0.35), 0 12px 35px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top left, rgba(201, 164, 106, 0.18), transparent 55%)',
        'hero-radial-2': 'radial-gradient(circle at 85% 20%, rgba(255, 210, 140, 0.12), transparent 50%)'
      }
    }
  },
  plugins: []
};
