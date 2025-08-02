/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        'dark-gray': '#1A1A1A',
        'light-gray': '#2A2A2A',
        'soft-white': '#F8F8F8',
        'rose-gold': '#B76E79',
        'dusty-rose': '#D4A5A5',
        champagne: '#F7E7CE',
        'soft-gold': '#E6D7C3',
        'glow-pink': '#FF69B4',
        'glow-purple': '#9370DB',
        'glow-blue': '#87CEEB',
        // New vibrant colors
        'vibrant-pink': '#FF1493',
        'electric-purple': '#8A2BE2',
        'neon-blue': '#00BFFF',
        'sunset-orange': '#FF4500',
        'emerald-green': '#00FF7F',
        'golden-yellow': '#FFD700',
        'deep-violet': '#9400D3',
        'coral-red': '#FF6347',
        'azure-blue': '#1E90FF',
        'magenta': '#FF00FF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'almarai': ['Almarai', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-vibrant': 'linear-gradient(135deg, #FF1493 0%, #8A2BE2 25%, #00BFFF 50%, #00FF7F 75%, #FFD700 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FF4500 0%, #FF1493 25%, #8A2BE2 50%, #9400D3 75%, #1E90FF 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #00BFFF 0%, #1E90FF 25%, #9370DB 50%, #8A2BE2 75%, #9400D3 100%)',
        'gradient-fire': 'linear-gradient(135deg, #FF4500 0%, #FF6347 25%, #FF1493 50%, #FF00FF 75%, #FFD700 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #00FF7F 0%, #00BFFF 25%, #9370DB 50%, #FF1493 75%, #FFD700 100%)',
        'gradient-professional': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-modern': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rainbow-flow': 'rainbowFlow 6s linear infinite',
        'scroll-left': 'scrollLeft 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(183, 110, 121, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(183, 110, 121, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 20, 147, 0.4), 0 0 40px rgba(138, 43, 226, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.6), 0 0 60px rgba(138, 43, 226, 0.4)' 
          },
        },
        rainbowFlow: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} 