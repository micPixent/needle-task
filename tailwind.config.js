const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["FuturaPTDemi", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#fefa3",
                    100: "#fdf0db",
                    200: "#fbe7c3",
                    300: "#f9ddab",
                    400: "#f7ce87",
                    500: "#f6c878",
                    600: "#f3b64c",
                    700: "#f1ac34",
                    800: "#e3960f",
                    900: "#9b660a",
                },
                secondary: {
                    50: "#fcfdf9",
                    100: "#f7f9f1",
                    200: "#f1f5e9",
                    300: "#ecf2e0",
                    400: "#e6edd5",
                    500: "#dde7c7",
                    600: "#c7d0b3",
                    700: "#a6ad95",
                    800: "#858b77",
                    900: "#63685a",
                },
                tertiary: {
                    50: "#fbfcfc",
                    100: "#f6f8f9",
                    200: "#f0f4f5",
                    300: "#ebf0f1",
                    400: "#e3eaec",
                    500: "#dae3e5",
                    600: "#c4ccce",
                    700: "#a4aaac",
                    800: "#838889",
                    900: "#626667",
                },
            },
        },
    },
    plugins: [],
}