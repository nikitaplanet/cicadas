<template>
	<div class="w-full min-h-screen bg-surface-def">
		<!-- NavBar：根據滾動切換位置 -->
		<div
			ref="nav"
			id="homeNav"
			class="py-5 transition-all duration-300 transform"
			:class="[
				isScrolledPastLanding ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute top-0 left-0 w-full z-20',
				showNavBar ? 'translate-y-0' : '-translate-y-full',
			]">
			<NavBar />
		</div>

		<LandingSection />

		<template v-for="item in studioInfo" :key="item.title">
			<StudioSection
				:align="item.align"
				:description="item.description"
				:id="item.id"
				:img="item.img"
				:swiperClass="item.swiperClass"
				:title="item.title" />
		</template>

		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import NavBar from '@components/organisms/navbar/NavBar.vue';
import NFooter from '@components/organisms/footer/NFooter.vue';
import LandingSection from '@/views/studio/components/LandingSection.vue';
import {studioWording} from '@assets/wording/studio/text.ts';
import StudioSection from '@/views/studio/components/StudioSection.vue';
import {useScrollDirectionNav} from '@/hooks/useNavBar.ts';
const {isScrolledPastLanding, showNavBar} = useScrollDirectionNav();

// Content
const studioInfo = ref(studioWording.studioInfo);
</script>

<style lang="scss" scoped></style>
