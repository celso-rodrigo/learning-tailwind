/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	purge: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			"profile-bg": "url('../assets/bg.jpg')"
		},
	},
	plugins: [],
};