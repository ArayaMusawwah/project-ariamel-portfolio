/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#03001C",
          text: "#F6F5F2"
        },
        accent: {
          100: "#891652"
        },
        accent2: {
          100: "#EABE6C"
        }
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"]
      }
    }
  },
  plugins: []
}
