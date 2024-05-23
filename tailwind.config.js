/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#0c0c1d",
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
      },
      maxWidth: {
        "8xl": "1366px"
      }
    }
  },
  plugins: []
}
