import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Myce Brand Colors - 60-30-10 Rule

        // Primary (60%) - Myce Blue
        primary: {
          DEFAULT: '#0043FF',
          50: '#E6EDFF',
          100: '#CCDBFF',
          200: '#99B8FF',
          300: '#6694FF',
          400: '#3371FF',
          500: '#0043FF', // Main brand color
          600: '#0036CC',
          700: '#002899',
          800: '#001B66',
          900: '#000D33',
          950: '#000619',
        },

        // Neutral (30%)
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },

        // Accent (10%) - Electric Cyan
        accent: {
          DEFAULT: '#00D9FF',
          50: '#E6F9FF',
          100: '#CCF4FF',
          200: '#99E9FF',
          300: '#66DEFF',
          400: '#33D3FF',
          500: '#00D9FF', // Interactive elements
          600: '#00AED9',
          700: '#0082A3',
          800: '#00566D',
          900: '#002B36',
        },

        // Semantic Colors
        success: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          DEFAULT: '#EF4444',
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Type Scale
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1-md': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1-sm': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-md': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-sm': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-md': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-sm': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.01em' }],
      },
      spacing: {
        // 8-point grid system
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        // Responsive section spacing
        'section-mobile': '3rem',    // 48px
        'section-tablet': '4rem',    // 64px
        'section-desktop': '6rem',   // 96px
        'section-wide': '8rem',      // 128px
      },
      minHeight: {
        'touch': '44px',  // Minimum touch target (iOS)
        'touch-lg': '48px', // Recommended touch target (Material)
      },
      minWidth: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      borderRadius: {
        'myce': '8px',
        'myce-lg': '12px',
        'myce-xl': '16px',
      },
      boxShadow: {
        'myce': '0 1px 3px rgba(0, 67, 255, 0.12)',
        'myce-md': '0 4px 6px rgba(0, 67, 255, 0.1)',
        'myce-lg': '0 10px 15px rgba(0, 67, 255, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'myce': '12px',
      },
      transitionDuration: {
        'myce': '200ms',
        'myce-slow': '300ms',
      },
      transitionTimingFunction: {
        'myce': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
