<template>
	<div ref="main" class="w-full h-screen landing-bg">
		<div class="w-full px-8 h-screen m-auto flex flex-col justify-start md:justify-between md:flex-row gap-10 pt-40 relative">
			<div class="w-1/2">
				<HeaderText ref="headerText" :mode="TextMode.dark">
					<span v-html="workshopsWording.landing.headerTitle"></span>
				</HeaderText>
			</div>
			<div class="w-1/2">
				<HeaderDescription ref="headerDesc" :isItalic="false" :mode="TextMode.dark">
					<span v-html="workshopsWording.landing.description"></span>
				</HeaderDescription>
			</div>

			<button @click="handleScrollDown" class="absolute right-0 bottom-32" type="button">
				<img alt="ScrollDown" src="@/assets/img/workshops/scrollDown.svg" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {TextMode} from '@components/atoms/text';
import HeaderText from '@components/atoms/text/HeaderText.vue';
import HeaderDescription from '@components/atoms/text/HeaderDescription.vue';
import {workshopsWording} from '@assets/wording/workshops/text.ts';
import gsap from 'gsap';
import {ScrollTriggerDirection, useFadeInOnScroll} from '@/hooks/useFadeInOnScroll.js';

const main = ref(null);
const headerText = ref(null);
const headerDesc = ref(null);

const handleScrollDown = () => {};

// 動畫淡入
let ctx;

onMounted(() => {
	ctx = gsap.context(() => {
		useFadeInOnScroll(headerText.value.$el, main.value, {
			direction: ScrollTriggerDirection.LEFT,
		});

		useFadeInOnScroll(headerDesc.value.$el, main.value, {
			direction: ScrollTriggerDirection.DOWN,
		});
	});
});

onUnmounted(() => {
	ctx.revert();
});
</script>

<style lang="scss" scoped>
.landing-bg {
	background: linear-gradient(
		180deg,
		var(--sc-color-surface-supportive-yellow-dark, #d4d459) 0%,
		var(--sc-color-surface-supportive-yellow-mid, #f4f4a8) 50.33%,
		var(--sc-color-surface-def, #fceee9) 100%
	);
}
</style>
