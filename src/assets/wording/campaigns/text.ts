import c1 from '@/assets/img/campaigns/campaign1.jpg';
import c2 from '@/assets/img/campaigns/campaign2.jpg';
import c3 from '@/assets/img/campaigns/campaign3.jpg';
import c4 from '@/assets/img/campaigns/campaign4.jpg';
import c5 from '@/assets/img/campaigns/campaign5.jpg';

import c1_1 from '@/assets/img/campaigns/detail/strengthProject/1.jpg';
import c1_2 from '@/assets/img/campaigns/detail/strengthProject/2.jpg';
import c1_swiper1 from '@/assets/img/campaigns/detail/strengthProject/swiper1.jpg';
import c1_swiper2 from '@/assets/img/campaigns/detail/strengthProject/swiper2.jpg';
import c1_swiper3 from '@/assets/img/campaigns/detail/strengthProject/swiper3.jpg';
import c1_swiper4 from '@/assets/img/campaigns/detail/strengthProject/swiper4.jpg';

import {MEDIA_DISPLAY_TYPE, MEDIA_TYPE} from '@assets/js/enum/media.ts';
import {TEXT_TYPE} from '@assets/js/enum/textType.ts';
import {CampaignWording} from '@/views/campaigns';

// detailSrc

export const campaignsWording: CampaignWording = {
	landing: {
		headerTitle: 'Campaigns',
		description:
			'We’re passionate about creating campaigns that make a real difference. Our journey typically begins with in-depth research and testing, allowing us to understand what works best and who we’re trying to reach. By clarifying goals and identifying the most effective target audience, we ensure every campaign has a powerful call to action. And it’s not just about the campaign itself; we aim to create an all round valuable learning experience for everyone involved. We have sustainability in mind, to not only drive impact today but also lay the groundwork for more effective campaigns in the future.',
	},
	campaigns: [
		{
			id: 1,
			isOngoing: true,
			title: `Strength Project`,
			img: c1,
			year: '2025',
			region: 'Hong Kong',
			issues: 'Youth',
			services:
				'Qualitative Research, Survey Build and Analysis, Social media data analysis, communication strategy development, creative design and production',
			details: {
				contentList: [
					{
						textType: TEXT_TYPE.PARAGRAPH,
						title: 'Objective',
						content:
							'To create a space for 18–24-year-olds to explore their unique character strengths, derive meaning from their lived experiences, and find their purposeful place within their community.',
						list: [],
					},
					{
						textType: TEXT_TYPE.PARAGRAPH,
						title: 'Audience',
						content:
							'Hong Kong youth aged 18–24 from diverse backgrounds, navigating the transition from secondary school to college or from college into society.',
						list: [],
					},
					{
						textType: TEXT_TYPE.PARAGRAPH,
						title: 'Strategy',
						content:
							'The campaign centers around a 30-minute hybrid participatory documentary, supported by an extensive, in-development distribution and impact campaign designed to reach Hong Kong youth and foster engagement.',
						list: [],
					},
				],
				media: [
					{
						mediaDisplayType: MEDIA_DISPLAY_TYPE.COL,
						mediaType: MEDIA_TYPE.IMAGE,
						mediaList: [
							{
								key: 'c1_1',
								src: c1_1,
							},
							{
								key: 'c1_2',
								src: c1_2,
							},
						],
						url: '', // for video
					},
					{
						mediaDisplayType: MEDIA_DISPLAY_TYPE.SWIPER,
						mediaType: MEDIA_TYPE.IMAGE,
						mediaList: [
							{
								key: 'c1_swiper1',
								src: c1_swiper1,
							},
							{
								key: 'c1_swiper2',
								src: c1_swiper2,
							},
							{
								key: 'c1_swiper3',
								src: c1_swiper3,
							},
							{
								key: 'c1_swiper4',
								src: c1_swiper4,
							},
						],
						url: '',
					},
				],
			},
		},
		{
			id: 2,
			isOngoing: false,
			title: `Creativity is`,
			img: c2,
			year: '2017-2020',
			region: 'Hong Kong',
			issues: 'Youth',
			services:
				'Qualitative Research, Social media data analysis, communication strategy development, creative design and production, strategic partnership engagement, creative facilitation, youth engagement',
		},
		{
			id: 3,
			isOngoing: false,
			title: `Resource Mobilisation for Women’s Funds`,
			img: c3,
			year: '2025',
			region: 'South Korea and Hong Kong',
			issues: 'Gender equality',
			services: 'Social media data analysis, Communication Strategy Development, Creative Design and Production',
		},
		{
			id: 4,
			isOngoing: false,
			title: `Knock. Stop Domestic Violence`,
			img: c4,
			year: '2013',
			region: 'China',
			issues: 'Domestic Violence',
			services: 'Strategy Development, Stakeholder and Partnership Engagement, Creative Design and Production, Media Distribution',
		},
		{
			id: 5,
			isOngoing: false,
			title: `MADE: meet me at the end of the assembly line`,
			img: c5,
			year: '2021',
			region: 'North America & Europe',
			issues: 'Living wage for factory workers',
			services: 'Strategy Development, Stakeholder and Partnership Engagement, Creative Design and Production, Media Distribution',
		},
	],
};
