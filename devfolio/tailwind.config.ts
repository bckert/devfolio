import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          'green-bg': '#305733',
      },
      fontFamily: {
        sans: ['var(--font-dm)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
