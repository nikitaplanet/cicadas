<template>
	<ClientOnly>
		<Swiper
			@slideChange="onSlideChange"
			@swiper="onSwiper"
			ref="swiperRef"
			:allowTouchMove="true"
			:loop="false"
			:modules="modules"
			:observeParents="true"
			:observer="true"
			:pagination="{
				clickable: true,
			}"
			:slidesPerView="1"
			:spaceBetween="50"
			:updateOnWindowResize="true"
			:watchSlidesProgress="true"
			class="w-full max-w-[1000px] mx-auto !pb-[40px] md:!pb-[70px] mySwiper"
			effect="fade"
			navigation>
			<SwiperSlide v-for="(item, index) in contentList" :key="`slide-quote-${index}`" class="cursor-grab">
				<!--Desk-->
				<div class="w-full relative justify-center items-center hidden s_lg:flex">
					<img @load="handleImageLoad" :alt="item.title" :src="item.slideImage" class="w-full max-w-[700px]" />
					<p class="absolute top-0 left-0 invisible">
						{{ item.content }}
					</p>
				</div>

				<!--Mobile-->
				<div class="w-full block s_lg:hidden">
					<img @load="handleImageLoad" :alt="item.title" :src="item.slideImageMobile" class="w-full" />
				</div>
			</SwiperSlide>
		</Swiper>
	</ClientOnly>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation, EffectFade} from 'swiper/modules';
import {reactive, ref, onMounted, nextTick} from 'vue';
import {contentText} from '@/assets/wording/home/text';

const modules = [Autoplay, Pagination, Navigation, EffectFade];
const contentList = reactive([...contentText.sliderSection.contentList]);
const swiperRef = ref(null);
let swiperInstance = null;

const onSwiper = (swiper) => {
	swiperInstance = swiper;

	// Firefox 特殊處理
	if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		nextTick(() => {
			swiper.update();
			swiper.updateSize();
			swiper.updateSlides();
			swiper.updateProgress();
			swiper.updateSlidesClasses();
		});
	}
};

const onSlideChange = (swiper) => {
	console.log('slide changed to:', swiper.activeIndex);
};

const handleImageLoad = () => {
	if (swiperInstance) {
		nextTick(() => {
			swiperInstance.update();
		});
	}
};

onMounted(() => {
	// 確保 Swiper 正確初始化
	nextTick(() => {
		if (swiperInstance) {
			swiperInstance.update();
		}
	});
});
</script>

<style lang="scss" scoped>
.mySwiper {
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;

	// Firefox 特殊 CSS 修復
	@-moz-document url-prefix() {
		:deep(.swiper-wrapper) {
			transform: translate3d(0px, 0, 0) !important;
		}

		:deep(.swiper-slide) {
			opacity: 1 !important;
		}

		:deep(.swiper-slide-active) {
			opacity: 1 !important;
		}

		:deep(.swiper-slide-next) {
			opacity: 0 !important;
		}

		:deep(.swiper-slide-prev) {
			opacity: 0 !important;
		}
	}

	// 通用修復
	:deep(.swiper-wrapper) {
		backface-visibility: hidden;
		perspective: 1000px;
	}

	:deep(.swiper-slide) {
		backface-visibility: hidden;
		transform-style: preserve-3d;
	}
}
</style>
