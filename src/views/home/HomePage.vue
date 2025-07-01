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

		<!--Horizon Slide--->
		<!--About Us-->
		<div v-if="!isMobile" id="homePage__aboutUs">
			<AboutUsSlide1 class="homePage__aboutUs__items homePage__aboutUs__item1" />
			<AboutUsSlide2 class="homePage__aboutUs__items homePage__aboutUs__item2" />
			<AboutUsSlide3 class="homePage__aboutUs__items homePage__aboutUs__item3" />
		</div>
		<div v-if="isMobile" class="flex flex-col">
			<AboutUsSlide1 />
			<AboutUsSlide2 />
			<AboutUsSlide3 />
		</div>

		<!--BG 過場-->
		<div class="section-gradient5"></div>

		<!--Horizon 2-->
		<div ref="headingWrapper" id="headingWrapper" class="heading-slide-wrapper">
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
import {computed, ref, onMounted, onUnmounted, nextTick} from 'vue';
import LandingSection from '@/views/home/components/LandingSection.vue';
import Section1 from '@/views/home/components/Section1.vue';
import Section2 from '@/views/home/components/Section2.vue';
import OurWorks from '@/views/home/components/OurWorks.vue';

import AboutUsSlide1 from '@/views/home/components/horizonSlide/AboutUsSlide1.vue';
import AboutUsSlide2 from '@/views/home/components/horizonSlide/AboutUsSlide2.vue';
import AboutUsSlide3 from '@/views/home/components/horizonSlide/AboutUsSlide3.vue';

import {contentText} from '@/assets/wording/home/text.ts';

import SliderSection from '@/views/home/components/SliderSection.vue';
import ServiceFeatures from '@/views/home/components/ServiceFeatures.vue';
import Questions from '@/views/home/components/Questions.vue';

import gsap from 'gsap';
import HeadingHomeMade from '@components/atoms/text/HeadingHomeMade.vue';
let ctx: gsap.Context;

const headingWrapper = ref<HTMLElement>();
const headingText = ref<HTMLElement>();
const isMobile = computed(() => window.innerWidth < 768);

onMounted(async () => {
	await nextTick();

	// ❗只讓桌機版 (lg 以上) 執行動畫
	if (window.innerWidth < 1024) return;

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
		}, 50); // 延遲一點，確保文字 render 完成
	});
});

function getScrollAmount(headingDom: HTMLElement) {
	const headingWidth = headingDom.offsetWidth;
	const amountToScroll = headingWidth - window.innerWidth + 200;
	return -amountToScroll;
}

onUnmounted(() => {
	ctx && ctx.revert();
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
