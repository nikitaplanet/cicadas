<template>
	<div class="aboutUs-bg px-6 py-[120px] flex flex-col gap-[100px]">
		<div class="w-full">
			<SectionNameTag>{{ contentText.aboutUs.title }}</SectionNameTag>
		</div>
		<div class="flex flex-col items-center justify-start gap-[60px] scroll-fade">
			<img class="w-full max-w-[515px]" alt="flower" src="@/assets/img/home/aboutUs/1.svg" />
			<img class="w-11/12 max-w-[400px]" alt="word" src="@/assets/img/home/aboutUs/word/1_m.svg" />
			<div class="w-full flex flex-row items-center justify-end">
				<img alt="feather" src="@/assets/img/home/aboutUs/1_feather.svg" />
			</div>
		</div>

		<div class="flex flex-col items-center justify-start gap-[60px] scroll-fade">
			<img class="w-11/12 max-w-[515px]" alt="flower" src="@/assets/img/home/aboutUs/2.svg" />
			<img class="w-11/12 max-w-[400px]" alt="word" src="@/assets/img/home/aboutUs/word/2_m.svg" />
			<div class="w-full flex flex-row items-center justify-start mt-8">
				<img alt="feather" src="@/assets/img/home/aboutUs/feather2.svg" />
			</div>
		</div>

		<div class="flex flex-col items-center justify-start gap-[60px] scroll-fade">
			<img class="w-[85%] max-w-[515px]" alt="flower" src="@/assets/img/home/aboutUs/3.svg" />
			<img class="w-11/12 max-w-[400px]" alt="word" src="@/assets/img/home/aboutUs/word/3_m.svg" />
			<router-link class="w-full flex flex-row items-center justify-center mt-8" to="/about">
				<img alt="feather" src="@/assets/img/home/aboutUs/learnMore.svg" />
			</router-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {contentText} from 'assets/wording/home/text';
import SectionNameTag from '~/components/atoms/text/SectionNameTag.vue';

import {useScrollAnime} from '~/composable/useScrollAnime';
const {fadeInOnScroll} = useScrollAnime();
onMounted(() => {
	fadeInOnScroll('.scroll-fade', {
		duration: 1000,
		delay: (el, i) => i * 200, // 錯開動畫
	});
});
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	width: 100vw;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
