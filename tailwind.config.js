/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "index.html"
  ],
  theme: {
    extend: {
      spacing: {
        "120px": "120px",
        "288px": "288px",
        "340px": "340px",
      },
      colors: {
        "bg-from": "#F9FAFB",
        "bg-to": "#D2D6DB",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      }
    },
  },
  plugins: [],
}

