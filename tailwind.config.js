module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        "pt-serif": ["PT Serif", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
