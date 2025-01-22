import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e4f222",
        secondary: "#1a3731",
        black: "#1c1c1c",
        gray: "#eae5e5",
        lightPrimary: "#f5ff78",
        lighterPrimary: "#f6fab2"
      },
    },
  },
  plugins: [],
} satisfies Config;
