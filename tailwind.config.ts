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
        primary: "Inter, sans-serif",
        secondary: "Work Sans, sans-serif",
        tertiary: "Berkshire Swash, sans-serif",
      },
      colors: {
        light: {
          "yellow-69": "#fcda69",
          "yellow-54": "#caae54",
          "violet-d7": "#7a68d7",
          "violet-ef": "#8873ef",
          "gray-f9": "#f9f9f9",
          "black-55": "#555",
          "black-33": "#333",
        },
      },
      boxShadow: {
        "shadow-md": "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
      },
    },
  },
  plugins: [],
};
export default config;
