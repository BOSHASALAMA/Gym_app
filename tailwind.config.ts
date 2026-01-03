import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
    theme: {
    extend: {},
  },
  plugins: [],
  // Optimize for production
  ...(process.env.NODE_ENV === 'production' && {
    future: {
      hoverOnlyWhenSupported: true,
    },
  }),
};

export default config;