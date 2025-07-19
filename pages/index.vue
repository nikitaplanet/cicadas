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

		<!--Horizon 2-->
		<div ref="headingWrapper" id="headingWrapper" class="heading-slide-wrapper overflow-x-hidden">
			<HeadingHomeMade ref="headingText">{{ contentText.sliderSection.header }}</HeadingHomeMade>
		</div>

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
import seoBanner from '@/assets/img/seo/cicadas_banner.png';
import HomeAboutHorizonScrollCard from '~/components/pages/home/horizonSlide/HomeAboutHorizonScrollCard.vue';

definePageMeta({
	name: ROUTER_NAME.HOME_PAGE,
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

import {ref, onMounted, onUnmounted, nextTick} from 'vue';
import LandingSection from '@/components/pages/home/LandingSection.vue';
import Section1 from '@/components/pages/home/Section1.vue';
import Section2 from '@/components/pages/home/Section2.vue';
import OurWorks from '@/components/pages/home/OurWorks.vue';

import {contentText} from '@/assets/wording/home/text';

import SliderSection from '@/components/pages/home/SliderSection.vue';
import ServiceFeatures from '@/components/pages/home/ServiceFeatures.vue';
import Questions from '@/components/pages/home/Questions.vue';

import gsap from 'gsap';
import HeadingHomeMade from '@/components/atoms/text/HeadingHomeMade.vue';
import AboutUsMobile from '@/components/pages/home/horizonSlide/AboutUsMobile.vue';
import {seoWording} from 'assets/wording/seoWording';

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
const {isDesktop} = useGetMediaQuery();

let ctx: gsap.Context;
let ctxHeading: gsap.Context;

const headingWrapper = ref<HTMLElement>();
const headingText = ref<HTMLElement>();

onMounted(async () => {
	await nextTick();
	initAnimation();
});

onUnmounted(() => {
	ctx && ctx.revert();
	ctxHeading && ctxHeading.revert();
});

function getScrollAmount(headingDom: HTMLElement) {
	const headingWidth = headingDom.offsetWidth;
	const distance = 200;
	const amountToScroll = headingWidth - window.innerWidth + distance;
	return -amountToScroll;
}

function initAnimation() {
	ctxHeading = gsap.context(() => {
		// Heading
		setTimeout(() => {
			const headingWrapperDom = document.getElementById('headingWrapper')!;
			const headingDom = headingWrapper.value?.querySelector('.heading-home-made-text') as HTMLElement;

			if (!headingDom) return;

			gsap.to(headingDom, {
				x: getScrollAmount(headingDom),
				ease: 'power2.out',
				scrollTrigger: {
					trigger: headingWrapperDom,
					start: 'top 20%',
					end: () => `+=${getScrollAmount(headingDom) * -1 + 200}`,
					scrub: 3,
					invalidateOnRefresh: true,
					pin: true,
					pinSpacing: true,
				},
			});
		}, 200); // 延遲一點，確保文字 render 完成
	});
}
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
