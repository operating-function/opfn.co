import type { Config } from "tailwindcss";

const config: Config = {
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
      spacing: {
        "opfn-sm": "2.25em", // 36px at default font size
        "opfn": "3em", // 48px at default font size
        "opfn-lg": "4.5625em",  // 73px at default font size
      },
      width: {
        'opfn-xs': '24rem',     // 384px
        'opfn-narrow': '49.5rem',  // 792px
        'opfn': '58.5rem',  // 936px
      },
      maxWidth: {
        'opfn-xs': '24rem',     // 384px
        'opfn-narrow': '49.5rem',  // 792px
        'opfn': '58.5rem',  // 936px
      }
    },
  },
  plugins: [],
};
export default config;
