<template>
	<div class="w-full h-screen landing-bg">
		<div class="w-full px-8 h-screen m-auto grid grid-cols-12 pt-40 relative">
			<div class="col-span-6">
				<HeaderText ref="headerText" :mode="TextMode.dark" class="relative">
					<span v-html="aboutWording.landing.headerTitle"></span>
					<img class="absolute bottom-[-57px] left-[70px]" alt="underline" src="@/assets/img/about/headingUnderline.svg" />
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
import {aboutWording} from '@assets/wording/about/text.ts';
import {TextMode} from '@components/atoms/text';
import HeaderText from '@components/atoms/text/HeaderText.vue';
import HeaderDescription from '@components/atoms/text/HeaderDescription.vue';

const handleScrollDown = () => {};
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
