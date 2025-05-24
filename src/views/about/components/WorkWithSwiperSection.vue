<template>
	<div class="workWith-bg pt-32 pb-36">
		<div class="w-full flex flex-col justify-center items-center">
			<div class="w-full px-8">
				<SectionNameTag>{{ aboutWording.workWith.title }}</SectionNameTag>
			</div>
			<div class="w-full flex flex-row justify-center items-center gap-10 mt-28">
				<swiper
					:autoplay="{
						delay: 3000,
						disableOnInteraction: false,
					}"
					:breakpoints="breakPoints"
					:modules="modules"
					:mousewheel="true"
					:slidesOffsetAfter="20"
					:slidesOffsetBefore="20"
					:slidesPerView="3.5"
					:spaceBetween="20"
					class="mySwiper">
					<swiper-slide v-for="item in staffs">
						<img :alt="item.name" :src="item.img" class="h-[150px] sm:h-[150px] md:h-[200px] lg:h-[280px] xl:h-[380px]" />
						<h4 class="mt-5 w-full font-h3 text-text-def text-h3 font-semibold italic text-center">{{ item.name }}</h4>
						<p class="mt-1 w-full text-center text-text-primary font-label text-labelSm font-semibold italic">{{ item.city }}</p>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {aboutWording} from '@assets/wording/about/text.ts';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from 'swiper/modules';
import {reactive} from 'vue';

const modules = [Autoplay];

const staffs = reactive(aboutWording.workWith.nameList);
const breakPoints = reactive({
	320: {
		slidesPerView: 2.5,
	},
	640: {
		slidesPerView: 3.5,
	},
	1024: {
		slidesPerView: 3.5,
	},
	1280: {
		slidesPerView: 3.5,
	},
	1920: {
		slidesPerView: 4.5,
	},
});
</script>

<style lang="scss" scoped>
.workWith-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}

.swiper {
	width: 100%;
	height: 100%;
	padding-bottom: 10px;
}

.swiper-slide {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	cursor: grab;
}

.swiper-slide img {
	display: block;
	margin: auto;
	object-fit: cover;
}
</style>
