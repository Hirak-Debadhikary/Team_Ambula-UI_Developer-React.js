/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#bad1f4",

          secondary: "#4047b2",

          accent: "#d8430d",

          neutral: "#1A1721",

          "base-100": "#F7F7F7",

          info: "#4D7BCB",

          success: "#19867B",

          warning: "#967E08",

          error: "#E42F32",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
