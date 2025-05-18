/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const customize = {
	colors: {
		brand: {
			primary: {
				orange100: '#dd5621',
			},
		},
		supportive: {
			blue: {
				blue100: '#a3c4e3',
				blue50: '#a7cbed',
				blue10: '#cce2f7',
			},
			green: {
				green100: '#add4aa',
				green50: '#bbe5b8',
				green10: '#ddf0db',
			},
			violet: {
				violet100: '#d6b9e0',
				violet50: '#e9c9f4',
				violet10: '#f3e6f7',
			},
			yellow: {
				yellow100: '#d4d459',
				yellow50: '#f4f4a8',
				yellow10: '#f5f5ce',
			},
		},
		neutral: {
			black: '#000000',
			white: '#ffffff',
			beige: {
				light: '#faf6ed',
				shade: '#e6e0d4',
			},
			dark: {
				dark100: '#091818',
			},
			warm: {
				light: '#fceee9',
				warm: '#f9dfd5',
				shade: '#f0e3de',
			},
		},
		ui: {
			successGreen: '#027a48',
			successGeenLight: '#ecfdf3',
			errorRed: '#b42318',
			errorRedLight: '#fef3f2',
		},
	},
	fontFamily: {
		superhighlight: ['Homemade Apple', 'cursive'],
		h1: ['Besley'],
		h2: ['Besley'],
		h2sans: ['Jost', 'sans-serif'],
		h3: ['Besley', 'serif'],
		h3sans: ['Jost', 'sans-serif'],
		h4: ['Jost', 'sans-serif'],
		h5: ['Jost', 'sans-serif'],
		body: ['Hanken Grotesk', 'sans-serif'],
		label: ['Besley', 'serif'],
	},
	fontWeight: {
		regular: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
	},
	fontSize: {
		superhighlight: ['120px', {lineHeight: '1.25', letterSpacing: '-0.02em'}],
		h1: ['80px', {lineHeight: '1', letterSpacing: '-0.02em'}],
		h2: ['60px', {lineHeight: '1.2'}],
		h3: ['38px', {lineHeight: '1.2'}],
		h4: ['24px', {lineHeight: '1.2'}],
		h5: ['18px', {lineHeight: '1.2'}],
		body: ['16px', {lineHeight: '1.2'}],
		body18: ['18px', {lineHeight: '1.2'}],
		labelLg: ['18px', {lineHeight: '1', letterSpacing: '0'}],
		labelMd: ['14px', {lineHeight: '1', letterSpacing: '0'}],
		labelSm: ['12px', {lineHeight: '1', letterSpacing: '0'}],
	},
};

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
				'1/1.3': '1 / 1.3',
				'1/1': '1 / 1',
			},
			fontFamily: customize.fontFamily,
			fontSize: customize.fontSize,
			colors: {
				border: {
					default: {
						primary: customize.colors.brand.primary.orange100,
						secondary: customize.colors.neutral.dark.dark100,
					},
					archive: {
						tertiary: customize.colors.neutral.beige.shade,
						alternate: customize.colors.neutral.beige.light,
					},
					supportive: {
						blue: {
							light: customize.colors.supportive.blue.blue10,
							mid: customize.colors.supportive.blue.blue50,
							dark: customize.colors.supportive.blue.blue100,
						},
						green: {
							light: customize.colors.supportive.green.green10,
							mid: customize.colors.supportive.green.green50,
							dark: customize.colors.supportive.green.green100,
						},
						violet: {
							light: customize.colors.supportive.violet.violet10,
							mid: customize.colors.supportive.violet.violet50,
							dark: customize.colors.supportive.violet.violet100,
						},
						yellow: {
							light: customize.colors.supportive.yellow.yellow10,
							mid: customize.colors.supportive.yellow.yellow50,
							dark: customize.colors.supportive.yellow.yellow100,
						},
					},
					ui: {
						success: customize.colors.ui.successGreen,
						error: customize.colors.ui.errorRed,
					},
				},
				link: {
					primary: customize.colors.brand.primary.orange100,
					secondary: customize.colors.neutral.dark.dark100,
					alternate: customize.colors.neutral.beige.shade,
				},
				surface: {
					alternate: customize.colors.neutral.dark.dark100,
					primary: customize.colors.brand.primary.orange100,
					def: customize.colors.neutral.warm.light,
					secondary: customize.colors.neutral.warm.warm,
					tertiary: customize.colors.neutral.warm.shade,
					archive: {
						secondary: customize.colors.neutral.beige.light,
						tertiary: customize.colors.neutral.beige.shade,
					},
					supportive: {
						blue: {
							dark: customize.colors.supportive.blue.blue100,
							mid: customize.colors.supportive.blue.blue50,
							light: customize.colors.supportive.blue.blue10,
						},
						green: {
							dark: customize.colors.supportive.green.green100,
							mid: customize.colors.supportive.green.green50,
							light: customize.colors.supportive.green.green10,
						},
						violet: {
							dark: customize.colors.supportive.violet.violet100,
							mid: customize.colors.supportive.violet.violet50,
							light: customize.colors.supportive.violet.violet10,
						},
						yellow: {
							dark: customize.colors.supportive.yellow.yellow100,
							mid: customize.colors.supportive.yellow.yellow50,
							light: customize.colors.supportive.yellow.yellow10,
						},
					},
					ui: {
						success: customize.colors.ui.successGreen,
						error: customize.colors.ui.errorRedLight,
					},
				},
				text: {
					primary: customize.colors.brand.primary.orange100,
					def: customize.colors.neutral.dark.dark100,
					alternate: customize.colors.neutral.beige.light,
					secondary: customize.colors.neutral.warm.warm,
					tertiary: customize.colors.neutral.warm.shade,
					archive: {
						supportive1: customize.colors.supportive.blue.blue100,
						supportive2: customize.colors.supportive.green.green100,
					},
					supportive: {
						blue: {
							light: customize.colors.supportive.blue.blue10,
							mid: customize.colors.supportive.blue.blue50,
							dark: customize.colors.supportive.blue.blue100,
						},
						green: {
							dark: customize.colors.supportive.green.green100,
							mid: customize.colors.supportive.green.green50,
							light: customize.colors.supportive.green.green10,
						},
						violet: {
							dark: customize.colors.supportive.violet.violet100,
							mid: customize.colors.supportive.violet.violet50,
							light: customize.colors.supportive.violet.violet10,
						},
						yellow: {
							dark: customize.colors.supportive.yellow.yellow100,
							mid: customize.colors.supportive.yellow.yellow50,
							light: customize.colors.supportive.yellow.yellow10,
						},
					},
					ui: {
						success: customize.colors.ui.successGreen,
						error: customize.colors.ui.errorRed,
					},
				},
			},
		},
	},
};
