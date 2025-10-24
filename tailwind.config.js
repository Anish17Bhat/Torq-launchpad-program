/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "serif"], // matches the heading style in yellow
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#FBC900",    // precise yellow
        darkblack: "#000000",  // black sections
        darkgray: "#232020",   // table backgrounds
        accentblue: "#32A5EF", // blue for buttons or icons
        accentgreen: "#45C266",
        accentorange: "#FF9000",
        accentpurple: "#951ACB",
      },
    },
  },
  plugins: [],
};
