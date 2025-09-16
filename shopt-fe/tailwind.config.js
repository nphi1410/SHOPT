// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        boxdrop: {
          "0%": { transform: "translateY(-40px)", opacity: 0 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "60%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(50px)", opacity: 0 },
        },
      },
      animation: {
        "spin-slow": "spinSlow 1s linear infinite",
        boxdrop: "boxdrop 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
