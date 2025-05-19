import c1 from '@/assets/img/campaigns/campaign1.jpg';
import c2 from '@/assets/img/campaigns/campaign2.jpg';
import c3 from '@/assets/img/campaigns/campaign3.jpg';

export const campaignsWording = {
	landing: {
		headerTitle: 'Case Studies',
		description:
			'We’re passionate about creating campaigns that make a real difference. Our journey typically begins with in-depth research and testing, allowing us to understand what works best and who we’re trying to reach. By clarifying goals and identifying the most effective target audience, we ensure every campaign has a powerful call to action. And it’s not just about the campaign itself; we aim to create an all round valuable learning experience for everyone involved. We have sustainability in mind, to not only drive impact today but also lay the groundwork for more effective campaigns in the future.',
	},
	campaigns: [
		{
			id: 1,
			title: `Gaming for <br> Change`,
			year: '2013',
			issues: 'Domestic Violence',
			services: 'Strategy Development, Stakeholder and Partnership Engagement, Creative Design and Production, Media Distribution',
			region: 'China',
			img: c1,
		},
		{
			id: 2,
			title: `A Multi year<br> initiative for Hong<br> Kong Youth`,
			year: '2013',
			issues: 'Domestic Violence',
			services: 'Strategy Development, Stakeholder and Partnership Engagement, Creative Design and Production, Media Distribution',
			region: 'China',
			img: c2,
		},
		{
			id: 3,
			title: `A National<br> Domestic Violence<br> Campaign`,
			year: '2019-2021',
			issues: "Women's Rights, Fundraising",
			services: 'Social media data analysis, Communication Strategy Development, Creative Design and Production',
			region: 'Hong Kong',
			img: c3,
		},
	],
};
