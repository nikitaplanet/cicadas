<template>
	<div ref="main" class="w-full h-screen landing-bg">
		<div
			class="w-full px-6 lg:px-8 h-screen m-auto flex flex-col gap-10 lg:gap-3 lg:grid lg:grid-cols-12 pt-20 lg:pt-40 relative">
			<div class="lg:col-span-6">
				<HeaderText ref="headerText" :mode="TextMode.dark" class="relative">
					<span v-html="campaignsWording.landing.headerTitle"></span>
				</HeaderText>
			</div>
			<div class="lg:col-span-6">
				<HeaderDescription ref="headerDesc" :isItalic="false" :mode="TextMode.dark">
					<span v-html="campaignsWording.landing.description"></span>
				</HeaderDescription>
			</div>

			<button @click="handleScrollDown" class="absolute right-0 bottom-32" type="button">
				<img alt="ScrollDown" src="@/assets/img/campaigns/scrollDown.svg" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {TextMode} from '@/components/atoms/text';
import HeaderText from '@/components/atoms/text/HeaderText.vue';
import HeaderDescription from '@/components/atoms/text/HeaderDescription.vue';
import {campaignsWording} from '@/assets/wording/campaigns/text';
import gsap from 'gsap';
import {ScrollTriggerDirection, useFadeInOnScroll} from '@/assets/js/hooks/useFadeInOnScroll.js';

const main = ref(null);
const headerText = ref(null);
const headerDesc = ref(null);

const handleScrollDown = () => {
};

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
			var(--sc-color-surface-supportive-green-dark, #add4aa) 0%,
			var(--sc-color-surface-supportive-green-mid, #bbe5b8) 50.33%,
			var(--sc-color-surface-def, #fceee9) 100%
	);
}
</style>
