<template>
	<SectionContainer
		ref="sectionRef"
		:hasMinHeight="false"
		class="max-w-[900px] 2xl:max-w-[1200px] h-screen text-scaleXL md:text-scale1XL 2xl:text-h2 italic font-semibold font-h2 flex items-center justify-center overflow-hidden">
		<div ref="textBlockRef">
			<span v-html="aboutWording.wordFadeAnimation.title1" class="line"></span>
			<span class="line">
				<span v-html="aboutWording.wordFadeAnimation.title2"></span>
				<span v-html="aboutWording.wordFadeAnimation.naming" class="inline-block text-scaleLG mt-10 2xl:text-scale1XL"></span>
			</span>
		</div>
	</SectionContainer>
</template>

<script lang="ts" setup>
import {onMounted, ref, nextTick} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {aboutWording} from '@/assets/wording/about/text';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref();
const textBlockRef = ref();

onMounted(async () => {
	await nextTick();

	const lines = textBlockRef.value?.querySelectorAll('.line') ?? [];

	if (!sectionRef.value.$el || lines.length === 0) return;

	// 確保初始是橘色
	gsap.set(lines, {color: '#F9CBA5'});

	// 使用 timeline 讓每行動畫根據滾動進度驅動
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: sectionRef.value?.$el,
			start: 'top top',
			end: () => `+=${sectionRef.value?.$el?.offsetHeight || 0}`,
			scrub: true,
			pin: true,
			anticipatePin: 1,
		},
	});

	lines.forEach((line: any) => {
		tl.to(
			line,
			{
				color: '#000',
				duration: 1,
				ease: 'power2.out',
			},
			'+=0.3',
		); // 每段之間加個距離，避免重疊
	});
});
</script>

<style lang="scss" scoped>
.line {
	transition: color 0.4s ease;
}
</style>
