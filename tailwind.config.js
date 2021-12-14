module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sh: { raw: "(max-height: 800px),(max-width:300px)" },
      },
    },
  },
  plugins: [],
};
