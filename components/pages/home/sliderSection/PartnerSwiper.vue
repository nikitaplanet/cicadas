<template>
	<ClientOnly>
		<Swiper
			:modules="modules"
			:pagination="{
				clickable: true,
			}"
			:slidesPerView="1"
			:spaceBetween="50"
			class="w-full max-w-[1000px] mx-auto !pb-[40px] md:!pb-[70px] mySwiper"
			effect="fade"
			navigation>
			<SwiperSlide v-for="(item, index) in contentList" :key="`slide-${index}`" class="cursor-grab">
				<!--Desk-->
				<div class="w-full relative justify-center items-center hidden s_lg:flex">
					<img :alt="item.title" :src="item.slideImage" class="w-full max-w-[700px]" />
					<p class="absolute top-0 left-0 invisible">
						{{ item.content }}
					</p>
				</div>

				<!--Mobile-->
				<div class="w-full block s_lg:hidden">
					<img :alt="item.title" :src="item.slideImageMobile" class="w-full" />
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
import {reactive} from 'vue';
import {contentText} from '@/assets/wording/home/text';

const modules = [Autoplay, Pagination, Navigation, EffectFade];

const contentList = reactive([...contentText.sliderSection.contentList]);
</script>

<style lang="scss" scoped>
.mySwiper {
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
}
</style>
