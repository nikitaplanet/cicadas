<template>
	<div ref="main" class="w-full h-screen landing-bg">
		<div class="w-full px-6 lg:px-8 h-screen m-auto flex flex-col gap-10 lg:gap-3 lg:grid lg:grid-cols-12 pt-20 lg:pt-40 relative">
			<div class="col-span-6">
				<HeaderText ref="headerText" :mode="TextMode.dark" class="relative">
					<span v-html="aboutWording.landing.headerTitle"></span>
				</HeaderText>
			</div>
			<div class="col-span-6">
				<HeaderDescription ref="headerDesc" :isItalic="false" :mode="TextMode.dark">
					<span v-html="aboutWording.landing.description"></span>
				</HeaderDescription>
			</div>

			<button @click="handleScrollDown" class="absolute right-0 bottom-32" type="button">
				<img alt="ScrollDown" src="@/assets/img/about/scrollDown.svg" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import {onMounted, onUnmounted, ref, nextTick} from 'vue';
import {aboutWording} from '@/assets/wording/about/text';
import {TextMode} from '@/components/atoms/text';
import HeaderText from '@/components/atoms/text/HeaderText.vue';
import HeaderDescription from '@/components/atoms/text/HeaderDescription.vue';
import {ScrollTriggerDirection, useFadeInOnScroll} from '@/assets/js/hooks/useFadeInOnScroll.js';

const handleScrollDown = () => {};

const main = ref<HTMLElement | null>(null);
const headerText = ref<InstanceType<typeof HeaderText> | null>(null);
const headerDesc = ref<InstanceType<typeof HeaderDescription> | null>(null);

let ctx: gsap.Context;

onMounted(async () => {
	await nextTick(); // 等子元件 mounted
	if (!main.value || !headerText.value || !headerDesc.value) return;

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
	ctx?.revert();
});
</script>

<style lang="scss" scoped>
.landing-bg {
	background: linear-gradient(
		180deg,
		var(--Surface-supportive-violet-dark, #d6b9e0) 0%,
		var(--Surface-supportive-violet-mid, #e9c9f4) 50.33%,
		var(--Surface-def, #fceee9) 100%
	);
}
</style>
