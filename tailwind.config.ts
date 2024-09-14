import type { Config } from "tailwindcss"
import { } from "node:test";


const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#FFFFFF",
					// DEFAULT: "#221C47",
					light: "#CCCCCC",
					dark: "#9B9B9B",
					bg: "#D9D9D9",
				},
				secondaryNew: {
					DEFAULT: "#221C47",
					light: "#4D4373",
					dark: "#000020",
				},
				accent1: {
					DEFAULT: "#FDB62E",
					light: "#FFE863",
					dark: "#C58600",
				},
				accent2: {
					DEFAULT: "#748BC5",
					light: "#A5BBF8",
					dark: "#445E94",
				},
				accent3: {
					DEFAULT: "#A9D49B",
					light: "#DBFFCC",
					dark: "#79A36C",
				},
				accent4: {
					DEFAULT: "#F16878",
					light: "#FF9AA7",
					dark: "#BA364C",
				},
				green: {
					500: "#24AE7C",
					600: "#0D2A1F",
				},
				blue: {
					500: "#79B5EC",
					600: "#152432",
				},
				red: {
					500: "#F37877",
					600: "#3E1716",
					700: "#F24E43",
				},
				light: {
					200: "#E8E9E9",
				},
				dark: {
					200: "#0D0F10",
					300: "#131619",
					400: "#1A1D21",
					500: "#363A3D",
					600: "#76828D",
					700: "#ABB8C4",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				// primary: {
				//   DEFAULT: "hsl(var(--primary))",
				//   foreground: "hsl(var(--primary-foreground))",
				// },
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		debugScreens: {
			style: {
				backgroundColor: "#C0FFEE",
				color: "black",
			},
			ignore: ["dark"],
			position: ["bottom", "left"],
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwindcss-debug-screens"),
		
	],
} satisfies Config

export default config