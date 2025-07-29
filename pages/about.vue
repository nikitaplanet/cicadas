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
import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';

import LandingSection from '@/components/pages/about/LandingSection.vue';
import WordFadeInSection from '@/components/pages/about/WordFadeInSection.vue';
import OurTeam from '@/components/pages/about/OurTeam.vue';
import ServiceWeOfferSection from '@/components/pages/about/ServiceWeOfferSection.vue';
import OurStoryMobile from '~/components/pages/about/horizonSlide/OurStoryMobile.vue';
import AboutHorizonScrollCard from '~/components/pages/about/horizonSlide/AboutHorizonScrollCard.vue';

const {isDesktop} = useGetMediaQuery();

definePageMeta({
	name: 'About',
});

import {seoWording} from '~/server/content/seoWording';
const seoData = seoWording.about;
useSeoMeta({
	title: () => seoData.title,
	description: () => seoData.description,
});

useServerSeoMeta({
	robots: 'index, follow',
	ogTitle: seoData.metaTitle,
	description: seoData.description,
	ogDescription: seoData.metaDescription,
	ogImage: 'https://singingcicadas.com/cicadas_banner.png',
	ogUrl: 'https://singingcicadas.com/about',
	ogSiteName: 'Cicadas',
	ogType: 'website',
	twitterCard: 'summary_large_image',
	twitterTitle: () => seoData.metaTitle,
	twitterDescription: () => seoData.metaDescription,
	twitterImage: () => 'https://singingcicadas.com/cicadas_banner.png',
});

// ✅ 補上 canonical
useHead({
	link: [
		{
			rel: 'canonical',
			href: 'https://singingcicadas.com/about',
		},
	],
});

defineOgImage({
	url: 'https://singingcicadas.com/cicadas_banner.png',
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
