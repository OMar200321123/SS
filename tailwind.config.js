/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        alexandria: ["Alexandria", "sans-serif"],
        kufam: ["Kufam", "sans-serif"],
      },
      backgroundImage: {
        main_back: "url('./app/utils/assets/main_back.png')",
        logo_back: "url('./app/utils/assets/logo_center.png')",
      },
      boxShadow: {
        shadow_image: "0px 4px 40px 0px #000000FC",
      },
      screens: {
        "mainScreen":'1441px',
        'custom': '1435px',
        'custom2': '910px',
        'custom3': '770px',
        'designCustom': '1400px',
      },
      colors: {
        secondaryDesign: "#81BC05",
        cancelDesign: "#FF1500",
        cancel2: "#F03D3E",
        orange: "#EBA221",
        primaryService: "#659292",
        lessOrange: "#FCF3E4",
        lessBlue: "#F1F6F6",
        lessGreen: "#E9F5D1",
        bg2: "#FAFAFA",
        main1: "#B2E943",
        text4: "#E1E1E1",
        text3: "#B4B4B4",
        text2: "#505050",
        text1: "#252525",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        orgColor: "#FCF3E4",
        reqColor: "#F1F6F6",
        conColor: "#E9F5D1",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
