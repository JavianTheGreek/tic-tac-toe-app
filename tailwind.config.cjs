/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "grid-cols-3": "repeat(3, 1fr) / repeat(3, 1fr)",
            },
        },
    },
    plugins: [],
};
