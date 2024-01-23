/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: { Satisfy: ["Satisfy", "cursive"] },
    screens: {
      sm: "800px",
      // => @media (min-width: 640px) { ... }

      md: "1280px",
      // => @media (min-width: 768px) { ... }

      lg: "1300px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  darkMode: "class",
};
