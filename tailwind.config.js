/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      colors: {
        primary: "#171717",
        "primary-hover": "#000000",
        secondary: "#6b7280",
        accent: "#007aff",
        border: "#e5e7eb",
      },
      borderRadius: {
        container: "0px",
      },
      spacing: {
        section: "3rem",
      },
    },
  },
  plugins: [],
};
