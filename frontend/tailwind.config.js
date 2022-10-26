/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#00a991',
				'primary-light': '#00dcbd'
			},
			animation: {
				phone: 'phone 500ms ease-out 250ms both',
				header: 'header 500ms ease-out 500ms both',
				content: 'content 500ms ease-out 1500ms both',
				introMessage: 'introMessage 250ms ease-out 2000ms both',
				outputMessage: 'outputMessage 250ms ease-out 2500ms both',
				keypad: 'keypad 500ms ease-out 3000ms both',
				legend: 'legend 500ms ease-out 4000ms both',
				legendText: 'legendText 250ms ease-out 4500ms both'
			},
			keyframes: {
				phone: {
					'0%': {
						transform: 'translateX(+10%)',
						opacity: 0
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: 1
					}
				},
				header: {
					'0%': {
						transform: 'translateY(-10%)',
						opacity: 0
					},
					'75%': {
						transform: 'translateY(0)',
						opacity: 1
					},
					'100%': {
						backdropFilter: 'blur(12px)'
					}
				},
				content: {
					'0%': {
						transformOrigin: 'bottom center',
						transform: 'scale(25%)',
						opacity: 0
					},
					'50%': {
						transform: 'scale(100%)',
						opacity: 1
					}
				},
				introMessage: {
					'0%': {
						transformOrigin: 'top center',
						transform: 'scale(50%) translateX(-25%)',
						opacity: 0
					},
					'100%': {
						transform: 'scale(100%) translateX(0)',
						opacity: 1
					}
				},
				outputMessage: {
					'0%': {
						transformOrigin: 'top center',
						transform: 'scale(50%) translateX(25%)',
						opacity: 0
					},
					'100%': {
						transform: 'scale(100%) translateX(0)',
						opacity: 1
					}
				},
				keypad: {
					'0%': {
						maxHeight: '0',
						opacity: 0
					},
					'50%': {
						maxHeight: '297px',
						opacity: 1
					}
				},
				legend: {
					'0%': {
						transform: 'translateX(-10%)',
						opacity: 0
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: 1
					}
				},
				legendText: {
					'0%': {
						transform: 'translateY(10%)',
						opacity: 0
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1
					}
				}
			}
		}
	}
}
