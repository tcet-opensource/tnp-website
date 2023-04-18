const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        title: ["Fraunces", ...defaultTheme.fontFamily.serif],
        playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out ",
      },
      screens: {
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
};
