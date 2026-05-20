import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#fbf8f2",
        olive: {
          950: "#192119",
          900: "#223026",
          800: "#2b3f30"
        },
        sand: {
          50: "#f6f2ea",
          100: "#ece4d4",
          200: "#dac8ac"
        },
        coffee: {
          100: "#eadfce",
          300: "#ba9e7b",
          500: "#7d5c3f",
          700: "#503826"
        },
        gold: {
          300: "#d7bf8d",
          400: "#c8ab70"
        }
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Manrope'", "sans-serif"]
      },
      letterSpacing: {
        luxe: "0.14em"
      },
      boxShadow: {
        soft: "0 15px 40px rgba(20, 26, 20, 0.12)",
        luxe: "0 24px 80px rgba(16, 18, 16, 0.24)"
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,.05) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
