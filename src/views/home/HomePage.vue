<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection ref="landing" />

		<!--Intro-->
		<Section1 />

		<!--Wording-->
		<Section2 />

		<!--BG 過場-->
		<div class="section-gradient3"></div>

		<!--Our Works-->
		<OurWorks />

		<!--BG 過場-->
		<div class="section-gradient4"></div>

		<!--About Us-->
		<AboutUs />

		<!--BG 過場-->
		<div class="section-gradient5"></div>

		<!--Hear from our partners-->
		<SliderSection />

		<!--BG 過場-->
		<div class="section-gradient6"></div>

		<!--Issue we tackle-->
		<ServiceFeatures />

		<!--BG 過場-->
		<div class="section-gradient7"></div>

		<!--QA-->
		<Questions />
	</div>
</template>

<script lang="ts" setup>
import LandingSection from '@/views/home/components/LandingSection.vue';
import Section1 from '@/views/home/components/Section1.vue';
import Section2 from '@/views/home/components/Section2.vue';
import OurWorks from '@/views/home/components/OurWorks.vue';
import AboutUs from '@/views/home/components/AboutUs.vue';
import SliderSection from '@/views/home/components/SliderSection.vue';
import ServiceFeatures from '@/views/home/components/ServiceFeatures.vue';
import Questions from '@/views/home/components/Questions.vue';
</script>

<style lang="scss" scoped>
.section {
	&-gradient3,
	&-gradient4,
	&-gradient5,
	&-gradient6,
	&-gradient7 {
		width: 100%;
		height: 120px;
	}

	&-gradient3 {
		background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-green-light, #ddf0db) 100%);
	}

	&-gradient4 {
		background: linear-gradient(180deg, var(--Surface-supportive-green-light, #ddf0db) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient5 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-def, #fceee9) 100%);
	}

	&-gradient6 {
		background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-blue-light, #cce2f7) 100%);
	}

	&-gradient7 {
		background: linear-gradient(180deg, var(--Surface-supportive-blue-light, #cce2f7) 0%, var(--Surface-def, #fceee9) 100%);
	}
}
</style>
