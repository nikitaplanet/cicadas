<template>
	<div
		ref="main"
		class="w-full bg-[linear-gradient(180deg,var(--sc-color-border-primary,#DD5621)_75.98%,rgba(221,86,33,0)_100%)] lg:bg-[linear-gradient(180deg,var(--Border-primary,#dd5621)_38.08%,rgba(221,86,33,0)_100%)]">
		<div class="w-11/12 m-auto">
			<div class="w-full h-screen relative">
				<div class="w-full h-full absolute left-0 top-0 flex align-center justify-center">
					<img ref="logo" class="block w-1/2 lg:w-9/12 max-w-[450px]" alt="LogoIcon" src="~@/assets/img/home/brand/LogoIcon.svg" />
				</div>
				<div class="w-full h-full grid grid-cols-1 pt-12 absolute md:grid-cols-12">
					<div class="col-span-1 md:col-span-8">
						<HeaderText ref="headerText" :mode="TextMode.light">
							<span v-html="contentText.landing.headerTitle"></span>
						</HeaderText>
					</div>

					<div class="flex items-end pb-24 col-span-1 md:col-span-4 md:items-start">
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
import {contentText} from '@/assets/wording/home/text';
import {ScrollTriggerDirection, useFadeInOnScroll} from '@/assets/js/hooks/useFadeInOnScroll.js';

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
	ctx?.revert();
});
</script>

<style lang="scss" scoped></style>
