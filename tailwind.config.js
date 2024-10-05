/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Montserrat",
      navbarlinks: "Oswald",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1 rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",
        accent: "#EEF7F9",
      },
      backgroundImage: {
        parallax: 'url("../src/assets/images/milkyway.jpg")',
      },
    },
  },
  plugins: [],
};
