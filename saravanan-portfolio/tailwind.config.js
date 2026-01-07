/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        // Pure Black
        black: "#000000",
        // Purple/Violet Theme
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        // Cyan Theme
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        // Pink for accents
        pink: {
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-left": "slideInLeft 0.6s ease-out forwards",
        "slide-right": "slideInRight 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "floating 3s ease-in-out infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "scale-pulse": "scalePulse 2s ease-in-out infinite",
        gradient: "gradientShift 3s ease infinite",
        glow: "glowPulse 2s ease-in-out infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        shimmer: "textShimmer 3s linear infinite",
        "bounce-in": "bounceIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(6, 182, 212, 0.5), 0 0 120px rgba(168, 85, 247, 0.3)",
          },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glowPulse: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))",
          },
          "50%": {
            filter: "drop-shadow(0 0 24px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 16px rgba(6, 182, 212, 0.5))"
          },
        },
        borderGlow: {
          "0%, 100%": {
            borderColor: "rgba(168, 85, 247, 0.3)",
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)",
          },
          "50%": {
            borderColor: "rgba(168, 85, 247, 0.8)",
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)",
          },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)",
        "gradient-purple-cyan":
          "linear-gradient(to right, #a855f7, #06b6d4)",
      },
    },
  },
  plugins: [],
};
