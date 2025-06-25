<template>
	<div class="w-[90%] m-auto md:w-full">
		<swiper
			:autoplay="{
				delay: 5000,
				disableOnInteraction: true,
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
			<swiper-slide v-for="item in mediaList" class="swiper-slide-custom">
				<img :alt="item.key" :src="item.src" class="aspect-[16/11]" />
			</swiper-slide>
		</swiper>
	</div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination} from 'swiper/modules';
import {SwiperImage} from '@components/atoms/swiper';

interface Props {
	mediaList: SwiperImage[];
}

withDefaults(defineProps<Props>(), {
	mediaList: () => [],
});

const modules = [Autoplay, Pagination];
const breakPoints = reactive({
	320: {
		slidesPerView: 1,
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
