const navMenu = [
	{
		label: 'About',
		url: '/about',
	},
	{
		label: 'Campaigns',
		url: '/campaigns',
	},
	{
		label: 'Studio',
		url: '/studio',
	},
	{
		label: 'Workshops',
		url: '/workshops',
	},
];

const globalWording = {
	meta: {
		title: {
			main: 'Cicadas',
			about: 'About',
			campaigns: 'Campaigns',
			studio: 'Studio',
			workshops: 'Workshops',
			error: 'Error 404',
		},
	},
	footer: {
		heading: 'Curious?',
		description: "We'd love to chat about any potential project or collaboration, or<br/> even just a friendly hello",
		button: 'How Can We Help?',
		copyright: 'Singing Cicadas. All rights reserved.',
		domain: 'hello@singingcicadas.com',
	},
};

export {navMenu, globalWording};
