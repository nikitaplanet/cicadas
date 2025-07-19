<template>
	<div ref="main" class="w-full h-screen common-bg fixed top-0 left-0 z-30 grid grid-cols-1 py-[60px] px-6 lg:px-10">
		<div class="flex justify-between items-start">
			<HeaderText ref="headerText" :mode="TextMode.light" class="relative">
				<span v-html="commonWording.headerTitle"></span>
				<img class="absolute bottom-[-57px] left-0" alt="underline" src="@/assets/img/common/headingUnderline.svg" />
			</HeaderText>

			<button @click="handleCloseCommon" class="clickCursor w-11 h-11 flex justify-end items-start" type="button">
				<img class="w-8 h-8" alt="Close" src="@/assets/img/components/overlay/close_w.svg" />
			</button>
		</div>

		<div class="flex justify-between items-end flex-col lg:justify-end">
			<div
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="w-full flex flex-row justify-end items-start transition-all duration-700">
				<div class="max-w-screen-sm">
					<div v-html="commonWording.details.title" class="text-scaleSM lg:text-scaleMD font-body font-medium"></div>
					<div ref="headerDesc" class="mt-5 font-body text-scaleSM lg:text-scaleMD font-medium">
						<template v-for="item in commonWording.details.contents">
							<template v-if="item.type === TEXT_TYPE.TEXT">
								<div v-for="text in item.content" v-html="text"></div>
							</template>

							<template v-if="item.type === TEXT_TYPE.SPACE">
								<div class="mt-5"></div>
							</template>

							<template v-if="item.type === TEXT_TYPE.TEXT_LIST">
								<ul class="flex flex-col list-[square] list-inside pl-3">
									<li v-for="text in item.content" v-html="text"></li>
								</ul>
							</template>
						</template>
					</div>
				</div>
			</div>
			<div class="clickCursor w-full flex flex-row justify-end items-end mt-10">
				<a class="group relative" href="https://cryptpad.fr/form/#/2/form/view/vDSfK5jM2RgWSrtLZlCO6-XqmJbux9fOm1sr5xgRS0s/" target="_blank">
					<img
						class="absolute left-0 bottom-[3px] group-hover:opacity-0 transition-opacity duration-200"
						alt="Tell us about yourself"
						src="@/assets/img/common/tellUs_btn.svg" />
					<img
						class="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
						alt="Tell us about yourself"
						src="@/assets/img/common/tellUs_btn-hover.svg" />
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {TextMode} from '@/components/atoms/text';
import HeaderText from '@/components/atoms/text/HeaderText.vue';
import {commonWording} from '@/assets/wording/common/text';
import {TEXT_TYPE} from '@/assets/js/enum/textType';
import gsap from 'gsap';
import {ScrollTriggerDirection, useFadeInOnScroll} from 'assets/js/hooks/useFadeInOnScroll.js';

const main = ref(null);
const headerText = ref(null);
const headerDesc = ref(null);

const emit = defineEmits(['closeCommon']);

// 動畫淡入
let ctx;

onMounted(() => {
	if (!import.meta.client) return;

	ctx = gsap.context(() => {
		useFadeInOnScroll(headerText.value.$el, main.value, {
			direction: ScrollTriggerDirection.LEFT,
		});

		useFadeInOnScroll(headerDesc.value.$el, main.value, {
			direction: ScrollTriggerDirection.DOWN,
		});
	});

	const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	setTimeout(() => {
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${scrollbarWidth}px`;
	}, 200);
});

onUnmounted(() => {
	document.body.style.overflow = '';
	document.body.style.paddingRight = '';
});

const handleCloseCommon = () => {
	emit('closeCommon');
	ctx.revert();
};
</script>

<style lang="scss" scoped>
.common-bg {
	background: linear-gradient(0deg, var(--sc-color-surface-def, #fceee9) 29.15%, var(--sc-color-surface-primary, #dd5621) 81%);
}
</style>
