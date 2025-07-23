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
import {seoWording} from '@/assets/wording/seoWording';
import seoBanner from '@/assets/img/seo/cicadas_banner.png';

useSeoMeta({
	title: () => seoWording.workshops.title,
	description: () => seoWording.workshops.description,
	ogTitle: () => seoWording.workshops.metaTitle,
	ogDescription: () => seoWording.workshops.metaDescription,
	ogImage: () => seoBanner || '',
	ogUrl: () => `${seoWording.domain}/workshops`,
	ogType: 'website',
	ogSiteName: seoWording.siteName,
	twitterCard: 'summary_large_image',
	twitterTitle: () => seoWording.workshops.metaTitle,
	twitterDescription: () => seoWording.workshops.description,
	twitterImage: () => seoBanner || '',
});
</script>

<style lang="scss" scoped></style>
