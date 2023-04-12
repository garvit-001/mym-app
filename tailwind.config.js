module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#608662",
        gray_51: "#fafafa",
        green_100: "#c2ecc1",
        gray_500: "#94979a",
        gray_500_4c: "#94979a4c",
        gray_901: "#1f1f1f",
        deep_purple_100_1e: "#d4d4fc1e",
        gray_900_66: "#13131366",
        gray_900: "#131313",
        gray_200_7f: "#ececec7f",
        black_900_3f: "#0000003f",
        deep_purple_100: "#d4d4fc",
        green_50: "#ddf6de",
        gray_200: "#ececec",
        gray_50: "#f8f8f8",
        indigo_100: "#c5c7f6",
        black_900_dd: "#000000dd",
        black_900_99: "#00000099",
        gray_200_63: "#ececec63",
        black_900_60: "#00000060",
        gray_200_cc: "#ecececcc",
        white_A700_06: "#ffffff06",
        white_A700: "#ffffff",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: {
        sulphurpoint: "Sulphur Point",
        roboto: "Roboto",
        rubik: "Rubik",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};