/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {},
        error: "#be123c",
        info: "#d97706",
        success: "#14b8a6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default tailwindConfig
