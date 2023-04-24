/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        overall: "linear-gradient(315deg, #d4418e 0%, #0652c5 74%)",
        pink: "#d4418e",
        lightpink: "#B4489B",
        greenLight: "#32cd32",
        darkgreen: "#38a169;",
        greylight: "#757575",
      },
    },
  },
  plugins: [],
};
