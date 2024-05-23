import TailwindTypography from "@tailwindcss/typography"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#0c0c1d",
          bg2: "#111132",
          text: "#F6F5F2"
        },
        accent: {
          100: "#891652"
        },
        accent2: {
          100: "rgb(251,146,60)"
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
  plugins: [TailwindTypography()]
}
