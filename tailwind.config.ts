import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        brandSky: "#00CCFF",
        accent: "#FFB300",
        ember: "#FF6600",
        ink: "#1A1A1A",
        mist: "#F8F9FA",
      },
      boxShadow: {
        glow: "0 30px 80px rgba(0, 102, 255, 0.18)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(115deg, rgba(3,17,45,0.86) 12%, rgba(2,29,77,0.62) 48%, rgba(0,102,255,0.18) 100%)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        rise: "rise 800ms ease-out both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
