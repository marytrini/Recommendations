/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#333745",
      },
      backgroundImage: {
        custom_gradient:
          "linear-gradient(to top right, rgba(33,33,36,1) 0%, rgba(24,34,66,1) 60%, rgba(37,70,126,1) 100%)",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
      // keyframes: {
      //   slide: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      // },
    },
    screens: {
      "2xl": { max: "1920px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "479px" },
    },
  },
  plugins: [],
};