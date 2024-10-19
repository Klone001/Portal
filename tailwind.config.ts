import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        EFCircular: ["var(--font-efcircular)"]
      },
      maxWidth: {
        'container': '83rem' 
      },
      fontSize: {
        xs: '13px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        "primary0": "#417760",
        input: {
          DEFAULT: "var(--input)",
          focus: "var(--input-focus)"
        },
        success: '#04802E',
        "success-400": "#0F973D",
        
        "gray-200": "#f6f6f6",
        "gray-300": "#F2F4F4",
        "gray-500": "#DCDCDC",
        "gray-600": "#ACACAC",
        "gray-800": "#666666",
        "gray-700": "#858585",

        "white-smoke": "#FAFAFA",
        
        "blue": "#005FCF",
        
        "error-400": "#D42620",
        "error-500": "#CB1A14",
        
        "secondary-200": "#E0BF6A",
        "secondary-800": "#58430D",
        "secondary-50": "#FAF6E9",
        "secondary-700": "#735812",

        "accent-800": "#2C5B57",
      },
      backgroundImage: {
        'auth-bg': "url('/images/auth_bg.jpeg')",
      },
      boxShadow: {
        '2xl': '0px 2px 16px -2px rgba(74, 154, 147, 0.08)', // Custom shadow
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    nextui(),    
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
