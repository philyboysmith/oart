/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['FoundersGrotesk', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                maxWidth: '1280px',
            }
        },
        
    },
    

    plugins: [
        require('@tailwindcss/typography'),
        function ({ addComponents }) {
            addComponents({
              '.container': {
                maxWidth: '1280px'
              }})
            }
    ],
};
