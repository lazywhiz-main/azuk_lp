import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B222E',
        background: '#FAF9F6',
        surface: '#FFFFFF',
        accent: '#C25E40',
        secondary: '#D99F59',
        'text-sub': '#64748B',
        border: '#E2E8F0',
        // ダークモード用
        bonfire: '#D97D54',
        moonlight: '#E2E8F0',
        disabled: '#94A3B8',
      },
      fontFamily: {
        sans: ['Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Inter', 'sans-serif'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        xxl: '32px',
        section: '80px',
      },
      borderRadius: {
        button: '8px',
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 12px -2px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config





