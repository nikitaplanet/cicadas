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
		<div id="homePage__aboutUs">
			<AboutUsSlide1 class="homePage__aboutUs__items homePage__aboutUs__item1" />
			<AboutUsSlide2 class="homePage__aboutUs__items homePage__aboutUs__item2" />
			<AboutUsSlide3 class="homePage__aboutUs__items homePage__aboutUs__item3" />
		</div>
		<!--BG 過場-->
		<div class="section-gradient5"></div>

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
import {onMounted, onUnmounted, nextTick} from 'vue';
import LandingSection from '@/views/home/components/LandingSection.vue';
import Section1 from '@/views/home/components/Section1.vue';
import Section2 from '@/views/home/components/Section2.vue';
import OurWorks from '@/views/home/components/OurWorks.vue';

import AboutUsSlide1 from '@/views/home/components/horizonSlide/AboutUsSlide1.vue';
import AboutUsSlide2 from '@/views/home/components/horizonSlide/AboutUsSlide2.vue';
import AboutUsSlide3 from '@/views/home/components/horizonSlide/AboutUsSlide3.vue';

import SliderSection from '@/views/home/components/SliderSection.vue';
import ServiceFeatures from '@/views/home/components/ServiceFeatures.vue';
import Questions from '@/views/home/components/Questions.vue';

import gsap from 'gsap';
let ctx: gsap.Context;

onMounted(async () => {
	await nextTick();

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
});

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
</style>
