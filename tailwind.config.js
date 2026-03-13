export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#080C14",
        card: "#0D1117",
        border: "#1E2D40",
        accent: "#4F8EF7",
        accentsoft: "#4F8EF720",
        muted: "#8B9BB4",
        light: "#E8EEF7",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}