<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection :description="studioWording.landing.description" :title="studioWording.landing.headerTitle" />

		<div
			v-for="(item, index) in studioInfo"
			:key="item.title"
			class="md:pb-5"
			:class="{'pb-[120px]': index !== studioInfo.length - 1, 'pb-[80px]': index === studioInfo.length - 1}">
			<StudioSection :align="item.align" :id="item.id" :img="item.img" :swiperClass="item.swiperClass" :title="item.title" />
		</div>
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
