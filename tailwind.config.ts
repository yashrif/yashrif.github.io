import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        primary: ['var(--font-inter)'],
        secondary: ['var(--font-work-sans)'],
        tertiary: ['var(--font-berkshire-swash)'],
      },

      /* 🎨 Enhanced Color System - CSS Custom Properties Integration */
      colors: {
        // CSS Variables Integration for Theme Support
        'violet-primary': 'var(--violet-primary)',
        'violet-secondary': 'var(--violet-secondary)',
        'violet-tertiary': 'var(--violet-tertiary)',
        'violet-soft': 'var(--violet-soft)',

        'yellow-innovation': 'var(--yellow-innovation)',
        'yellow-warm': 'var(--yellow-warm)',
        'green-success': 'var(--green-success)',
        'green-growth': 'var(--green-growth)',

        'red-attention': 'var(--red-attention)',
        'red-soft': 'var(--red-soft)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'bg-primary': 'var(--background-primary)',
        'bg-secondary': 'var(--background-secondary)',
      },

      /* 🌈 Enhanced Background Images */
      backgroundImage: {
        // 🎭 Semantic Gradients with CSS Variables
        'gradient-hero':
          'linear-gradient(135deg, var(--violet-soft), var(--violet-primary))',
        'gradient-innovation':
          'linear-gradient(135deg, var(--yellow-innovation), var(--yellow-warm))',
        'gradient-success':
          'linear-gradient(135deg, var(--green-success), var(--green-growth))',
        'gradient-attention':
          'linear-gradient(135deg, var(--red-attention), var(--red-soft))',

        // Enhanced brand gradients
        'brand-primary':
          'linear-gradient(135deg, var(--violet-primary), var(--violet-secondary))',
        'brand-accent':
          'linear-gradient(135deg, var(--yellow-innovation), var(--green-success))',
        'brand-subtle':
          'linear-gradient(135deg, var(--violet-soft), var(--bg-secondary))',

        // 🎨 Violet Gradient Collection
        'violet-light':
          'linear-gradient(135deg, #f8f7ff, #f3f1ff, #e5e1ff, var(--violet-soft))',
        'violet-medium':
          'linear-gradient(135deg, var(--violet-soft), #d1c9f7, var(--violet-primary), var(--violet-secondary))',
        'violet-deep':
          'linear-gradient(180deg, var(--violet-secondary), #9c88ff, var(--violet-primary), var(--violet-tertiary))',
        'violet-spectrum':
          'linear-gradient(180deg, var(--violet-soft), #c4b8f5, var(--violet-primary), var(--violet-tertiary))',

        // 🌟 Innovation Yellow Gradients
        'yellow-soft':
          'linear-gradient(135deg, #fffbf0, #fff8e6, #fff0cc, var(--yellow-warm))',
        'yellow-bright':
          'linear-gradient(135deg, #fff8e6, #ffe066, var(--yellow-innovation), #f5c842)',
        'yellow-intense':
          'linear-gradient(-135deg, var(--yellow-warm), #f5c842, var(--yellow-innovation), #e6b800)',

        // 🌿 Success Green Gradients
        'green-light':
          'linear-gradient(180deg, #f0fdf4, #dcfce7, #bbf7d0, #86efac)',
        'green-vibrant':
          'linear-gradient(180deg, #dcfce7, #86efac, var(--green-success), var(--green-growth))',
        'green-deep':
          'linear-gradient(-135deg, var(--green-growth), #059669, var(--green-success), #10b981)',

        // 🔥 Attention Red Gradients
        'red-soft':
          'linear-gradient(-135deg, #fef2f2, #fecaca, #fca5a5, #f87171)',
        'red-intense':
          'linear-gradient(-135deg, #fecaca, #f87171, var(--red-attention), var(--red-soft))',
      },

      /* 🎯 Enhanced Border Radius */
      borderRadius: {
        lg: '0.5625rem',
        button: '9999px', // Full rounded for buttons
      },

      /* ✨ Enhanced Drop Shadows */
      dropShadow: {
        sm: '0 4px 4px rgba(122, 104, 215, 0.25)',
        violet: '0 4px 8px var(--focus-ring)',
        innovation: '0 4px 8px rgba(253, 208, 71, 0.3)',
        success: '0 4px 8px rgba(12, 166, 120, 0.3)',
      },

      /* 🎪 Enhanced Box Shadows */
      boxShadow: {
        sm: '0 12px 24px rgba(0, 0, 0, 0.1)',
        md: '0 24px 48px rgba(0, 0, 0, 0.1)',
        nav: '0 24px 48px rgba(123, 104, 215, 0.2)',
        'nav-item': '0 5px 4px -4px rgba(123, 104, 215, 0.7)',

        // Enhanced semantic shadows
        violet: '0 8px 16px var(--focus-ring)',
        'violet-lg': '0 20px 40px var(--focus-ring)',
        innovation: '0 12px 24px rgba(253, 208, 71, 0.3)',
        success: '0 12px 24px rgba(12, 166, 120, 0.3)',
        attention: '0 8px 16px rgba(240, 62, 62, 0.3)',
      },

      /* 📏 Enhanced Spacing */
      spacing: {
        header: '5.5rem',
        section: '7rem',
        container: '1320px',
      },

      /* 🎭 Animation Extensions */
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },

      /* 🌀 Custom Keyframes */
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
