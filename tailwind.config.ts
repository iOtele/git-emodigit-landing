import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        ink: "#0B0B14",
        indigo: {
          650: "#EB008B",
        },
        violet: {
          300: "#00A7E9",
          650: "#00A7E9",
        },
      },
      fontFamily: {
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'Inter'",
          "'Segoe UI'",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Text'",
          "'Inter'",
          "'Segoe UI'",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "'SF Mono'",
          "'JetBrains Mono'",
          "ui-monospace",
          "'Roboto Mono'",
          "monospace",
        ],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #EB008B 0%, #00A7E9 100%)",
        "brand-radial":
          "radial-gradient(circle at 30% 20%, rgba(235,0,139,0.20), transparent 55%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 15, 35, 0.04), 0 8px 24px -8px rgba(235, 0, 139, 0.16)",
        lift: "0 20px 40px -12px rgba(0, 167, 233, 0.28)",
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
