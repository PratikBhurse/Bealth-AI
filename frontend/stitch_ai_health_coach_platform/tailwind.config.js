/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    safelist: ['bg-primary/10', 'text-primary', 'bg-secondary/10', 'text-secondary', 'bg-tertiary/10', 'text-tertiary'],
    theme: {
        extend: {
            colors: {
                background: '#faf8ff',
                surface: '#faf8ff',
                'surface-container-lowest': '#ffffff',
                'surface-container-low': '#f2f3ff',
                'surface-container': '#eaedff',
                'surface-container-high': '#e2e7ff',
                'surface-container-highest': '#dae2fd',
                'on-surface': '#131b2e',
                'on-surface-variant': '#3e4947',
                outline: '#6e7977',
                'outline-variant': '#bdc9c6',
                primary: '#005c55',
                'primary-container': '#0f766e',
                'primary-fixed': '#9cf2e8',
                'primary-fixed-dim': '#80d5cb',
                secondary: '#9d4300',
                'secondary-container': '#fd761a',
                'secondary-fixed': '#ffdbca',
                tertiary: '#005683',
                'tertiary-container': '#006fa8',
                'tertiary-fixed': '#cce5ff',
                'on-primary': '#ffffff',
                'on-secondary': '#ffffff',
                'on-tertiary': '#ffffff',
            },
            fontFamily: {
                headline: ['Plus Jakarta Sans', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                card: '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
            },
        },
    },
    plugins: [],
};
