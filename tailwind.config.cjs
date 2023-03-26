/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        


"primary": "#ddbdf9",
        


"secondary": "#ada1e2",
        


"accent": "#ffd7cc",
        


"neutral": "#1E1D25",
        


"base-100": "#21234A",
        


"info": "#6EABD4",
        


"success": "#22AA56",
        


"warning": "#F8A920",
        


"error": "#E96D6D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
