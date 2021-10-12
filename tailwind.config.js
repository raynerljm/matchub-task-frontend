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
        accent: {
          DEFAULT: "#E1707F",
          50: "#FDF5F6",
          100: "#FAE6E9",
          200: "#F4C9CE",
          300: "#EDABB4",
          400: "#E78E99",
          500: "#E1707F",
          600: "#D74255",
          700: "#BA273A",
          800: "#8B1D2C",
          900: "#5D141D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
