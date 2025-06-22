<template>
	<div class="w-full pt-16 pb-24 md:py-24">
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
			class="px-4 pb-10 md:px-12 md:pb-16"
			navigation>
			<swiper-slide v-for="item in props.contentList" class="cursor-grab">
				<!--				<div-->
				<!--					class="w-[90%] m-auto px-10 pt-20 pb-10 md:px-20 bg-cover bg-center bg-[url(src/assets/img/home/sliderSection/content_background.svg)]">-->
				<!--					<p v-html="item.content" class="text-body md:text-body18 italic font-body font-semibold"></p>-->
				<!--				</div>-->
				<div class="relative w-[90%] md:max-w-[800px] m-auto">
					<img
						class="w-full h-[380px] md:h-[400px] object-cover"
						alt="ContentBack"
						src="../../../assets/img/home/sliderSection/content_background.svg" />
					<div class="w-full absolute top-[90px] md:top-[90px] left-0 p-4 md:p-20 flex justify-between items-center gap-5">
						<p v-html="item.content" class="text-body text-center md:text-left md:text-body18 italic font-body font-semibold"></p>
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
}
</style>
