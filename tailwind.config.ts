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
      backgroundImage: {
        "red-8b":
          "linear-gradient(-135deg, #feeeee, #feecec, #fbc5c5, #f68b8b)",
        "red-65":
          "linear-gradient(-135deg, #feecec, #f9b2b2, #f68b8b, #f36565)",
        "green-93":
          "linear-gradient(180deg, #e9f7f3, #e7f6f2, #b6e4d7, #3db893)",
        "green-a1":
          "linear-gradient(180deg, #e7f6f2, #9edbc9, #3db893, #55c1a1)",
        "yellow-47":
          "linear-gradient(135deg, #fffaea, #fff9e8, #feedba, #fdd047)",
        "yellow-5e":
          "linear-gradient(135deg, #fff9e8, #fee7a3, #fdd047, #fdd65e)",
      },
      borderRadius: {
        lg: "0.5625rem",
      },
      colors: {
        light: {
          "yellow-69": "#fcda69",
          "yellow-17": "#e3b017",
          "yellow-54": "#caae54",
          "yellow-19": "#fcc419",
          "green-6c": "#0b956c",
          "green-78": "#0ca678",
          "red-38": "#d83838",
          "red-3e": "#f03e3e",
          "violet-d7": "#7a68d7",
          "violet-ef": "#8873ef",
          "violet-gray": "#efedf6",
          "gray-f6": "#efedf6",
          "gray-aa": "#aaa",
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
        nav: "0 24px 48px rgba(123, 104, 215, 0.2)",
        "nav-item": "0 5px 4px -4px rgba(123, 104, 215, 0.7)",
        red: " -28px 28px 56px rgba(246, 139, 139, 0.3)",
        green: "0 28px 56px rgba(12, 166, 120, 0.3)",
        yellow: "28px 28px 56px rgba(245, 159, 0, 0.15)",
      },
      spacing: {
        header: "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
