/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors:{
                sada:'rgb(94, 147, 76)',
                c1: 'rgb(246, 62, 25)',
                c2: 'rgb(229, 255, 253)',
                c3: 'rgb(208, 208, 208,.3)',
                c4: 'rgb(0, 0, 0,.6)',
            },
            fontFamily: {
                'inter': [ "Inter", 'sans-serif']
            },
            fontWeight:{
                'medium':500,
                'bold':700,
                'black':900
            }
        },
    },
    plugins: [],
}
