/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        pretendard: ["pretendard"],
        Salvar: ["Salvar"],
        GothamBold: ["Gotham bold"],
        GothamItalic: ["Gotham bold italic"],
      },

      colors: {
        ocean: "#281CFF",
        gray: "#D9D9D9",
        btnGray: "#969696",
      },

      screens: {
        l: "1280px",
        m: "1080px",
        s: "768px",
        x: "568px",
        q: "460px",
        p: "360px",
        tall: { raw: "(min-height: 780px)" },
        tiny: { raw: "(max-width: 360px)" },
      },
    },
  },
  plugins: [],
  mode: "jit",
};
