/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      colors: {
        beige: "#F6F1EA",
        cream: "#EFE7DD",
        gold: "#C89B63",
        forest: "#243524",
        charcoal: "#2B2B2B",
      },

      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        luxury:
          "0 10px 30px rgba(200, 155, 99, 0.15), 0 20px 60px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        luxury: "30px",
      },

      backgroundImage: {
        luxuryGlow:
          "radial-gradient(circle at top left, #f4dfc6 0%, transparent 35%)",
      },

    },
  },

  plugins: [],
}
