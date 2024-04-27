/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],}
    },
    
  },
  plugins: [require("daisyui")],
}

