/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl8: "890px",
        xl11: "1170px",
        xl12: "1250px",
        xl13: "1330px",
        xl14: "1400px",
        xl15: "1500px",
        xl16: "1600px",
        xl17: "1700px",
      },
      colors: {
        primary: "#2563eb",
        secondary: "#0f172a", // dark
        accent: "#22c55e", // green
        secondaryblue: "#4c87e7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
