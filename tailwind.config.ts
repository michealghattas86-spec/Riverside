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
        ink:      "#080e10",
        forest:   "#0a3d45",
        emerald:  "#0e5a69",
        sage:     "#2a8a9e",
        mist:     "#e0f4f7",
        champagne:"#c9a84c",
        gold:     "#e8c96a",
        cream:    "#f5fafb",
        warm:     "#eaf4f6",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:    ["'Outfit'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a84c 0%, #e8c96a 50%, #c9a84c 100%)",
        "emerald-gradient": "linear-gradient(135deg, #0a3d45 0%, #0e5a69 60%, #0a3d45 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
