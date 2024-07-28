/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,css}", // Adjust this according to where your HTML and JavaScript files are located.
    "./index.html" // This ensures Tailwind processes classes in the index.html at the root.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
