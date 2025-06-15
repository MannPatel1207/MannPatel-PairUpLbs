module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
            slideIn: 'slideIn 0.5s ease-out',
            slideUp: 'slideUp 0.6s ease-out',
            fadeIn: 'fadeIn 0.8s ease-in',
            fadeInSlow: 'fadeIn 1.5s ease-in',
            scaleFadeIn: 'scaleFadeIn 1s ease-in',
            progressRing: 'fillCircle 2s forwards',
            },
            keyframes: {
            slideUp: {
                '0%': { transform: 'translateY(100%)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
            },
            fadeIn: {
                from: { opacity: 0 },
                to: { opacity: 1 },
            },
            scaleFadeIn: {
                '0%': { opacity: 0, transform: 'scale(0.8)' },
                '100%': { opacity: 1, transform: 'scale(1)' },
            },
            fillCircle: {
                '0%': { strokeDashoffset: 314 },
                '100%': { strokeDashoffset: 0 },
            },
            },
        },
    },
    plugins: [],
}