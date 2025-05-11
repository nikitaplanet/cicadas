<template>
	<SectionContainer
		ref="sectionRef"
		:hasMinHeight="false"
		class="h-screen text-h2 italic font-semibold font-h2sans flex items-center justify-center overflow-hidden">
		<div ref="textBlockRef">
			<span v-html="contentText.section2.title1" class="line"></span>
			<span v-html="contentText.section2.title2" class="line"></span>
		</div>
	</SectionContainer>
</template>

<script lang="ts" setup>
import {onMounted, ref, nextTick} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {contentText} from '@assets/wording/home/text.ts';

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
