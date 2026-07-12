import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05070d",
          900: "#080b14",
          800: "#0d111c",
          700: "#141a29",
          600: "#1c2438",
        },
        electric: "#00d4ff",
        violet: "#4f6bff",
        amber: "#ffb100",
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-rajdhani)", "sans-serif"],
      },
      backgroundImage: {
        "grid-texture":
          "linear-gradient(rgba(0, 212, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "glow-electric": "0 0 24px 0 rgba(0, 212, 255, 0.25)",
        "glow-amber": "0 0 32px 0 rgba(255, 177, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
