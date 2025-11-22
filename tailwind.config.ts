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
        background: "#1A201A",
        foreground: "#ffffff",
        "dark-green": "#1A201A",
        "accent-green": "#4ade80",
      },
    },
  },
  plugins: [],
};

export default config;

