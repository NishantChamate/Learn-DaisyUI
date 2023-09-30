/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                   // Process the HTML file
    "./src/**/*.{js,ts,jsx,tsx}",     // Process JavaScript and TypeScript files in the 'src' directory
  ],
  theme: {
    extend: {},                        // Extend the Tailwind CSS theme (no extensions provided in this configuration)
  },
  plugins: [require("daisyui")],       // Include the "daisyui" plugin
  daisyui:{
    themes: true
  }
}
