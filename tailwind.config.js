/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "20px",
    },
    extend: {
      colors: {
        "color-bg": "#EBE4F2",
        "color-md": "#BEC9E7",
        "color-b": "#6373B7",
        "color-holdber": "#7986BD",
        "color-box": "#8B98D0",
      },
      fontFamily: {
        sans: ['"Chakra Petch"', "sans-serif"],
        chela: ['"Chela One"', "cursive"],
      },
    },
  },
  plugins: [],
};
