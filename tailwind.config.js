/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Đảm bảo có cả .ts và .tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}