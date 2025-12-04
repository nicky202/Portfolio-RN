import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0518", // Deep purple background
        primary: "#9d4edd", // Purple accent
        secondary: "#e0aaff", // Light purple
        accent: "#4cc9f0", // Cyan/Blue accent
        card: "rgba(255, 255, 255, 0.05)", // Glassmorphism card bg
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(to bottom right, #1a0b2e, #0f0518, #240046)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #9d4edd, 0 0 10px #9d4edd" },
          "100%": { boxShadow: "0 0 20px #e0aaff, 0 0 30px #e0aaff" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
