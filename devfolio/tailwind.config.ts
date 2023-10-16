import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          'green-bg': '#042F10',
          'brown-bg': '#72310D',
          'off-white-bg': '#FFF9EF',
          'yellow-bg': '#CA903A'
      },
      fontFamily: {
        sans: ['var(--font-dm)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
