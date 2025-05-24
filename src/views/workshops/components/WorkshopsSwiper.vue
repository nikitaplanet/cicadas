<template>
	<swiper
		:autoplay="{
			delay: 3000,
			disableOnInteraction: false,
		}"
		:breakpoints="breakPoints"
		:centeredSlides="true"
		:loop="true"
		:modules="modules"
		:pagination="{
			clickable: true,
		}"
		:spaceBetween="20"
		class="mySwiper">
		<swiper-slide v-for="item in imgs" class="swiper-slide-custom">
			<img :alt="item.key" :src="item.src" class="aspect-[16/11]" />
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination} from 'swiper/modules';
import {SwiperImage} from '@components/atoms/swiper';
import Photo1 from '@assets/img/workshops/swiperPhotos/1.jpg';
import Photo2 from '@assets/img/workshops/swiperPhotos/2.jpg';
import Photo3 from '@assets/img/workshops/swiperPhotos/3.jpg';
import Photo4 from '@assets/img/workshops/swiperPhotos/4.jpg';

const modules = [Autoplay, Pagination];
const breakPoints = reactive({
	320: {
		slidesPerView: 2,
	},
	640: {
		slidesPerView: 1.5,
	},
	1024: {
		slidesPerView: 1.5,
	},
	1280: {
		slidesPerView: 2.5,
	},
	1920: {
		slidesPerView: 2.5,
	},
});

const imgs = reactive<SwiperImage[]>([
	{
		key: '1',
		src: Photo1,
	},
	{
		key: '2',
		src: Photo2,
	},
	{
		key: '3',
		src: Photo3,
	},
	{
		key: '4',
		src: Photo4,
	},
]);
</script>

<style lang="scss" scoped>
.mySwiper {
	padding-bottom: 40px;

	.swiper-slide-custom {
		opacity: 0.5;
		transition: opacity 0.3s ease-in-out;
	}

	.swiper-slide-active {
		opacity: 1 !important;
	}
}
</style>
