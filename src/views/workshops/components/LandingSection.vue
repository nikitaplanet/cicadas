<template>
	<div class="w-full h-screen landing-bg">
		<div class="w-full px-8 h-screen m-auto grid grid-cols-12 pt-40 relative">
			<div class="col-span-6">
				<HeaderText ref="headerText" :mode="TextMode.dark" class="relative">
					<span v-html="workshopsWording.landing.headerTitle"></span>
					<img class="absolute bottom-[-130px] left-[235px]" alt="underline" src="@/assets/img/workshops/headingIcon.svg" />
				</HeaderText>
			</div>
			<div class="col-span-6">
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
import {TextMode} from '@components/atoms/text';
import HeaderText from '@components/atoms/text/HeaderText.vue';
import HeaderDescription from '@components/atoms/text/HeaderDescription.vue';
import {workshopsWording} from '@assets/wording/workshops/text.ts';

const handleScrollDown = () => {};
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
