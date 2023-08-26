import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thegreen: "#009278",
        thelightgreen: "#cdf4ec",
        theorange: "#ff8100",
      },
    },
  },
  plugins: [],
} satisfies Config;
