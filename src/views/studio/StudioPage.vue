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

		<template v-for="item in studioInfo" :key="item.title">
			<StudioSection :align="item.align" :description="item.description" :id="item.id" :img="[]" :title="item.title" />
		</template>

		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';
import NavBar from '@components/organisms/navbar/NavBar.vue';
import NFooter from '@components/organisms/footer/NFooter.vue';
import LandingSection from '@/views/studio/components/LandingSection.vue';
import {studioWording} from '@assets/wording/studio/text.ts';
import StudioSection from '@/views/studio/components/StudioSection.vue';

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

// Content
const studioInfo = ref(studioWording.studioInfo);
</script>

<style lang="scss" scoped></style>
