import {TEXT_TYPE} from '@/assets/js/enum/textType.ts';

export const commonWording = {
	headerTitle: 'Commons',
	details: {
		title: `We provide pro bono support to a select number of non-profits, charities, and media organizations in Asia. Our goal is to empower organizations that work in some of the most underserved regions or under challenging circumstances.<br><br>Are you eligible?`,
		contents: [
			{
				type: TEXT_TYPE.TEXT,
				content: [`You may qualify if your organization meets one of the following criteria:`],
			},
			{
				type: TEXT_TYPE.TEXT_LIST,
				content: [
					'Based in an OECD-designated “least developed country.”',
					'Operates in a region ranked 100 or lower on the World Press Freedom Index.',
				],
			},
			{
				type: TEXT_TYPE.SPACE,
				content: [],
			},
			{
				type: TEXT_TYPE.TEXT,
				content: [
					'If this sounds like you, we’d love to hear your story. Start by filling out this form, and we’ll be in touch to explore how we can support your mission. ',
				],
			},
		],
	},
};
