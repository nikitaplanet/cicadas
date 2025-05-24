<template>
	<swiper
		:autoplay="{
			delay: 10000,
			disableOnInteraction: false,
		}"
		:modules="modules"
		:pagination="{
			clickable: true,
		}"
		:slidesPerView="1"
		:spaceBetween="50"
		class="mySwiper"
		navigation>
		<swiper-slide v-for="item in contentList" class="cursor-grab">
			<div class="relative">
				<img class="w-full" alt="ContentBack" src="@/assets/img/home/sliderSection/content_background.svg" />
				<div class="w-full absolute top-[90px] left-0 p-12 flex justify-between items-center gap-5">
					<div class="flex flex-col gap-2 justify-center items-center pr-14">
						<div class="text-h5 font-h5 font-semibold italic">{{ item.title }}</div>
						<img :alt="item.title" :src="item.logoSrc" class="w-12" />
					</div>
					<p v-html="item.content" class="text-body18 italic font-body font-semibold"></p>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import {reactive} from 'vue';
import {contentText} from '@assets/wording/home/text.ts';
const modules = [Autoplay, Pagination, Navigation];

const contentList = reactive([...contentText.sliderSection.contentList]);
</script>

<style lang="scss" scoped>
.mySwiper {
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
	padding: 0 50px 70px 50px;
}
</style>
