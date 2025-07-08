<template>
	<div ref="main" class="w-full h-screen landing-bg">
		<div class="w-full px-8 h-screen m-auto grid grid-cols-12 pt-40 relative">
			<div class="col-span-6">
				<HeaderText ref="headerText" :mode="TextMode.dark" class="relative">
					<span v-html="title"></span>
				</HeaderText>
			</div>

			<div class="col-span-6">
				<HeaderDescription ref="headerDesc" :isItalic="false" :mode="TextMode.dark">
					<span v-html="description"></span>
				</HeaderDescription>
			</div>

			<button @click="handleScrollDown" class="absolute right-0 bottom-32" type="button">
				<img alt="ScrollDown" src="../../../assets/img/studio/scrollDown.svg" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';

import { TextMode } from '@/components/atoms/text';
import HeaderText from '@/components/atoms/text/HeaderText.vue';
import HeaderDescription from '@/components/atoms/text/HeaderDescription.vue';
import { ScrollTriggerDirection, useFadeInOnScroll } from '@/assets/js/hooks/useFadeInOnScroll.js';

// DOM refs
const main = ref<HTMLElement | null>(null);
const headerText = ref<InstanceType<typeof HeaderText> | null>(null);
const headerDesc = ref<InstanceType<typeof HeaderDescription> | null>(null);

// props
interface Props {
	title: string;
	description: string;
}
withDefaults(defineProps<Props>(), {
	title: '',
	description: '',
});

// Nuxt 3 正確圖片載入
const scrollDownIcon = new URL('@/assets/img/studio/scrollDown.svg', import.meta.url).href;

const handleScrollDown = () => {
	// 往下捲動功能可以寫在這
};

let ctx: gsap.Context;

onMounted(async () => {
	await nextTick(); // 等待子元件 mounted

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
		var(--sc-color-surface-supportive-blue-dark, #a3c4e3) 0%,
		var(--sc-color-surface-supportive-blue-mid, #a7cbed) 50.33%,
		var(--sc-color-surface-def, #fceee9) 100%
	);
}
</style>
