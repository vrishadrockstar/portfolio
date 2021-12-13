module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sh: { raw: "(max-height: 700px)" },
      },
    },
  },
  plugins: [],
};
