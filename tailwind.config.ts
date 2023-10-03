import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        primary: ["var(--font-inter)"],
        secondary: ["var(--font-work-sans)"],
        tertiary: ["var(--font-berkshire-swash)"],
      },
      colors: {
        light: {
          "yellow-69": "#fcda69",
          "yellow-54": "#caae54",
          "yellow-17": "#e3b017",
          "green-6c": "#0b956c",
          "red-38": "#d83838",
          "violet-d7": "#7a68d7",
          "violet-ef": "#8873ef",
          "violet-gray": "#efedf6",
          "gray-f6": "#efedf6",
          "black-55": "#555",
          "black-33": "#333",
        },
      },
      dropShadow: {
        sm: "0 4px 4px rgba(123, 104, 215, 0.25)",
      },
      boxShadow: {
        sm: " 0 12px 24px rgba(0, 0, 0, 0.1)",
        md: "0 24px 48px rgba(0, 0, 0, 0.1)",
        nav: "0 24px 48px rgba(123, 104, 215, 0.1)",
        "nav-item": "0 5px 4px -4px rgba(123, 104, 215, 0.7)",
      },
      spacing: {
        header: "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
