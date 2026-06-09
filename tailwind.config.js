/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fcfaf6",
        shell: "#fffdf8",
        ink: "#171717",
        muted: "#6b7280",
        coral: "#fbaf24",
        peach: "#f6d39c",
        sky: "#dbeafe",
        mint: "#fef3c7",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ['"Outfit"', "sans-serif"],
      },
      boxShadow: {
        float: "0 30px 80px rgba(15, 23, 42, 0.08)",
        panel: "0 10px 30px rgba(15, 23, 42, 0.06)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(10px, -14px, 0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        pulse: "pulseSoft 5s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top, rgba(245, 158, 11, 0.14), transparent 34%), radial-gradient(circle at 80% 20%, rgba(246, 211, 156, 0.18), transparent 30%), radial-gradient(circle at bottom, rgba(245, 158, 11, 0.08), transparent 28%)",
      },
    },
  },
  plugins: [],
};
