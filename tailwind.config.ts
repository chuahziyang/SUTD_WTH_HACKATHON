import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#009278",
        "custom-green-hover": "#007f66",
      },
    },
  },
  plugins: [],
} satisfies Config;
