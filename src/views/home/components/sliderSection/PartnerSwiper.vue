<template>
	<swiper
		:effect="'fade'"
		:modules="modules"
		:pagination="{
			clickable: true,
		}"
		:slidesPerView="1"
		:spaceBetween="50"
		class="w-full max-w-[1000px] mx-auto mySwiper"
		navigation>
		<swiper-slide v-for="(item, index) in contentList" :key="`slide-${index}`" class="cursor-grab">
			<!--Desk-->
			<div class="w-full relative justify-center items-center hidden s_lg:flex">
				<img :alt="item.title" :src="item.slideImage" class="w-full max-w-[700px]" />
				<p class="absolute top-0 left-0 invisible">
					{{ item.content }}
				</p>
				<!--				<img class="hidden lg:block w-full h-[520px] object-fill" alt="bg" src="@/assets/img/home/sliderSection/content_background.svg" />-->
				<!--				<img class="block lg:hidden w-full object-fill" alt="bg" src="@/assets/img/home/sliderSection/content_background_m.svg" />-->
				<!--				<div class="absolute top-32 left-0 md:pl-2 lg:pl-20 w-[100%] max-w-[790px] grid grid-cols-8 gap-4 min-h-[450px] pr-20">-->
				<!--					<div class="col-span-2 h-full flex flex-col gap-3 items-center justify-start mt-12">-->
				<!--						<div class="text-h5 font-h5 font-semibold italic text-center">{{ item.title }}</div>-->
				<!--						<img :alt="item.title" :src="item.logoSrc" class="w-12" />-->
				<!--					</div>-->
				<!--					<div class="col-span-6">-->
				<!--						<p v-html="item.content" class="text-body18 italic font-body font-semibold"></p>-->
				<!--					</div>-->
				<!--				</div>-->
			</div>

			<!--Mobile-->
			<div class="w-full block s_lg:hidden">
				<img :alt="item.title" :src="item.slideImageMobile" class="w-full" />
			</div>
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation, EffectFade} from 'swiper/modules';
import {reactive} from 'vue';
import {contentText} from '@assets/wording/home/text.ts';
const modules = [Autoplay, Pagination, Navigation, EffectFade];

const contentList = reactive([...contentText.sliderSection.contentList]);
</script>

<style lang="scss" scoped>
.mySwiper {
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding-bottom: 70px;
}
</style>
