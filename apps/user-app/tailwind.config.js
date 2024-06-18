/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  'hsl(193, 80%, 92%)',
          100: 'hsl(192, 77%, 84%)',
          200: 'hsl(191, 72%, 75%)',
          300: 'hsl(190, 72%, 59%)',
          400: 'hsl(189, 100%, 47%)',
          500: 'hsl(193, 100%, 42%)',
          600: 'hsl(200, 100%, 36%)',
          700: 'hsl(210, 97%, 28%)',
          800: 'hsl(237, 95%, 18%)',
          900: 'hsl(258, 28%, 7%)'
        },
        secondary: {
          100: 'hsl(270, 100%, 97%)',
          200: 'hsl(270, 90%, 95%)',
          300: 'hsl(270, 75%, 92%)',
          400: 'hsl(270, 65%, 87%)',
          500: 'hsl(270, 60%, 80%)',
          600: 'hsl(270, 55%, 70%)',
          700: 'hsl(270, 50%, 55%)',
          800: 'hsl(270, 45%, 45%)',
          900: 'hsl(270, 40%, 35%)',
        },
        accent: {
          100: 'hsl(180, 100%, 97%)',
          200: 'hsl(180, 85%, 91%)',
          300: 'hsl(180, 80%, 80%)',
          400: 'hsl(180, 77%, 72%)',
          500: 'hsl(180, 75%, 65%)',
          600: 'hsl(180, 70%, 55%)',
          700: 'hsl(180, 65%, 45%)',
          800: 'hsl(180, 60%, 35%)',
          900: 'hsl(180, 55%, 30%)',
        },
        neutral: {
          100: 'hsl(210, 100%, 97%)',
          200: 'hsl(210, 20%, 95%)',
          300: 'hsl(210, 15%, 90%)',
          400: 'hsl(210, 15%, 75%)',
          500: 'hsl(210, 10%, 55%)',
          600: 'hsl(210, 8%, 40%)',
          700: 'hsl(210, 8%, 25%)',
          800: 'hsl(210, 8%, 15%)',
          900: 'hsl(210, 10%, 10%)',
        },
        failure: {
          100: 'hsl(0, 100%, 97%)',
          200: 'hsl(0, 85%, 91%)',
          300: 'hsl(0, 80%, 80%)',
          400: 'hsl(0, 77%, 72%)',
          500: 'hsl(0, 75%, 65%)',
          600: 'hsl(0, 70%, 55%)',
          700: 'hsl(0, 65%, 45%)',
          800: 'hsl(0, 60%, 35%)',
          900: 'hsl(0, 55%, 30%)',
        },
        success: {
          100: 'hsl(120, 100%, 97%)',
          200: 'hsl(120, 85%, 91%)',
          300: 'hsl(120, 80%, 80%)',
          400: 'hsl(120, 77%, 72%)',
          500: 'hsl(120, 75%, 65%)',
          600: 'hsl(120, 70%, 55%)',
          700: 'hsl(120, 65%, 45%)',
          800: 'hsl(120, 60%, 35%)',
          900: 'hsl(120, 55%, 30%)',
        },
        process: {
          100: 'hsl(45, 100%, 97%)',
          200: 'hsl(45, 85%, 91%)',
          300: 'hsl(45, 80%, 80%)',
          400: 'hsl(45, 77%, 72%)',
          500: 'hsl(45, 75%, 65%)',
          600: 'hsl(45, 70%, 55%)',
          700: 'hsl(45, 65%, 45%)',
          800: 'hsl(45, 60%, 35%)',
          900: 'hsl(45, 55%, 30%)',
        },
        blacks : '#1e1e1c',
        subblack : '#212121',
        cardblack : '#2a2a2b',
        dashblack : '#161614',
        navred :'#ff4545'
      },
      screens: {
        'sm2': '640px', // Custom small breakpoint
        'md2': '900px', // Custom medium breakpoint
        'lg2': '1100px', // Custom large breakpoint
        'xl2': '1440px', // Custom extra-large breakpoint
      },
  },
},
  plugins: [],
}
