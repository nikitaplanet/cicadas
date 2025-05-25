<template>
	<div class="w-full h-screen common-bg fixed top-0 left-0 z-30 grid grid-cols-1 py-14 px-10">
		<div class="flex justify-between items-start">
			<HeaderText ref="headerText" :mode="TextMode.light" class="relative">
				<span v-html="commonWording.headerTitle"></span>
				<img class="absolute bottom-[-57px] left-0" alt="underline" src="@/assets/img/common/headingUnderline.svg" />
			</HeaderText>

			<button class="w-11 h-11 flex justify-end items-start" type="button">
				<img class="w-6 h-6" alt="Close" src="@/assets/img/components/overlay/close.svg" />
			</button>
		</div>

		<div class="w-full flex flex-row justify-end items-start">
			<div class="max-w-screen-sm">
				<div v-html="commonWording.details.title" class="text-h5 font-h5 font-semibold"></div>
				<div v-for="item in commonWording.details.contents">
					<template v-if="item.type === TEXT_TYPE.TEXT">
						<div v-for="text in item.content" v-html="text"></div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue';
import {TextMode} from '@components/atoms/text';
import HeaderText from '@components/atoms/text/HeaderText.vue';
import {commonWording} from '@assets/wording/common/text.ts';
import {TEXT_TYPE} from '@assets/js/enum/textType.ts';

onMounted(() => {
	document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
	document.body.style.overflow = '';
});
</script>

<style lang="scss" scoped>
.common-bg {
	background: linear-gradient(0deg, var(--sc-color-surface-def, #fceee9) 29.15%, var(--sc-color-surface-primary, #dd5621) 81%);
}
</style>
