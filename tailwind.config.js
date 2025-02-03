/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF",
        accent: "#FD3A01",
        bgPrimary: "#111112",
        bgSecondary: "#1D1E21",
      },
    },
  },
  plugins: [],
};
