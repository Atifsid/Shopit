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
        primary: "#2874f0",
        secondary: "#ffe500",
        error: "#ef4444",
        sucess: "#16a34a",
      },
    },
  },
  plugins: [],
};
export default config;
