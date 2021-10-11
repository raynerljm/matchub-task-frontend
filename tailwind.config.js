module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        match: {
          DEFAULT: "#7DAADB",
          50: "#E9F1F9",
          100: "#DDE9F6",
          200: "#C5D9EF",
          300: "#ADC9E8",
          400: "#95BAE2",
          500: "#7DAADB",
          600: "#4988CD",
          700: "#2E67A6",
          800: "#1F4772",
          900: "#11263E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
