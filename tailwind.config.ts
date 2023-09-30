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
          "violet-d7": "#7a68d7",
          "violet-ef": "#8873ef",
          "violet-gray": "#efedf6",
          "gray-f6": "#efedf6",
          "black-55": "#555",
          "black-33": "#333",
        },
      },
      dropShadow: {
        sm: "0 .4rem .4rem rgba(123, 104, 215, 0.25)",
      },
      boxShadow: {
        md: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
        "nav-item": "0 0.5rem 0.4rem -0.4rem rgba(123, 104, 215, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
