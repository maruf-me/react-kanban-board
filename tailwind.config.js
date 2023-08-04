/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00146b',
          50: '#00b4ff',
        },
        secondary: {
          10: '#f3f7ff',
          20: '#d5dded',
          100: '#131828',
        },
      },
    },
  },
  plugins: [],
});