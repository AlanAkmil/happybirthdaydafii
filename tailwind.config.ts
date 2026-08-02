import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7ED",
        ink: "#2B1055",
        pink: {
          DEFAULT: "#FF4D8D",
          soft: "#FFD6E4",
        },
        gold: "#FFC93C",
        sky: "#35C4F0",
        grape: "#7B2FF7",
        mint: "#21D19F",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        popIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        floatUp: "floatUp 4s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        popIn: "popIn 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
