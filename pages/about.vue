<template>
	<div class="w-full min-h-screen bg-surface-def">
		<!--Landing-->
		<LandingSection />

		<!--WordFade-->
		<WordFadeInSection />

		<!--OurTeam-->
		<OurTeam />

		<!--BG 過場-->
		<div class="section-gradient1"></div>

		<AboutHorizonScrollCard v-if="isDesktop" />

		<div v-if="!isDesktop" class="w-full">
			<OurStoryMobile />
		</div>

		<!--BG 過場-->
		<div class="section-gradient2"></div>

		<!--Service we offer-->
		<ServiceWeOfferSection />

		<!--BG 過場-->
		<div class="section-gradient3"></div>

		<div class="section-gradient4"></div>
	</div>
</template>

<script lang="ts" setup>
import LandingSection from '@/components/pages/about/LandingSection.vue';
import WordFadeInSection from '@/components/pages/about/WordFadeInSection.vue';
import OurTeam from '@/components/pages/about/OurTeam.vue';
import ServiceWeOfferSection from '@/components/pages/about/ServiceWeOfferSection.vue';
import OurStoryMobile from '~/components/pages/about/horizonSlide/OurStoryMobile.vue';

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
import {seoWording} from '~/server/content/seoWording';
import seoBanner from 'assets/img/seo/cicadas_banner.png';
import AboutHorizonScrollCard from '~/components/pages/about/horizonSlide/AboutHorizonScrollCard.vue';
const {isDesktop} = useGetMediaQuery();

definePageMeta({
	name: 'About',
});

const title = seoWording.about.title;
const description = seoWording.about.description;

const metaTitle = seoWording.about.metaTitle;
const metaDescription = seoWording.about.metaDescription;

const siteUrl = `${seoWording.domain}/about`;
const siteName = seoWording.siteName;

// useSeoMeta({
// 	title: () => title,
// 	description: () => description,
// 	ogTitle: () => metaTitle,
// 	ogDescription: () => metaDescription,
// 	ogImage: () => seoBanner || '',
// 	ogUrl: () => siteUrl,
// 	ogType: 'website',
// 	ogSiteName: siteName,
// 	twitterCard: 'summary_large_image',
// 	twitterTitle: () => metaTitle,
// 	twitterDescription: () => metaDescription,
// 	twitterImage: () => seoBanner || '',
// });

useHead({
	title: 'About | Cicadas',
	meta: [
		{
			name: 'description',
			content:
				'At Singing Cicadas, we believe in the power of storytelling to shape narratives and behavior. As a dedicated social impact agency, we partner with you to design and deliver transformative campaigns using our insight-driven storytelling approach.',
		},
		{property: 'og:title', content: 'About Singing Cicadas | Asia’s Storytelling Experts for Change'},
		{
			property: 'og:description',
			content:
				'We empower NGOs, ESG-driven businesses, and SDG-aligned initiatives  to fight climate change, gender equality, LGBTQ rights and other human rights issues through data-driven storytelling rooted in Asia and trusted globally.',
		},
		{property: 'og:image', content: seoBanner || ''},
		{property: 'og:url', content: 'https://singingcicadas.com/about'},
		{property: 'og:type', content: 'website'},
		{property: 'og:site_name', content: 'Cicadas'},

		{name: 'twitter:card', content: 'summary_large_image'},
		{name: 'twitter:title', content: 'About Singing Cicadas | Asia’s Storytelling Experts for Change'},
		{
			name: 'twitter:description',
			content:
				'We empower NGOs, ESG-driven businesses, and SDG-aligned initiatives  to fight climate change, gender equality, LGBTQ rights and other human rights issues through data-driven storytelling rooted in Asia and trusted globally.',
		},
		{name: 'twitter:image', content: seoBanner || ''},
	],
	link: [{rel: 'canonical', href: 'https://singingcicadas.com/about'}],
});
</script>

<style lang="scss" scoped>
.about-bg {
	background: linear-gradient(
		180deg,
		var(--Surface-supportive-violet-dark, #d6b9e0) 0%,
		var(--Surface-supportive-violet-mid, #e9c9f4) 50.33%,
		var(--Surface-def, #fceee9) 100%
	);
}

.section {
	&-gradient1,
	&-gradient2,
	&-gradient3,
	&-gradient4 {
		width: 100%;
		height: 120px;
	}

	&-gradient1 {
		background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient2 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-supportive-violet-mid, #e9c9f4) 100%);
	}

	&-gradient3 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-mid, #e9c9f4) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient4 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-def, #fceee9) 100%);
	}
}

#homePage__aboutUs {
	width: 100vw;
	display: flex;
	flex-direction: row;
}

.homePage__aboutUs__items {
	width: 100vw;
	height: 100vh;
	flex-shrink: 0;
}

.heading-slide-wrapper {
	display: flex;
	align-items: flex-end;
	padding: 100px 0 100px 50px;
}
</style>
