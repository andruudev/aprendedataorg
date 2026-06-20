import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e1a",
        surface: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.09)",
        accent: {
          DEFAULT: "#6c63ff",
          pink: "#ff6584",
        },
        text: {
          DEFAULT: "#f0f0f0",
          muted: "#8a8fa8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
