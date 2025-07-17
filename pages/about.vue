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

		<div v-if="!isMobile" id="homePage__aboutUs">
			<OurStorySlide1 class="homePage__aboutUs__items homePage__aboutUs__item1" />
			<OurStorySlide2 class="homePage__aboutUs__items homePage__aboutUs__item2" />
			<OurStorySlide3 class="homePage__aboutUs__items homePage__aboutUs__item3" />
			<OurStorySlide4 class="homePage__aboutUs__items homePage__aboutUs__item4" />
			<OurStorySlide5 class="homePage__aboutUs__items homePage__aboutUs__item5" />
		</div>
		<div v-if="isMobile" class="w-full">
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
import {onMounted, onUnmounted, nextTick} from 'vue';
import LandingSection from '@/components/pages/about/LandingSection.vue';
import WordFadeInSection from '@/components/pages/about/WordFadeInSection.vue';
import OurTeam from '@/components/pages/about/OurTeam.vue';
import ServiceWeOfferSection from '@/components/pages/about/ServiceWeOfferSection.vue';
import OurStorySlide1 from '~/components/pages/about/horizonSlide/OurStorySlide1.vue';
import OurStorySlide2 from '~/components/pages/about/horizonSlide/OurStorySlide2.vue';
import OurStorySlide3 from '~/components/pages/about/horizonSlide/OurStorySlide3.vue';
import OurStoryMobile from '~/components/pages/about/horizonSlide/OurStoryMobile.vue';

import gsap from 'gsap';
import OurStorySlide4 from '~/components/pages/about/horizonSlide/OurStorySlide4.vue';
import OurStorySlide5 from '~/components/pages/about/horizonSlide/OurStorySlide5.vue';

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
import {seoWording} from 'assets/wording/seoWording';
import seoBanner from 'assets/img/seo/cicadas_banner.png';
const {isMobile} = useGetMediaQuery();

useSeoMeta({
	title: () => seoWording.about.title,
	description: () => seoWording.about.description,
	ogTitle: () => seoWording.about.metaTitle,
	ogDescription: () => seoWording.about.metaDescription,
	ogImage: () => seoBanner || '',
	ogUrl: () => seoWording.domain,
	ogType: 'website',
	ogSiteName: seoWording.siteName,
	twitterCard: 'summary_large_image',
	twitterTitle: () => seoWording.about.metaTitle,
	twitterDescription: () => seoWording.about.description,
	twitterImage: () => seoBanner || '',
});

let ctx: gsap.Context;

onMounted(async () => {
	await nextTick();
	initAnimation();
});

onUnmounted(() => {
	ctx && ctx.revert();
});

function getScrollAmount(headingDom: HTMLElement) {
	const headingWidth = headingDom.offsetWidth;
	const distance = 200;
	const amountToScroll = headingWidth - window.innerWidth + distance;
	return -amountToScroll;
}

function initAnimation() {
	// ❗只讓桌機版 (lg 以上) 執行動畫
	if (isMobile.value) return;

	ctx = gsap.context(() => {
		const items = gsap.utils.toArray<HTMLElement>('.homePage__aboutUs__items');
		const container = document.getElementById('homePage__aboutUs')!;
		const totalWidth = container.offsetWidth;

		gsap.to(items, {
			xPercent: -100 * (items.length - 1),
			ease: 'sine.out',
			scrollTrigger: {
				trigger: container,
				pin: true,
				scrub: 3,
				snap: 1 / (items.length - 1),
				end: `+=${totalWidth}`,
			},
		});
	});
}
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
