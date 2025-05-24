<template>
	<swiper
		:autoplay="{
			delay: 2000,
			disableOnInteraction: false,
		}"
		:grabCursor="true"
		:loop="true"
		:modules="modules"
		:navigation="false"
		:pagination="{
			clickable: true,
		}"
		:slidesPerView="3"
		:spaceBetween="20"
		class="mySwiper"
		effect="fade">
		<swiper-slide v-for="(item, index) in img" :key="`${index}_${item.key}_item`" class="swiper-slide-custom">
			<img :alt="item.src" :src="item.src" :class="props.imgAspectRatio" />
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import {SwiperImage} from '@components/atoms/swiper';
const modules = [Pagination, EffectFade, Autoplay];

interface Props {
	img: SwiperImage[];
	imgAspectRatio?: 'aspect-4/3';
}

const props = withDefaults(defineProps<Props>(), {
	img: () => [],
	imgAspectRatio: 'aspect-4/3',
});
</script>

<style lang="scss" scoped>
.swiper {
	margin: 0;
}

.swiper-slide {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-bottom: 40px;
}

.swiper-slide img {
	display: block;
	margin: auto;
	object-fit: cover;
}

.mySwiper {
	padding-bottom: 40px;
}
</style>
