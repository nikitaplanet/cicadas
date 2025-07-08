<template>
	<div v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}" class="w-full m-auto md:w-full transition-all duration-700">
		<NImageSwiper :mediaList="imgs" />
	</div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';
import NImageSwiper from '@/components/atoms/swiper/NImageSwiper.vue';
import type {SwiperImage} from '@/components/atoms/swiper';
import Photo1 from '@/assets/img/workshops/swiperPhotos/1.jpg';
import Photo2 from '@/assets/img/workshops/swiperPhotos/2.jpg';
import Photo3 from '@/assets/img/workshops/swiperPhotos/3.jpg';

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
		key: '2',
		src: Photo2,
	},
]);
</script>

<style lang="scss" scoped></style>
