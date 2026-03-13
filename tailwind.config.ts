import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:      "#0a0e0d",
        forest:   "#0d3d2b",
        emerald:  "#1a6645",
        sage:     "#4a9070",
        mist:     "#e8f2ec",
        champagne:"#c9a84c",
        gold:     "#e8c96a",
        cream:    "#faf7f0",
        warm:     "#f5efe3",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:    ["'Outfit'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a84c 0%, #e8c96a 50%, #c9a84c 100%)",
        "emerald-gradient": "linear-gradient(135deg, #0d3d2b 0%, #1a6645 60%, #0d3d2b 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
