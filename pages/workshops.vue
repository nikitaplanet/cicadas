<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<LogoSection />

		<QuoteSection />

		<WorkshopsSwiper />
	</div>
</template>

<script lang="ts" setup>
import LandingSection from '@/components/pages/workshops/LandingSection.vue';
import LogoSection from '@/components/pages/workshops/LogoSection.vue';
import WorkshopsSwiper from '@/components/pages/workshops/WorkshopsSwiper.vue';
import QuoteSection from '@/components/pages/workshops/QuoteSection.vue';
</script>

<style lang="scss" scoped></style>
