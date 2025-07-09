<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection :description="studioWording.landing.description" :title="studioWording.landing.headerTitle" />

		<template v-for="item in studioInfo" :key="item.title">
			<StudioSection :align="item.align" :id="item.id" :img="item.img" :swiperClass="item.swiperClass"
						   :title="item.title" />
		</template>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import LandingSection from '@/components/pages/studio/LandingSection.vue';
import {studioWording} from '@/assets/wording/studio/text';
import StudioSection from '@/components/pages/studio/StudioSection.vue';

// Content
const studioInfo = ref(studioWording.studioInfo);
</script>

<style lang="scss" scoped></style>
