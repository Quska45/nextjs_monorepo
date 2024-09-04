/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/ui/components/**/*.tsx",
    "./packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "ml-2",
    "ml-4",
    "ml-6",
    "ml-8",
    "ml-10",
    "ml-12",
    "ml-14",
    "ml-16",
  ],
  plugins: [],
};
