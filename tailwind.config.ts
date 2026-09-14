import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1B3D",
          50: "#EEF2FA",
          100: "#D6DEF0",
          200: "#AEC0E3",
          300: "#7F9AD1",
          400: "#4E6DB0",
          500: "#2A4685",
          600: "#1B2F60",
          700: "#12234A",
          800: "#0D1A38",
          900: "#0A1B3D",
          950: "#060F24",
        },
        azure: {
          DEFAULT: "#0EA5E9",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        premium:
          "0 1px 2px rgba(10,27,61,0.04), 0 8px 24px -8px rgba(10,27,61,0.12)",
        "premium-lg":
          "0 4px 12px rgba(10,27,61,0.06), 0 24px 48px -16px rgba(10,27,61,0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
