import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.primary-btn': {
          '@apply p-2 rounded bg-yellow-300 hover:bg-blue-600 text-amber-600 font-semibold': {},
        },
      });
    },
  ],
};
export default config;
