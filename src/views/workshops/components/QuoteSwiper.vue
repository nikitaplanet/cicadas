<template>
	<div class="w-full py-24">
		<swiper
			:autoplay="{
				delay: 10000,
				disableOnInteraction: false,
			}"
			:effect="'fade'"
			:modules="modules"
			:pagination="{
				clickable: true,
			}"
			:slidesPerView="1"
			:spaceBetween="50"
			class="mySwiper"
			navigation>
			<swiper-slide v-for="item in props.contentList" class="cursor-grab">
				<div class="relative">
					<img
						class="w-full h-[400px] object-cover"
						alt="ContentBack"
						src="../../../assets/img/home/sliderSection/content_background.svg" />
					<div class="w-full absolute top-[90px] left-0 p-20 flex justify-between items-center gap-5">
						<p v-html="item.content" class="text-body18 italic font-body font-semibold"></p>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation, EffectFade} from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation, EffectFade];

interface Props {
	contentList: any;
}

const props = withDefaults(defineProps<Props>(), {
	contentList: [],
});
</script>

<style lang="scss" scoped>
.mySwiper {
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
	padding: 0 50px 70px 50px;
}
</style>
