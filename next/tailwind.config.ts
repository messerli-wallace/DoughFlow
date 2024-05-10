import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*",
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
    },
      colors: {
      transpart: 'transparent',
      current: 'currentColor',
      'dfyellow': '#FFBB84',
      'dfbrown': '#996F4F',
      'dfwhite': '#FFE4D1',
      'dfgray': '#36312e',
    },
  },
  plugins: [],
};
export default config;
