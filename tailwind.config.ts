import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          orange: '#f58c1e',
          green: '#019345',
          DEFAULT: '#f58c1e',
          purple: '#8B3DFF',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
