import swiper1_1 from '@/assets/img/studio/swiper1/1.jpg';
import swiper2_1 from '@/assets/img/studio/swiper2/1.jpg';
import swiper3_1 from '@/assets/img/studio/swiper3/1.jpg';
import swiper4_1 from '@/assets/img/studio/swiper4/1.jpg';

export const studioWording = {
	landing: {
		headerTitle: 'Studio',
		description:
			'We began our own journey as filmmakers and multi-media storytellers. We have a rich history of making award-winning films, games and immersive experiences independently as well by commission with various arts and cultural institutions. Our deep experience and extensive network empower us to create high-quality, emotionally resonant works where we dream big while staying connected to the personal stories that matter.',
	},
	studioInfo: [
		{
			id: 1,
			title: 'Documentary',
			description: `A short documentary about xxxxx<br>as part of this campaign targeting xxxx`,
			img: [
				{
					key: '1-1',
					src: swiper1_1,
				},
				{
					key: '1-2',
					src: swiper2_1,
				},
				{
					key: '1-3',
					src: swiper3_1,
				},
			],
			align: 'left',
			swiperClass: 'aspect-[4/3]',
		},
		{
			id: 2,
			title: 'Web Game',
			description: `A web game about xxxxx<br>as part of this campaign targeting xxxx`,
			img: [
				{
					key: '2-1',
					src: swiper2_1,
				},
			],
			align: 'right',
			swiperClass: 'aspect-[1/1.3]',
		},
		{
			id: 3,
			title: 'Event',
			description: `An event about xxxxx<br>as part of this campaign targeting xxxx`,
			img: [
				{
					key: '3-1',
					src: swiper3_1,
				},
			],
			align: 'left',
			swiperClass: 'aspect-[1/1]',
		},
		{
			id: 4,
			title: `Experiential<br>Product`,
			description: `An experiential product about xxxxx<br>as part of this campaign targeting xxxx`,
			img: [
				{
					key: '4-1',
					src: swiper4_1,
				},
			],
			align: 'right',
			swiperClass: 'aspect-[4/3]',
		},
	],
};
