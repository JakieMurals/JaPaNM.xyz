module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#1d4ed8",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
        "fg": "rgb(78, 76, 87)", // Foreground color for text
        "neutral-100": "#F5F5F5", // Light hover background
        "neutral-800": "#262626", // Dark hover background
      },
      screens: {
        midmd: "880px",
      },
      spacing: {
        0: "0px", // Ensure no unintended spacing
        2: "10px", // Padding for `.p-2`
      },
      borderRadius: {
        full: "9999px", // For `.rounded-full`
      },
      transitionProperty: {
        all: "all", // For `.transition-all`
      },
      transitionDuration: {
        300: "300ms", // For `.duration-300`
      },
      transitionTimingFunction: {
        linear: "linear", // For `.ease-linear`
      },
      rotate: {
        90: "90deg", // For `.active:children:rotate-90`
      },
    },
  },
  plugins: [],
};
