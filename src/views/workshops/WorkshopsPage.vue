<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<LogoSection />

		<WorkshopsSwiper />

		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import NFooter from '@components/organisms/footer/NFooter.vue';
import LandingSection from '@/views/workshops/components/LandingSection.vue';
import LogoSection from '@/views/workshops/components/LogoSection.vue';
import WorkshopsSwiper from '@/views/workshops/components/WorkshopsSwiper.vue';
</script>

<style lang="scss" scoped></style>
