/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--color-bg)',
        bgSecondary: 'var(--color-bg-sec)',
        cardBg: 'var(--color-card)',
        borderPrimary: 'var(--color-border)',
        textPrimary: 'var(--color-text-primary)',
        textSecondary: 'var(--color-text-secondary)',
        textMuted: 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        accentHover: 'var(--color-accent-hover)',
        
        // Backwards compatibility mappings
        lightBg: 'var(--color-bg)',
        lightCard: 'var(--color-card)',
        lightText: 'var(--color-text-primary)',
        lightAccent: 'var(--color-accent)',
        darkBg: 'var(--color-bg)',
        darkCard: 'var(--color-card)',
        darkText: 'var(--color-text-primary)',
        darkAccent: 'var(--color-accent)',
      },
      fontFamily: {
        heading: ['Geist', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-name': ['4.5rem', { lineHeight: '1.05', fontWeight: '700' }], // 72px
        'hero-sub': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }], // 36px
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }], // 64px
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // 40px
        'card': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }], // 24px
        'body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
      }
    },
  },
  plugins: [],
}