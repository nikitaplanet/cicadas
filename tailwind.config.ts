import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

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
		superhighlightSuper: ['180px', {lineHeight: '1.25', letterSpacing: '-0.02em'}],
		superhighlightXL: ['140px', {lineHeight: '1.25', letterSpacing: '-0.02em'}],
		superhighlight: ['120px', {lineHeight: '1.25', letterSpacing: '-0.02em'}],
		h1: ['80px', {lineHeight: '1', letterSpacing: '-0.02em'}],
		h2: ['60px', {lineHeight: '1.2'}],
		h3: ['38px', {lineHeight: '1.2'}],
		h4: ['24px', {lineHeight: '1.2'}],
		h5: ['18px', {lineHeight: '1.2'}],
		body: ['16px', {lineHeight: '1.2'}],
		body18: ['18px', {lineHeight: '1.2'}],
		labelLg: ['18px', {lineHeight: '1.2', letterSpacing: '0'}],
		labelMd: ['14px', {lineHeight: '1', letterSpacing: '0'}],
		labelSm: ['12px', {lineHeight: '1', letterSpacing: '0'}],
		scale3XL: ['80px', {lineHeight: '1.25', letterSpacing: '-1.6'}],
		scale2XL: ['48px', {lineHeight: '1'}],
		scale1XL: ['38px', {lineHeight: '1.2'}],
		scaleXL: ['32px', {lineHeight: '1.2'}],
		scaleLG: ['24px', {lineHeight: '1.2'}],
		scaleMD: ['20px', {lineHeight: '1.2'}],
		scaleDef: ['18px', {lineHeight: '1.2'}],
		scaleSM: ['14px', {lineHeight: '1.2'}],
		scaleXS: ['12px', {lineHeight: '1.2'}],
		scale2XS: ['10px', {lineHeight: '1.2'}],
		scale3XS: ['9.175px', {lineHeight: '1'}],
	},
};

const config: Config = {
	content: [
		'./app.vue',
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.{vue,js,ts}',
		'./pages/**/*.{vue,js,ts}',
		'./composables/**/*.{js,ts}',
		'./plugins/**/*.{js,ts}',
	],
	safelist: ['overflow-hidden'],
	theme: {
		screens: {
			...defaultTheme.screens,
			lg: {min: '1025px'},
			xs: {max: '380px'},
			s_lg: {min: '500px'},
		},
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
						blue: customize.colors.supportive.blue,
						green: customize.colors.supportive.green,
						violet: customize.colors.supportive.violet,
						yellow: customize.colors.supportive.yellow,
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
						blue: customize.colors.supportive.blue,
						green: customize.colors.supportive.green,
						violet: customize.colors.supportive.violet,
						yellow: customize.colors.supportive.yellow,
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
						blue: customize.colors.supportive.blue,
						green: customize.colors.supportive.green,
						violet: customize.colors.supportive.violet,
						yellow: customize.colors.supportive.yellow,
					},
					ui: {
						success: customize.colors.ui.successGreen,
						error: customize.colors.ui.errorRed,
					},
				},
			},
		},
	},
	plugins: [plugin()],
};

export default config;

// RWD https://v3.tailwindcss.com/docs/responsive-design
