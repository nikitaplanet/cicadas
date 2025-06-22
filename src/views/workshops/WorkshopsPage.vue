<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<LogoSection />

		<QuoteSwiper :contentList="workshopsWording.quoteList" />

		<WorkshopsSwiper />
	</div>
</template>

<script lang="ts" setup>
import LandingSection from '@/views/workshops/components/LandingSection.vue';
import LogoSection from '@/views/workshops/components/LogoSection.vue';
import WorkshopsSwiper from '@/views/workshops/components/WorkshopsSwiper.vue';
import QuoteSwiper from '@/views/workshops/components/QuoteSwiper.vue';
import {workshopsWording} from '@assets/wording/workshops/text.ts';
</script>

<style lang="scss" scoped></style>
