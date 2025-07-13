import Chloe from '@/assets/img/about/workWith/Chloe.svg';
import Hanna from '@/assets/img/about/workWith/Hanna.svg';
import Json from '@/assets/img/about/workWith/Json.svg';
import Marias from '@/assets/img/about/workWith/Marias.svg';
import Tylor from '@/assets/img/about/workWith/Tylor.svg';

import Sharon from '@/assets/img/about/profile/sharon.svg';
import Hanyan from '@/assets/img/about/profile/hanyan.svg';
import HannaShin from '@/assets/img/about/profile/hanna.svg';
import {OUR_TEAM_INFO} from '@/assets/js/enum/about';

export const aboutWording = {
	landing: {
		headerTitle: 'About Us',
		description:
			'At Singing Cicadas, we believe in the power of storytelling to shape narratives and behavior. As a dedicated social impact agency, we partner with you to design and deliver transformative campaigns using our insight-driven storytelling approach.',
	},
	wordFadeAnimation: {
		title1: 'Another world is not only possible, she is on her way.',
		title2: 'On a quiet day, I can hear her breathing.<br>',
		naming: '- Arundhati Roy',
	},
	ourTeam: {
		title: 'Our Team',
		ourTeamList: [
			{
				id: OUR_TEAM_INFO.SHARON,
				img: Sharon,
				name: 'Sharon Yeung',
				description:
					'I’m a multimedia storyteller and community builder based in Hong Kong, who loves creating engaging narratives across diverse platforms. From films and web games to VR and interactive experiences, I’m passionate about inspiring and connecting communities. I’ve had the opportunity for training with organizations like Sundance, and Berlinale, which really honed my skills as a storyteller and producer. I’m committed to creating independent documentaries that explore complex subjects and diverse perspectives.',
			},
			{
				id: OUR_TEAM_INFO.HANYAN,
				img: Hanyan,
				name: 'Han Yan Yuen',
				description:
					'I am an impact strategist based in Taipei/ Hong Kong. I founded an NGO in Asia and was the Director of Communications at a global NGO. I’ve worked with complex audiences in Asia across a mosaic of cultures, languages and digital access levels. By tailoring strategies to each unique context, I deliver impactful campaigns to address a broad range of social issues. I was recognized by UN Women China as the Women of the Year in Media in 2011.',
			},
			{
				id: OUR_TEAM_INFO.HANNA,
				img: HannaShin,
				name: 'Hanna Shin',
				description:
					'I am an experienced campaign strategist with a strong background in corporate social responsibility and human rights in Korea. I specialize in strategic planning and stakeholder engagement, and have worked with international organizations including the British Council, Médecins Sans Frontières and Amnesty International.',
			},
		],
		sharon: {
			name: 'Sharon',
			content:
				'Hi, I’m Sharon Yeung. I am a multimedia storyteller and community builder! I‘ve produced campaigns with films, web games, VR, board games, and interactive workshops. I’ve trained as a storyteller and producer at Sundance, Berlinale, DocNYC and more for my independent documentaries.',
		},
		hanyan: {
			name: 'Hanyan',
			content:
				'Hi, I’m Han Yan Yuen.  I am an impact strategist. I headed a communications team at a global NGO in Asia, working with complex audience insights to produce impactful campaigns across Asia addressing issues such as freedom of expression and gender equality.',
		},
	},
	workWith: {
		title: 'The Creatives we work with',
		nameList: [
			{
				id: 1,
				name: 'Chloe Shih',
				city: 'Taipei',
				img: Chloe,
			},
			{
				id: 2,
				name: 'Hanna Shin',
				city: 'Seoul',
				img: Hanna,
			},
			{
				id: 3,
				name: 'Json Liu',
				city: 'Seoul',
				img: Json,
			},
			{
				id: 4,
				name: 'Marias Fang',
				city: 'Tokyo',
				img: Marias,
			},
			{
				id: 5,
				name: 'Tylor Meng',
				city: 'New York',
				img: Tylor,
			},
		],
	},
	issuesWeTackle: {
		title: 'Issues we tackle',
		issueList: [
			{
				id: 0,
				title: 'Climate Change',
				description: '',
			},
			{
				id: 1,
				title: 'Youth',
				description: '',
			},
			{
				id: 2,
				title: 'Heritage Preservation',
				description: '',
			},
			{
				id: 3,
				title: 'Migration & Refugees',
				description: '',
			},
			{
				id: 4,
				title: 'Gender based violence',
				description: '',
			},
		],
	},
};
