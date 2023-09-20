/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        //  Enable background-clip utilities
        backgroundClip: ["text"],
        fontFamily: {
            sans: [
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: [
                "ui-serif",
                "Georgia",
                "Cambria",
                '"Times New Roman"',
                "Times",
                "serif",
            ],
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace",
            ],
        },
        extend: {
            colors: {
                "main-bg-color": "rgb(24,24,26)",
                "main-blue": "rgb(89, 203, 230)",
                "main-purple": "rgb(90, 118, 186)",
                "text-cream": "rgb(194,178,150)",
                "text-whiteish": "rgb(239,234,234)"
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

// font-family: 'Anton', sans-serif;
// font-family: 'Inconsolata', monospace;
// font-family: 'Inter', sans-serif;
