import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "#2563eb", // blue-600
					light: "#eff6ff", // blue-50
					dark: "#1e40af", // blue-800
				},
				accent: {
					DEFAULT: "#fff7f0", // custom bg
				},
				muted: {
					DEFAULT: "#64748b", // gray-600
					dark: "#334155", // gray-700
				},
			},
			fontFamily: {
				display: [
					"Montserrat",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
				sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
				mono: [
					"Fira Mono",
					"ui-monospace",
					"SFMono-Regular",
					"monospace",
				],
			},
		},
	},
	plugins: [],
} satisfies Config;
