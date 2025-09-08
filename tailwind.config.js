/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      animation: {
        glow: "glow 6s ease-in-out infinite",
        pulse: 'pulse 3s infinite',
        ping: 'ping 4s infinite',
        bounce: 'bounce 6s infinite',
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}



