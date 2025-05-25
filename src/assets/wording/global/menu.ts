import {MenuItem} from '@components/organisms/navbar';
import {ROUTER_NAME} from '@assets/js/enum/routerEnum.ts';

const navMenu: MenuItem[] = [
	{
		label: 'About',
		url: '/about',
		name: ROUTER_NAME.ABOUT_PAGE,
	},
	{
		label: 'Campaigns',
		url: '/campaigns',
		name: ROUTER_NAME.CAMPAIGNS_PAGE,
	},
	{
		label: 'Studio',
		url: '/studio',
		name: ROUTER_NAME.STUDIO_PAGE,
	},
	{
		label: 'Workshops',
		url: '/workshops',
		name: ROUTER_NAME.WORKSHOPS_PAGE,
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
		description:
			'We’d love to talk about your vision, explore potential collaboration, or<br> even just hear a friendly hello. Reach out—we’re excited to connect.',
		button: 'How Can We Help?',
		copyright: 'Singing Cicadas. All rights reserved.',
		domain: 'hello@singingcicadas.com',
	},
};

export {navMenu, globalWording};
