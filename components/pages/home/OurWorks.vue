<template>
	<div class="section3-bg py-10 md:py-28">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full grid grid-cols-1 xl:grid-cols-12 scroll-fade">
				<div class="col-span-1 xl:col-span-5 flex flex-col">
					<SectionNameTag>Our Works</SectionNameTag>
					<div class="relative py-4 lg:p-4 xl:p-16 mt-3">
						<div
							:class="{
								'inline-block opacity-100': hoverImage === 1 || currentImage === 1,
								'hidden opacity-0': hoverImage !== 1 && currentImage !== 1,
							}">
							<img alt="1" src="@/assets/img/home/section3/1.png" />
						</div>

						<div
							:class="{
								'inline-block opacity-100': hoverImage === 2 || currentImage === 2,
								'hidden opacity-0': hoverImage !== 2 && currentImage !== 2,
							}">
							<img alt="2" src="@/assets/img/home/section3/2.png" />
						</div>

						<div
							:class="{
								'inline-block opacity-100': hoverImage === 3 || currentImage === 3,
								'hidden opacity-0': hoverImage !== 3 && currentImage !== 3,
							}">
							<img alt="3" src="@/assets/img/home/section3/3.png" />
						</div>

						<div
							:class="{
								'inline-block opacity-100': hoverImage === 4 || currentImage === 4,
								'hidden opacity-0': hoverImage !== 4 && currentImage !== 4,
							}">
							<img alt="4" src="@/assets/img/home/section3/4.png" />
						</div>
					</div>
				</div>
				<div class="clickCursor col-span-1 flex flex-col lg:px-5 gap-3 xl:p-10 xl:gap-10 mt-5 xl:mt-7 xl:col-span-7">
					<HoverTextBox
						v-for="item in list"
						@click="handleClick(item.id)"
						@mouseleave="handleMouseLeave"
						@mouseover="handleMouseOver(item)"
						:description="item.description"
						:isActive="selectedContent === item.id"
						:isButton="item.id === 4"
						:key="item.title"
						:link="item.link"
						:title="item.title" />
					<div class="block lg:hidden text-body font-body font-semibold mt-2">
						{{ currentDescription }}
					</div>
					<div class="flex lg:hidden w-full items-center justify-end mt-2">
						<button @click="handleClickMore" type="button">
							<img alt="learnMore" src="@/assets/img/home/ourWorks/learnMore.svg" />
						</button>
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>

	<Transition mode="out-in" name="fade">
		<CommonOverlay v-if="isShowCommon" @closeCommon="handleCloseCommon" />
	</Transition>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, ref} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionNameTag from '@/components/atoms/text/SectionNameTag.vue';
import HoverTextBox from '@/components/molecules/HoverTextBox.vue';
import {contentText} from '@/assets/wording/home/text';
import CommonOverlay from '@/components/layout/CommonOverlay.vue';

import {useRouter} from 'vue-router';
const router = useRouter();

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
const {isMobile} = useGetMediaQuery();

const selectedContent = ref(isMobile.value ? 1 : 0);
const showImage = ref(0);
const hoverImage = ref(0);
const currentImage = ref(1);
const isShowCommon = ref(false);

let timer: ReturnType<typeof setInterval>;

onMounted(() => {
	if (!isMobile.value) {
		initTimer();
	}
});

const initTimer = () => {
	timer = setInterval(() => {
		if (currentImage.value < 4) {
			currentImage.value++;
		} else if (currentImage.value === 4) {
			currentImage.value = 1;
		}
	}, 3000);
};

const handleClick = (id: number) => {
	selectedContent.value = id;
	showImage.value = id;
	hoverImage.value = id;

	if (id === 4) {
		// Commons
		isShowCommon.value = true;
	}
};

const handleCloseCommon = () => {
	isShowCommon.value = false;
};

const list = reactive([...contentText.ourWorks.list]);

const currentDescription = computed(() => {
	const current = list.find((item) => item.id === selectedContent.value);
	return current?.description || '';
});

const handleClickMore = () => {
	if (selectedContent.value === 4) {
		// Common
		isShowCommon.value = true;
	} else {
		const current = list.find((item) => item.id === selectedContent.value);
		router.push(current?.link || '');
	}
};

const handleMouseOver = (item) => {
	hoverImage.value = item.id;
	clearInterval(timer);
	currentImage.value = item.id;
};

const handleMouseLeave = () => {
	hoverImage.value = showImage.value;
	initTimer();
};

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
.section3-bg {
	background: var(--Surface-supportive-green-light, #ddf0db);
}
</style>
