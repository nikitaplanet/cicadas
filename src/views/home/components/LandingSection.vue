<template>
	<div ref="main" class="landing-bg w-full">
		<div class="w-11/12 m-auto">
			<div class="w-full h-screen relative">
				<div class="w-full h-full absolute left-0 top-0 flex align-center justify-center">
					<img ref="logo" class="block w-9/12 max-w-[450px]" alt="LogoIcon" src="~@/assets/img/home/brand/LogoIcon.svg" />
				</div>
				<div class="w-full h-full grid grid-cols-12 pt-12 absolute">
					<div class="col-span-8">
						<HeaderText ref="headerText" :mode="TextMode.light">
							<span v-html="contentText.landing.headerTitle"></span>
						</HeaderText>
					</div>

					<div class="col-span-4">
						<HeaderDescription ref="headerDesc" :mode="TextMode.light">
							<span v-html="contentText.landing.headerDescription"></span>
						</HeaderDescription>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import gsap from 'gsap';

import HeaderText from '@/components/atoms/text/HeaderText.vue';
import HeaderDescription from '@/components/atoms/text/HeaderDescription.vue';
import {TextMode} from '@/components/atoms/text';
import {contentText} from '@assets/wording/home/text.ts';
import {ScrollTriggerDirection, useFadeInOnScroll} from '@/hooks/useFadeInOnScroll.js';

const main = ref(null);
const logo = ref(null);
const headerText = ref(null);
const headerDesc = ref(null);

// 動畫淡入
let ctx;

onMounted(() => {
	ctx = gsap.context(() => {
		useFadeInOnScroll(logo.value, main.value, {
			direction: ScrollTriggerDirection.DOWN,
		});

		useFadeInOnScroll(headerText.value.$el, main.value, {
			direction: ScrollTriggerDirection.LEFT,
		});

		useFadeInOnScroll(headerDesc.value.$el, main.value, {
			direction: ScrollTriggerDirection.RIGHT,
		});
	});
});

onUnmounted(() => {
	ctx.revert();
});
</script>

<style lang="scss" scoped>
.landing-bg {
	background: var(--SC-Gradient-orange-hero, linear-gradient(180deg, var(--Border-primary, #dd5621) 38.08%, rgba(221, 86, 33, 0) 100%));
}
</style>
