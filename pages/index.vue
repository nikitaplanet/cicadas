<template>
	<div class="homePage w-full min-h-screen bg-surface-def">
		<LandingSection ref="landing" />

		<!--Intro-->
		<Section1 />

		<!--Wording-->
		<Section2 />

		<!--BG 過場-->
		<div class="section-gradient3"></div>

		<!--Our Works-->
		<OurWorks />

		<!--BG 過場-->
		<div class="section-gradient4"></div>

		<HomeAboutHorizonScrollCard v-if="isDesktop" />

		<!--Horizon Slide--->
		<div v-if="!isDesktop" class="w-full">
			<AboutUsMobile />
		</div>

		<!--BG 過場-->
		<div class="section-gradient5"></div>

		<TextSlide />

		<!--Hear from our partners-->
		<SliderSection />

		<!--BG 過場-->
		<div class="section-gradient6"></div>

		<!--Issue we tackle-->
		<ServiceFeatures />

		<!--BG 過場-->
		<div class="section-gradient7"></div>

		<!--QA-->
		<Questions />
	</div>
</template>
<script lang="ts" setup>
import {ROUTER_NAME} from '@/assets/js/enum/routerEnum';
import seoBanner from '@/public/cicadas_banner.png';
import HomeAboutHorizonScrollCard from '~/components/pages/home/horizonSlide/HomeAboutHorizonScrollCard.vue';

definePageMeta({
	name: ROUTER_NAME.HOME_PAGE,
});

import LandingSection from '@/components/pages/home/LandingSection.vue';
import Section1 from '@/components/pages/home/Section1.vue';
import Section2 from '@/components/pages/home/Section2.vue';
import OurWorks from '@/components/pages/home/OurWorks.vue';

import SliderSection from '@/components/pages/home/SliderSection.vue';
import ServiceFeatures from '@/components/pages/home/ServiceFeatures.vue';
import Questions from '@/components/pages/home/Questions.vue';

import AboutUsMobile from '@/components/pages/home/horizonSlide/AboutUsMobile.vue';
import {seoWording} from '~/server/content/seoWording';

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
import TextSlide from '~/components/pages/home/horizonSlide/TextSlide.vue';
const {isDesktop} = useGetMediaQuery();

useHead({
	link: [{rel: 'canonical', href: `${seoWording.domain}`}],
});

useSeoMeta({
	title: () => seoWording.home.title,
	description: () => seoWording.home.description,
	ogTitle: () => seoWording.home.metaTitle,
	ogDescription: () => seoWording.home.metaDescription,
	ogImage: () => seoBanner || '',
	ogUrl: () => seoWording.domain,
	ogType: 'website',
	ogSiteName: seoWording.siteName,
	twitterCard: 'summary_large_image',
	twitterTitle: () => seoWording.home.metaTitle,
	twitterDescription: () => seoWording.home.description,
	twitterImage: () => seoBanner || '',
});
</script>

<style lang="scss" scoped>
.section {
	&-gradient3,
	&-gradient4,
	&-gradient5,
	&-gradient6,
	&-gradient7 {
		width: 100%;
		height: 120px;
	}

	&-gradient3 {
		background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-green-light, #ddf0db) 100%);
	}

	&-gradient4 {
		background: linear-gradient(180deg, var(--Surface-supportive-green-light, #ddf0db) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient5 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-def, #fceee9) 100%);
	}

	&-gradient6 {
		background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-blue-light, #cce2f7) 100%);
	}

	&-gradient7 {
		background: linear-gradient(180deg, var(--Surface-supportive-blue-light, #cce2f7) 0%, var(--Surface-def, #fceee9) 100%);
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
