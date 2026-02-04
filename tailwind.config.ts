import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './content/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary Brand Color
                midnight: {
                    DEFAULT: '#0B1C2D',
                    50: '#E8EDF2',
                    100: '#D1DBE5',
                    200: '#A3B7CB',
                    300: '#7593B1',
                    400: '#476F97',
                    500: '#1A4B7D',
                    600: '#153C64',
                    700: '#102D4B',
                    800: '#0B1C2D',
                    900: '#060E17',
                    light: '#1A4B7D',  // Alias for midnight-500
                },
                // Classical Gold Accent
                gold: {
                    DEFAULT: '#D4AF37',
                    50: '#FBF6E7',
                    100: '#F7EDCF',
                    200: '#EFDB9F',
                    300: '#E7C96F',
                    400: '#DFB73F',
                    500: '#D4AF37',
                    600: '#B8952B',
                    700: '#8A6F20',
                    800: '#5C4A16',
                    900: '#2E250B',
                    dark: '#B8952B',  // Alias for gold-600
                },
                // Backgrounds
                surface: {
                    light: '#F8F5EF',
                    white: '#FFFFFF',
                    muted: '#F0EBE1',
                },
                // Text Colors
                text: {
                    primary: '#1A1A1A',
                    secondary: '#555555',
                    muted: '#777777',
                },
                // Borders
                border: {
                    subtle: '#E6E6E6',
                    light: '#F0F0F0',
                },
                // States
                success: '#1E7D32',
                error: '#C62828',
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
                'h1-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
                'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
                'h2-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
                'h3': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
                'h3-mobile': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
                'h4': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
                'h4-mobile': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
                'body-lg': ['1.125rem', { lineHeight: '1.6' }],
                'body': ['1rem', { lineHeight: '1.6' }],
                'body-sm': ['0.875rem', { lineHeight: '1.5' }],
            },
            spacing: {
                'section': '5rem',
                'section-mobile': '2.5rem',
            },
            maxWidth: {
                'container': '1200px',
            },
            borderRadius: {
                'card': '16px',
                'input': '12px',
                'badge': '8px',
            },
            boxShadow: {
                'soft': '0 8px 24px rgba(0, 0, 0, 0.06)',
                'soft-lg': '0 12px 32px rgba(0, 0, 0, 0.08)',
                'card-hover': '0 16px 40px rgba(0, 0, 0, 0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

export default config;
