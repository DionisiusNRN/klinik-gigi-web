/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F1C40F",
        green: "#27AE60",
        orange: "#FF5733",
        pink: "#E91E63",
        location: "#373854",
      },
      fontFamily: {
        service: ['"Alegreya Sans SC"'],
      },
      margin: {
        "500px": "500px",
      },
    },
  },
  plugins: [],
};
