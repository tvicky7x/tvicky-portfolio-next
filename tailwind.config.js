/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto_thin: ["var(--roboto-thin)"],
        roboto_normal: ["var(--roboto-normal)"],
        roboto_bold: ["var(--roboto-bold)"],
        roboto_exBold: ["var(--roboto-exBold)"],
      },
      keyframes: {
        bgAnimation: {
          "0%": {
            "background-position": "0 7%",
          },
          "50%": {
            "background-position": "100% 94%",
          },
          "100%": {
            "background-position": "0 7%",
          },
        },
        animateStar: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-2000px)",
          },
        },
        proAnimation: {
          "0%": {
            transform: "scaleX(0)",
            "transform-origin": "left",
          },
          "100%": {
            transform: "scaleX(1)",
            "transform-origin": "left",
          },
        },
      },
      animation: {
        bgAnimation: "bgAnimation 70s ease infinite",
        animateStar: "animateStar 50s linear infinite",
        proAnimation: "proAnimation 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
