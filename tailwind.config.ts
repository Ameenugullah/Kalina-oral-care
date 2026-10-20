import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twilight: { DEFAULT: "#0C0766", 80: "#0C0766CC", 60: "#0C076699", 10: "#0C07661A" },
        turquoise: { DEFAULT: "#64DEB9", soft: "#E4F9F2", mist: "#F3FCF9" },
      },
      fontFamily: {
        display: ["'Fraunces Variable'", "Georgia", "serif"],
        sans: ["'Manrope Variable'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
