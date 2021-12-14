module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sh: { raw: "(max-height: 630px),(max-width:350px)" },
      },
    },
  },
  plugins: [],
};
