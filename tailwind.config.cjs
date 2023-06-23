/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        //  Enable background-clip utilities
        backgroundClip: ["text"],
        extend: {
            colors: {
                "main-blue": "rgb(89, 203, 230)",
                "main-purple": "rgb(90, 118, 186)",
                "text-cream": "rgb(194,178,150)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "1.2em" },
            });
        }),
    ],
};
