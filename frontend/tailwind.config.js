/** @type {import('tailwindcss').Config} */

module.exports = {
	plugins: [],
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#00a991'
			}
		}
	}
}
