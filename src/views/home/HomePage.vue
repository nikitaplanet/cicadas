<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />
		<!-- NavBar：根據滾動切換位置 -->
		<div
			id="homeNav"
			class="py-6"
			:class="[
				'transition-all duration-300',
				isScrolledPastLanding ? 'fixed top-0 left-0 w-full z-20' : 'absolute bottom-0 left-0 w-full z-20',
			]">
			<NavBar />
		</div>
		<Section1 />
		<Section2 />
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';
import NavBar from '@components/organisms/navbar/NavBar.vue';
import LandingSection from '@/views/home/components/LandingSection.vue';
import Section1 from '@/views/home/components/Section1.vue';
import Section2 from '@/views/home/components/Section2.vue';

// 是否已經滑超過 LandingSection
const isScrolledPastLanding = ref(false);

// 監聽 scroll
const handleScroll = () => {
	// 判斷是否超過 100vh
	isScrolledPastLanding.value = window.scrollY > window.innerHeight;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped></style>
