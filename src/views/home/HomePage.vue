<template>
	<div ref="main" class="w-full min-h-screen bg-surface-def">
		<!-- NavBar：根據滾動切換位置 -->
		<div
			ref="nav"
			id="homeNav"
			class="py-5"
			:class="[
				'transition-all duration-300',
				isScrolledPastLanding ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute bottom-0 left-0 w-full z-20',
			]">
			<NavBar />
		</div>

		<LandingSection ref="landing" />

		<!--Intro-->
		<Section1 />

		<!--Wording-->
		<Section2 />

		<!--BG 過場-->
		<div class="section3-gradient"></div>

		<!--Our Works-->
		<OurWorks />

		<!--BG 過場-->
		<div class="section4-gradient"></div>

		<!--About Us-->
		<AboutUs />

		<!--BG 過場-->
		<div class="section5-gradient"></div>

		<!--Hear from our partners-->
		<SliderSection />

		<!--BG 過場-->
		<div class="section6-gradient"></div>
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';

import NavBar from '@components/organisms/navbar/NavBar.vue';
import LandingSection from '@/views/home/components/LandingSection.vue';
import Section1 from '@/views/home/components/Section1.vue';
import Section2 from '@/views/home/components/Section2.vue';
import OurWorks from '@/views/home/components/OurWorks.vue';
import AboutUs from '@/views/home/components/AboutUs.vue';
import SliderSection from '@/views/home/components/SliderSection.vue';

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
	ctx.revert();
});
</script>

<style lang="scss" scoped>
.section3-gradient {
	width: 100%;
	height: 120px;
	background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-green-light, #ddf0db) 100%);
}

.section4-gradient {
	width: 100%;
	height: 120px;
	background: linear-gradient(180deg, var(--Surface-supportive-green-light, #ddf0db) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
}

.section5-gradient {
	width: 100%;
	height: 120px;
	background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-def, #fceee9) 100%);
}

.section6-gradient {
	width: 100%;
	height: 120px;
	background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-blue-light, #cce2f7) 100%);
}
</style>
