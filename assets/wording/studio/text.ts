import swiper1_1 from '@/assets/img/studio/swiper1/1.jpg';
import swiper2_1 from '@/assets/img/studio/swiper2/1.jpg';
import swiper3_1 from '@/assets/img/studio/swiper3/1.jpg';
import swiper4_1 from '@/assets/img/studio/swiper4/1.jpg';
import {MEDIA_TYPE} from '@/assets/js/enum/media';

import detail2_1_image from '@/assets/img/studio/detail/id2/image_2_1.jpg';
import detail3_1_image from '@/assets/img/studio/detail/id3/image_3_1.jpg';
import detail3_2_image from '@/assets/img/studio/detail/id3/image_3_2.jpg';
import detail3_3_image from '@/assets/img/studio/detail/id3/image_3_3.jpg';

import detail4_1_image from '@/assets/img/studio/detail/id4/image_4_1.jpg';

export const studioWording = {
	landing: {
		headerTitle: 'Studio',
		description:
			'We started our journey as filmmakers and multimedia storytellers, crafting award-winning films, games and immersive experiences that inspire and connect. Whether independently or in collaboration with arts and cultural institutions, our work has always been driven by a passion for creativity and meaningful narratives.',
	},
	studioInfo: [
		{
			id: '1',
			title: 'Film',
			listTitle: 'Film',
			img: swiper1_1,
			align: 'left',
			swiperClass: 'aspect-[4/3]',
			detail: {
				description:
					"Our films capture the heart of human experiences, spotlighting powerful narratives that foster connection. We specialize in telling stories that bridge industries, cultures and communities, showcasing resilience, innovation and the pursuit of purpose. Whether it's amplifying grassroots initiatives or celebrating groundbreaking achievements, our work strives to inspire meaningful dialogue. ",
				list: [
					{
						id: 'herfund',
						title: 'HER Fund',
						listTitle: 'HER Fund',
						content:
							'HER Fund is a women`s fund based in Hong Kong. They engaged us to create two videos to introduce their Transformative Feminist Leadership program and their HER Hub program.',
						media: {
							type: MEDIA_TYPE.VIMEO,
							src: 'https://player.vimeo.com/video/1090045308',
						},
						isOnGoing: false,
					},
					{
						id: 'rsgroup',
						title: 'RS Group',
						listTitle: 'RS Group',
						content:
							'RS Group is a family office with a mission to help people invest in a way that contributes to the well-being of society and the planet, while generating a financial return. They commissioned a video to introduce their work and the importance of impact investing for a sustainable world.',
						media: {
							type: MEDIA_TYPE.VIMEO,
							src: 'https://player.vimeo.com/video/1090061807',
						},
						isOnGoing: false,
					},
					{
						id: 'bolded',
						title: 'BOLD-ED',
						listTitle: 'BOLD-ED',
						content:
							'BOLD-ED empowers students to transform their futures by connecting ambitious night school students with inspiring mentors from Silicon Valley, creating a pathway to meaningful internships at tech companies in Manila. This short portrait highlights the incredible journey of one student whose determination and resilience shine through.',
						media: {
							type: MEDIA_TYPE.VIMEO,
							src: 'https://player.vimeo.com/video/1090058413',
						},
						isOnGoing: false,
					},
					{
						id: 'kootyin',
						title: 'Kootyin',
						listTitle: 'Kootyin',
						content:
							'Lyfta is a Finnish education platform that introduce diverse cultures and perspectives to the classroom through 360° spaces and inspiring short films. They engaged us to tell a story about Kootyin, a land rights protector turned oral history collector in Hong Kong.',
						media: {
							type: MEDIA_TYPE.VIMEO,
							src: 'https://player.vimeo.com/video/1090046874',
						},
						isOnGoing: false,
					},
				],
			},
		},
		{
			id: '2',
			title: 'Independent<br/>Documentaries',
			listTitle: 'Independent Documentaries',
			img: swiper2_1,
			align: 'right',
			swiperClass: 'aspect-[1/1.6]',
			detail: {
				description:
					'Our Independent Documentaries are driven by our filmmakers’ passion for storytelling. These films aren’t just projects—they’re journeys that can take years to complete, as our creators dedicate themselves to capturing the depth and complexity of the lives and stories they document.',
				list: [
					{
						id: 'whenapoetgoestowar',
						title: 'When a Poet Goes to War',
						listTitle: 'When a Poet Goes to War',
						content:
							'"When peaceful protests fail to sway the country’s dictator, a Burmese poet and his fellow artists pick up arms to fight the well-resourced military junta. Deep in the jungles they are gaining ground, but the former pacifists struggle with the mental and physical realities of a brutal war."<br/><br/>This feature-length documentary follows the journey of Saungkha, a renowned poet-turned-opposition army general as Myanmar descends into a brutal civil war. The project has received support from IDFA Bertha Fund, Purin Foundation and has received the Docs by the Sea Award at TCCF (Taiwan).',
						// media: {
						// 	type: MEDIA_TYPE.VIMEO,
						// 	src: 'https://player.vimeo.com/video/1090011632',
						// },
						media: {
							type: MEDIA_TYPE.IMAGE,
							src: detail2_1_image,
						},
						isOnGoing: true,
					},
					{
						id: 'creativityis',
						title: 'Creativity is <span style="font-style: normal;">原來我</span>',
						listTitle: 'Creativity is',
						content:
							'Are you creative? This is the question that kickstarts this short documentary. Through a group of students and six individuals – an inventor, a psychologist, an activist, a startup entrepreneur, a yoga teacher, and a spatial designer - "Creativity is" explores the possibilities and definitions of creativity beyond the conventional understanding - the search and expansion of ourselves is what we all ultimately create.',
						media: {
							type: MEDIA_TYPE.VIMEO,
							src: 'https://player.vimeo.com/video/1089955625',
						},
						isOnGoing: false,
					},
				],
			},
		},
		{
			id: '3',
			title: 'Interactive',
			listTitle: 'Interactive',
			img: swiper3_1,
			align: 'left',
			swiperClass: 'aspect-[1/1]',
			detail: {
				description:
					'Step into immersive worlds that put you at the center of the story. We create digital experiences that merge technology and storytelling in groundbreaking ways. From virtual reality adventures to interactive web narratives, we invite you to engage, explore and be part of the creative process.',
				list: [
					{
						id: 'createyourown',
						title: 'Create Your Own <span style="font-style: normal;">原來我：未定型</span>',
						listTitle: 'Create Your Own',
						content:
							'The journey of “creating-your-own-documentary” delves into the essence of creativity, exploring what defines it, why we might feel constrained and how we can reignite that spark within ourselves. Users craft a unique planet based on their choices and the final base is sent to their email as a powerful reminder that they are shaped by their decisions. Together, with others on this shared path, it’s both possible and extraordinary to make bolder, more inspired choices in shaping their identities.',
						media: {
							type: MEDIA_TYPE.IMAGE,
							src: detail3_1_image,
						},
						isOnGoing: false,
					},
					{
						id: 'madevr',
						title: 'MADE VR',
						listTitle: 'MADE VR',
						content:
							'"MADE: Meet me at the end of the assembly line" is a choose-your-own-adventure experience, viewers form a personal connection with an Apple factory worker, Xiaowu, gaining insight into her daily life, family and inner thoughts.<br/><br/>At the end of the journey, viewers are invited to take action by sending a letter to tech companies with factories in China, advocating for a living wage for workers.<br><br><a target="_blank" class="text-labelMd font-label font-semibold italic underline" href="https://madevr.com/">Experience Made VR</a>',
						media: {
							type: MEDIA_TYPE.IMAGE,
							src: detail3_2_image,
						},
						isOnGoing: false,
					},
					{
						id: 'journeyin',
						title: 'Journey In',
						listTitle: 'Journey In',
						content:
							'"Journey In" is a storytelling board game that connects strangers through meaningful conversations and self-discovery. Players embark on a shared journey, opening up their worlds to one another while uncovering their own stories along the way. The game includes narrator scripts, conversation cards and a step-by-step guide to create a personalized map of each player’s unique exploration.',
						media: {
							type: MEDIA_TYPE.VIMEO,
							src: 'https://player.vimeo.com/video/1090060829',
						},
						isOnGoing: false,
					},
					{
						id: 'bettermebetterwe',
						title: 'Better Me Better We',
						listTitle: 'Better Me Better We',
						content:
							'In response to the profound impact of COVID-19 on students, parents, and teachers, Ednovators engaged us to develop a mental wellness toolkit for their Better Me Better We platform. We distributed 500 curated boxes filled with a comprehensive guide, 30 daily exercises and soothing audio meditations, providing hope, resilience and tools to thrive amid adversity. ',
						media: {
							type: MEDIA_TYPE.IMAGE,
							src: detail3_3_image,
						},
						isOnGoing: false,
					},
				],
			},
		},
		{
			id: '4',
			title: `Events`,
			listTitle: 'Events',
			img: swiper4_1,
			align: 'right',
			swiperClass: 'aspect-[4/3]',
			detail: {
				description:
					'Our events are more than just gatherings—they are vibrant celebrations of creativity, innovation and connection. Whether it’s through personalized exhibitions, thought-provoking discussions, or hands-on activities, our mission is to create spaces where imagination thrives and communities grow stronger. ',
				list: [
					{
						id: 'gamingforchange',
						title: 'Gaming for Change',
						listTitle: 'Gaming for Change',
						content:
							'In collaboration with Press Start Academy and Eaton Hotel, we hosted Hong Kong’s first-ever event exploring gaming as an innovative medium for advocacy-driven storytelling —creating new opportunities to integrate games into social impact initiatives.<br/><br/>The landmark event combines panel discussions, hands-on workshops and a game exhibition, to showcase the potential of gaming in advocacy.<br/><br/>Around 70 industry professionals and change-makers attended the event, sparking conversations to incorporate games into social impact initiatives.',
						media: {
							type: MEDIA_TYPE.IMAGE,
							src: detail4_1_image,
						},
						isOnGoing: false,
					},
					{
						id: 'creativityisanniversary',
						title: 'Creativity is Anniversary',
						listTitle: 'Creativity is Anniversary',
						content:
							'We organized two celebratory large scale events for "Creativity is". The Film Premiere had over 280 people in attendance and the interactive web game launch with over 120 people in attendance. Both events included exhibitions, talks with speakers and activities designed bespokely for the attendees. ',
						media: {
							type: MEDIA_TYPE.VIMEO,
							src: 'https://player.vimeo.com/video/1089965527',
						},
						isOnGoing: false,
					},
				],
			},
		},
	],
};
