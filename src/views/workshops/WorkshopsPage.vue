<template>
	<div class="w-full min-h-screen bg-surface-def">
		<!-- NavBar：根據滾動切換位置 -->
		<div
			ref="nav"
			id="homeNav"
			class="py-5"
			:class="[
				'transition-all duration-300',
				isScrolledPastLanding ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute top-0 left-0 w-full z-20',
			]">
			<NavBar />
		</div>

		<LandingSection />

		<LogoSection />

		<SwiperImages :img="imgs"/>

		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted, reactive} from 'vue';
import NavBar from '@components/organisms/navbar/NavBar.vue';
import NFooter from '@components/organisms/footer/NFooter.vue';
import LandingSection from '@/views/workshops/components/LandingSection.vue';
import LogoSection from '@/views/workshops/components/LogoSection.vue';
import SwiperImages from '@components/atoms/swiper/SwiperImages.vue';
import {SwiperImage} from '@components/atoms/swiper';

// imgs
import Photo1 from '@/assets/img/workshops/swiperPhotos/1.jpg';
import Photo2 from '@/assets/img/workshops/swiperPhotos/2.jpg';
import Photo3 from '@/assets/img/workshops/swiperPhotos/3.jpg';
import Photo4 from '@/assets/img/workshops/swiperPhotos/4.jpg';

// 是否已經滑超過 LandingSection
const isScrolledPastLanding = ref(false);

// 監聽 scroll
const handleScroll = () => {
	// 判斷是否超過 100vh
	isScrolledPastLanding.value = window.scrollY > window.innerHeight - 100;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

// imgs
const imgs = reactive<SwiperImage[]>([
	{
		key: "1",
		src: Photo1,
	},
	{
		key: "2",
		src: Photo2,
	},
	{
		key: "3",
		src: Photo3,
	},
	{
		key: "4",
		src: Photo4,
	}
]);
</script>

<style lang="scss" scoped></style>
