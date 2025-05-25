<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import NFooter from '@components/organisms/footer/NFooter.vue';
import LandingSection from '@/views/campaigns/components/detail/LandingSection.vue';
</script>

<style lang="scss" scoped></style>
