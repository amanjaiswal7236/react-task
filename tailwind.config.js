/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-white": "#fff",
        "purple-3": "#f7f5f9",
        "grey-darkest": "#08090a",
        "purple-1": "#8064a2",
        "grey-dark": "#939ca3",
        "blue-2": "#f7fdff",
        "blue-1": "#0096c8",
        "base-black": "#000",
        "purple-2": "#ccc1da",
        "grey-darker": "#6d747a",
        "grey-light": "#ced4da",
        plum: "#997dbd",
        "grey-lighter": "#ebedf0",
        grey1: "#969696",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dedbe0",
        },
        "grey-hover": "#f8f9fa",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        "text-sm-semibold": "Poppins",
      },
      borderRadius: {
        "12xs-4": "0.4px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "3xs": "10px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
