<template>
	<div
		ref="main"
		class="w-full overflow-hidden bg-[linear-gradient(180deg,var(--sc-color-border-primary,#DD5621)_75.98%,rgba(221,86,33,0)_100%)] lg:bg-[linear-gradient(180deg,var(--Border-primary,#dd5621)_38.08%,rgba(221,86,33,0)_100%)]">
		<div class="w-full px-6 lg:px-10 m-auto">
			<div class="w-full h-screen relative">
				<div class="hidden lg:block">
					<div class="w-full h-full absolute left-0 top-0 flex align-center justify-center">
						<img ref="logo" class="block w-1/2 lg:w-9/12 max-w-[450px]" alt="LogoIcon" src="~@/assets/img/home/brand/LogoIcon.svg" />
					</div>
					<div class="w-full h-full grid grid-cols-1 pt-20 lg:pt-10 absolute lg:grid-cols-12">
						<div class="col-span-1 md:col-span-8">
							<HeaderText ref="headerText" :mode="TextMode.light">
								<span v-html="contentText.landing.headerTitle"></span>
							</HeaderText>
						</div>

						<div class="flex items-start pb-[60px] col-span-1 md:pt-0 md:col-span-4 md:items-start lg:pb-24">
							<HeaderDescription ref="headerDesc" :mode="TextMode.light" isHome>
								<span v-html="contentText.landing.headerDescription"></span>
							</HeaderDescription>
						</div>
					</div>
				</div>

				<!--手機版-->
				<div class="w-full h-full flex items-center justify-center lg:hidden">
					<div>
						<div>
							<HeaderText ref="headerTextM" :mode="TextMode.light">
								<span v-html="contentText.landing.headerTitle"></span>
							</HeaderText>
						</div>

						<div class="flex items-center justify-center my-10">
							<img ref="logoM" class="block w-1/2 lg:w-9/12 max-w-[450px]" alt="LogoIcon" src="~@/assets/img/home/brand/LogoIcon.svg" />
						</div>

						<div>
							<HeaderDescription ref="headerDescM" :mode="TextMode.light" isHome>
								<span v-html="contentText.landing.headerDescription"></span>
							</HeaderDescription>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, watch} from 'vue';
import gsap from 'gsap';

import HeaderText from '@/components/atoms/text/HeaderText.vue';
import HeaderDescription from '@/components/atoms/text/HeaderDescription.vue';
import {TextMode} from '@/components/atoms/text';
import {contentText} from '@/assets/wording/home/text';
import {ScrollTriggerDirection, useFadeInOnScroll} from '@/assets/js/hooks/useFadeInOnScroll.js';

const main = ref(null);
const logo = ref(null);
const headerText = ref(null);
const headerDesc = ref(null);

const logoM = ref(null);
const headerTextM = ref(null);
const headerDescM = ref(null);
import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
const {isMobile} = useGetMediaQuery();

// 動畫淡入
let ctx;

onMounted(() => {
	ctx = gsap.context(() => {
		initAnimate();
	});
});

onUnmounted(() => {
	ctx?.revert();
});

watch(isMobile, initAnimate);

function initAnimate() {
	if (isMobile.value) {
		nextTick(() => {
			useFadeInOnScroll(logoM.value, main.value, {
				direction: ScrollTriggerDirection.DOWN,
			});

			useFadeInOnScroll(headerTextM.value.$el, main.value, {
				direction: ScrollTriggerDirection.LEFT,
			});

			useFadeInOnScroll(headerDescM.value.$el, main.value, {
				direction: ScrollTriggerDirection.RIGHT,
			});
		});
	} else {
		nextTick(() => {
			useFadeInOnScroll(logo.value, main.value, {
				direction: ScrollTriggerDirection.DOWN,
			});

			useFadeInOnScroll(headerText.value.$el, main.value, {
				direction: ScrollTriggerDirection.LEFT,
			});

			useFadeInOnScroll(headerDesc.value.$el, main.value, {
				direction: ScrollTriggerDirection.RIGHT,
			});
		});
	}
}
</script>

<style lang="scss" scoped></style>
