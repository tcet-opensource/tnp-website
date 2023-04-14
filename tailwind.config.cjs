const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			'sans': ['Inter', ...defaultTheme.fontFamily.sans],
			'title': ['Fraunces', ...defaultTheme.fontFamily.serif],
			'playfair': ['Playfair Display', ...defaultTheme.fontFamily.sans]
		}},
	},
	plugins: [],
}
