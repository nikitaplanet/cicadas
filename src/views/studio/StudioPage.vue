<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<template v-for="item in studioInfo" :key="item.title">
			<StudioSection :align="item.align" :id="item.id" :img="item.img" :swiperClass="item.swiperClass" :title="item.title" />
		</template>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import LandingSection from '@/views/studio/components/LandingSection.vue';
import {studioWording} from '@assets/wording/studio/text.ts';
import StudioSection from '@/views/studio/components/StudioSection.vue';

// Content
const studioInfo = ref(studioWording.studioInfo);
</script>

<style lang="scss" scoped></style>
