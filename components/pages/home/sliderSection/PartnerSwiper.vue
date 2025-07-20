<template>
	<div>
		<!-- 確保只在客戶端渲染 -->
		<ClientOnly fallback="Loading..." fallback-tag="div">
			<LazySwiper
				@init="onSwiperInit"
				@slideChange="onSlideChange"
				@swiper="onSwiper"
				ref="swiperRef"
				:allowTouchMove="true"
				:centeredSlides="false"
				:grabCursor="true"
				:init="false"
				:longSwipes="false"
				:loop="false"
				:modules="modules"
				:navigation="true"
				:observeParents="true"
				:observer="true"
				:observeSlideChildren="true"
				:pagination="{
					clickable: true,
				}"
				:preventInteractionOnTransition="true"
				:runCallbacksOnInit="false"
				:shortSwipes="true"
				:slidesPerView="1"
				:spaceBetween="50"
				:speed="300"
				:threshold="5"
				:touchAngle="45"
				:touchRatio="1"
				:watchSlidesProgress="true"
				class="w-full max-w-[1000px] mx-auto !pb-[40px] md:!pb-[70px] mySwiper"
				effect="fade">
				<SwiperSlide v-for="(item, index) in contentList" :key="`slide-quote-${index}`" class="cursor-grab">
					<!--Desk-->
					<div class="w-full relative justify-center items-center hidden s_lg:flex">
						<img :alt="item.title" :src="item.slideImage" class="w-full max-w-[700px]" decoding="async" loading="eager" />
						<p class="absolute top-0 left-0 invisible">
							{{ item.content }}
						</p>
					</div>

					<!--Mobile-->
					<div class="w-full block s_lg:hidden">
						<img :alt="item.title" :src="item.slideImageMobile" class="w-full" decoding="async" loading="eager" />
					</div>
				</SwiperSlide>
			</LazySwiper>
		</ClientOnly>
	</div>
</template>

<script lang="ts" setup>
import {reactive, ref, onMounted, nextTick, onBeforeUnmount} from 'vue';
import {contentText} from '@/assets/wording/home/text';

// 動態導入 Swiper 避免 SSR 問題
const LazySwiper = defineAsyncComponent(() => import('swiper/vue').then((module) => module.Swiper));

const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then((module) => module.SwiperSlide));

// 動態導入 CSS
if (process.client) {
	import('swiper/css');
	import('swiper/css/effect-fade');
	import('swiper/css/pagination');
	import('swiper/css/navigation');
}

const contentList = reactive([...contentText.sliderSection.contentList]);
const swiperRef = ref(null);
let swiperInstance = null;
let isInitialized = false;
let slideChangeTimeout = null;

// 動態導入模組
const modules = await (async () => {
	if (process.client) {
		const {Pagination, Navigation, EffectFade} = await import('swiper/modules');
		return [Pagination, Navigation, EffectFade];
	}
	return [];
})();

const onSwiper = (swiper) => {
	swiperInstance = swiper;
	console.log('Swiper instance created');
};

const onSwiperInit = (swiper) => {
	if (isInitialized) return;

	isInitialized = true;
	swiperInstance = swiper;

	console.log('Swiper initialized in production');

	// 生產環境特殊處理
	nextTick(() => {
		swiper.update();
		swiper.updateSize();
		swiper.updateSlides();
		swiper.updateProgress();
		swiper.updateSlidesClasses();
	});
};

const onSlideChange = (swiper) => {
	// 清除之前的 timeout
	if (slideChangeTimeout) {
		clearTimeout(slideChangeTimeout);
	}

	// 使用 setTimeout 確保只執行最後一次
	slideChangeTimeout = setTimeout(() => {
		console.log('Final slide changed to:', swiper.activeIndex);
		slideChangeTimeout = null;
	}, 50);
};

onMounted(() => {
	// 確保在客戶端完全載入後初始化
	if (process.client) {
		nextTick(() => {
			setTimeout(() => {
				if (swiperInstance && !isInitialized) {
					swiperInstance.init();
				}
			}, 100);
		});
	}
});

onBeforeUnmount(() => {
	if (slideChangeTimeout) {
		clearTimeout(slideChangeTimeout);
	}
	if (swiperInstance) {
		swiperInstance.destroy(true, true);
		swiperInstance = null;
	}
});
</script>

<style lang="scss" scoped>
.mySwiper {
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;

	:deep(.swiper-wrapper) {
		backface-visibility: hidden;
		perspective: 1000px;
	}

	:deep(.swiper-slide) {
		backface-visibility: hidden;
		transform-style: preserve-3d;
		opacity: 0;
		transition: opacity 0.3s ease;

		&.swiper-slide-active {
			opacity: 1;
		}
	}

	// 生產環境優化
	:deep(.swiper-button-next),
	:deep(.swiper-button-prev) {
		opacity: 0.8;
		transition: opacity 0.3s ease;

		&:hover {
			opacity: 1;
		}

		&.swiper-button-disabled {
			opacity: 0.3;
			pointer-events: none;
		}
	}
}
</style>
