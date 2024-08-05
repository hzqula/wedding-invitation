/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#081c15",
        secondary: "#2d6a4f",
        dark: "#08121a",
        light: "#d6e6f3",
        customWhite: "#fefae0",
        customBlack: "#212529",
        bgWhite: "#f1faee",
      },

      fontFamily: {
        body: ["Open Sans, sans-serif"],
        arabic: ["IBM Plex Sans Arabic"],
        romance: ["Italianno, cursive"],
      },

      fontSize: {
        title: ["3rem", "1.5"],
        subTitle: ["1.8rem", "1.2"],
        paragraph: ["1.2rem", "1.5"],
      },

      fontWeight: {
        title: 900,
        subTitle: 700,
        paragraph: 400,
      },

      backgroundImage: {
        inviting: "url(./public/assets/inviting.png)",
        invitingPotrait: "url(./public/assets/inviting-potrait.jpg)",
        hero: "url(./public/assets/hero.png)",
        heroPotrait: "url(./public/assets/hero-potrait.jpg)",
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
