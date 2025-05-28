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

        // Legacy color support (gradually phase out)
        light: {
          'yellow-69': '#fcda69',
          'yellow-17': '#e3b017',
          'yellow-54': '#caae54',
          'yellow-19': '#fcc419',
          'green-6c': '#0b956c',
          'green-78': '#0ca678',
          'red-38': '#d83838',
          'red-3e': '#f03e3e',
          'violet-d7': '#7a68d7',
          'violet-ef': '#8873ef',
          'violet-gray': '#efedf6',
          'gray-f6': '#efedf6',
          'gray-aa': '#aaa',
          'black-55': '#555',
          'black-33': '#333',
        },
      },

      /* 🌈 Enhanced Background Images */
      backgroundImage: {
        // Legacy gradients (maintain for backward compatibility)
        'red-8b':
          'linear-gradient(-135deg, #feeeee, #feecec, #fbc5c5, #f68b8b)',
        'red-65':
          'linear-gradient(-135deg, #feecec, #f9b2b2, #f68b8b, #f36565)',
        'green-93':
          'linear-gradient(180deg, #e9f7f3, #e7f6f2, #b6e4d7, #3db893)',
        'green-a1':
          'linear-gradient(180deg, #e7f6f2, #9edbc9, #3db893, #55c1a1)',
        'yellow-47':
          'linear-gradient(135deg, #fffaea, #fff9e8, #feedba, #fdd047)',
        'yellow-5e':
          'linear-gradient(135deg, #fff9e8, #fee7a3, #fdd047, #fdd65e)',

        // New CSS variable-based gradients
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-innovation': 'var(--gradient-innovation)',
        'gradient-success': 'var(--gradient-success)',
        'gradient-attention':
          'linear-gradient(135deg, var(--red-attention), var(--red-soft))',

        // Enhanced brand gradients
        'brand-primary':
          'linear-gradient(135deg, var(--violet-primary), var(--violet-secondary))',
        'brand-accent':
          'linear-gradient(135deg, var(--yellow-innovation), var(--green-success))',
        'brand-subtle':
          'linear-gradient(135deg, var(--violet-soft), var(--bg-secondary))',
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

        // Legacy shadows (maintain for backward compatibility)
        red: '-28px 28px 56px rgba(246, 139, 139, 0.3)',
        green: '0 28px 56px rgba(12, 166, 120, 0.3)',
        yellow: '28px 28px 56px rgba(245, 159, 0, 0.15)',
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
