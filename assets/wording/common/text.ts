import {TEXT_TYPE} from '@/assets/js/enum/textType.ts';

export const commonWording = {
	headerTitle: 'Commons',
	details: {
		title: `We provide pro bono support to a select number of non-profits, charities and media organizations in Asia. Our goal is to empower organizations that work in some of the most underserved regions or under challenging circumstances.<br><br>Are you eligible?`,
		contents: [
			{
				type: TEXT_TYPE.TEXT,
				content: [`You may qualify if your organization meets one of the following criteria:`],
			},
			{
				type: TEXT_TYPE.TEXT_LIST,
				content: [
					'Based in an <a target="_blank" class="underline" href="https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/oda-eligibility-and-conditions/DAC-List-of-ODA-Recipients-for-reporting-2024-25-flows.pdf">OECD</a>-designated “least developed country.”',
					'Operates in a region ranked 100 or lower on the <a target="_blank" class="underline" href="https://rsf.org/en/index">World Press Freedom Index</a>.',
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
