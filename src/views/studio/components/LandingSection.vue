<template>
	<div class="w-full h-screen landing-bg">
		<div class="w-full px-8 h-screen m-auto grid grid-cols-12 pt-40 relative">
			<div class="col-span-6">
				<HeaderText ref="headerText" :mode="TextMode.dark" class="relative">
					<span v-html="studioWording.landing.headerTitle"></span>
					<img class="absolute bottom-[-130px] left-[235px]" alt="underline" src="@/assets/img/studio/headingIcon.svg" />
				</HeaderText>
			</div>
			<div class="col-span-6">
				<HeaderDescription ref="headerDesc" :isItalic="false" :mode="TextMode.dark">
					<span v-html="studioWording.landing.description"></span>
				</HeaderDescription>
			</div>

			<button @click="handleScrollDown" class="absolute right-0 bottom-32" type="button">
				<img alt="ScrollDown" src="@/assets/img/studio/scrollDown.svg" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {TextMode} from '@components/atoms/text';
import HeaderText from '@components/atoms/text/HeaderText.vue';
import HeaderDescription from '@components/atoms/text/HeaderDescription.vue';
import {studioWording} from '@assets/wording/studio/text.ts';

const handleScrollDown = () => {};
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
