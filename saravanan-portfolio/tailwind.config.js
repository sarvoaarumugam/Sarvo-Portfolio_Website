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
        // Emerald/Green Theme
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
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
              "0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(16, 185, 129, 0.5), 0 0 60px rgba(16, 185, 129, 0.3), 0 0 80px rgba(16, 185, 129, 0.2)",
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
            filter: "drop-shadow(0 0 5px rgba(16, 185, 129, 0.5))",
          },
          "50%": { filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))" },
        },
        borderGlow: {
          "0%, 100%": {
            borderColor: "rgba(16, 185, 129, 0.3)",
            boxShadow: "0 0 10px rgba(16, 185, 129, 0.2)",
          },
          "50%": {
            borderColor: "rgba(16, 185, 129, 0.8)",
            boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
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
        "gradient-emerald":
          "linear-gradient(135deg, #10b981, #34d399, #059669)",
      },
    },
  },
  plugins: [],
};
