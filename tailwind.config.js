/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const customize = {
	colors: {
		brand: {
			primary: {
				'orange100': '#dd5621',
			},
		},
		supportive: {
			blue: {
				'blue100': '#a3c4e3',
				'blue50': '#a7cbed',
				'blue10': '#cce2f7'
			},
			green: {
				'green100': '#add4aa',
				'green50': '#bbe5b8',
				'green10': '#ddf0db',
			},
			violet: {
				'violet100': '#d6b9e0',
				'violet50': '#e9c9f4',
				'violet10': '#f3e6f7',
			},
			yellow: {
				'yellow100': '#d4d459',
				'yellow50': '#f4f4a8',
				'yellow10': '#f5f5ce',
			},
		},
		neutral: {
			default: {
				'black': '#000000',
				'white': '#ffffff',
			},
			beige: {
				'light': '#faf6ed',
				'shade': '#e6e0d4'
			},
			dark: {
				'dark100': '#091818'
			},
			warm: {
				'light': '#fceee9',
				'warm': '#f9dfd5',
				'shade': '#f0e3de',
			}
		},
		ui: {
			'successGreen': '#027a48',
			'successGeenLight': '#ecfdf3',
			'errorRed': '#b42318',
			'errorRedLight': '#fef3f2'
		}
	},
	fontFamily: {
		body: {
			'body1': 'Hanken Grotesk'
		},
		heading: {
			'superhighlight': 'Homemade Apple',
			'heading1': 'Besley',
			'heading2': 'Jost',
		},
		label: {
			'label': 'Besley'
		}
	},
	fontWeight: {
		regular: '400',
		medium: '500',
		semibold: '600',
	},
};


export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: customize.fontFamily,
			colors: {},
		},
	},
};
