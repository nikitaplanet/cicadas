<template>
	<swiper
		:autoplay="{
			delay: 2000,
			disableOnInteraction: false,
		}"
		:grabCursor="true"
		:lazy="true"
		:loop="true"
		:modules="modules"
		:navigation="false"
		:pagination="{
			clickable: true,
		}"
		effect="fade">
		<swiper-slide v-for="(item, index) in img" :key="`${index}_${item.key}_item`">
			<img :alt="item.src" :src="item.src" />
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import {SwiperImage} from '@components/atoms/swiper/index.ts';
const modules = [Pagination, EffectFade, Autoplay];

interface Props {
	img: SwiperImage[];
}

withDefaults(defineProps<Props>(), {
	img: () => [],
});
</script>

<style lang="scss" scoped>
.swiper {
	//width: 100%;
	margin: 0;
}

.swiper-slide {
	padding-bottom: 40px;
}

.swiper-slide img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

//.swiper-pagination-bullet {
//	width: 10px;
//	height: 10px;
//	object-fit: contain;
//	opacity: 0.6;
//	transition: all 0.3s;
//	background-color: transparent;
//}
//
//.swiper-pagination-bullet-active {
//	content: url('../../../components/atoms/swiper/dot_active.svg'); // 用圖片切換方式
//	opacity: 1;
//	background-color: transparent;
//}
</style>
