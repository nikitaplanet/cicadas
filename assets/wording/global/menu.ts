import type {MenuItem} from '@/components/organisms/navbar';
import {ROUTER_NAME} from '@/assets/js/enum/routerEnum';
import Navbg0 from '@/assets/img/components/nav/menu0.svg';
import Navbg1 from '@/assets/img/components/nav/menu1.svg';
import Navbg2 from '@/assets/img/components/nav/menu2.svg';
import Navbg3 from '@/assets/img/components/nav/menu3.svg';

const navMenu: MenuItem[] = [
	{
		label: 'About',
		url: '/about',
		name: ROUTER_NAME.ABOUT_PAGE,
		bgImage: Navbg0
	},
	{
		label: 'Campaigns',
		url: '/campaigns',
		name: ROUTER_NAME.CAMPAIGNS_PAGE,
		bgImage: Navbg1
	},
	{
		label: 'Studio',
		url: '/studio',
		name: ROUTER_NAME.STUDIO_PAGE,
		bgImage: Navbg2
	},
	{
		label: 'Workshops',
		url: '/workshops',
		name: ROUTER_NAME.WORKSHOPS_PAGE,
		bgImage: Navbg3
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
	nav: {
		button: {
			common: 'Common',
		},
	},
	footer: {
		heading: `Curious?`,
		heading2: 'Interested?',
		description:
			'We’d love to talk about your vision, explore potential collaboration, or<br> even just hear a friendly hello. Reach out—we’re excited to connect.',
		description2: 'Reach out to learn more or customize a workshop for your team.',
		button: 'How Can We Help?',
		copyright: 'Singing Cicadas. All rights reserved.',
		domain: 'hello@singingcicadas.com',
	},
};

export {navMenu, globalWording};
