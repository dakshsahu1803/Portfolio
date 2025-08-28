// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Added a custom color palette for a new theme
      colors: {
        primary: '#2563eb', // A strong, professional blue
        secondary: '#0891b2', // A vibrant cyan for accents
        background: '#050414', // Your original dark background
        surface: '#1e293b', // A slightly lighter dark blue for cards/surfaces
        'text-primary': '#f8fafc', // Off-white for main text
        'text-secondary': '#94a3b8', // A muted gray for secondary text
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        // 2. Updated the gradient to use the new color palette
        'skills-gradient': 'linear-gradient(38.73deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 50%), linear-gradient(141.27deg, rgba(8, 145, 178, 0) 50%, rgba(8, 145, 178, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
