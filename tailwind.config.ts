import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#ecf8f8", // Azure Mist: page background
        alabaster: "#eee4e1", // Alabaster Grey: cards, ID card
        cream: "#e7d8c9", // Almond Cream: tags, containers
        camel: "#b2967d", // Camel: headings, primary buttons
        silk: "#e6beae", // Almond Silk: accents, secondary buttons
        ink: "#3a3330", // soft charcoal: body text
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -18px rgba(178, 150, 125, 0.45)",
        lift: "0 28px 70px -20px rgba(178, 150, 125, 0.55)",
      },
      borderRadius: {
        blob: "58% 42% 61% 39% / 45% 55% 45% 55%",
        blob2: "42% 58% 38% 62% / 56% 40% 60% 44%",
        pebble: "52% 48% 45% 55% / 38% 34% 66% 62%",
      },
    },
  },
  plugins: [],
};

export default config;
