<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection :description="studioWording.landing.description" :title="studioWording.landing.headerTitle" />

		<div
			v-for="(item, index) in studioInfo"
			:key="item.title"
			class="md:pb-5"
			:class="{'pb-[120px]': index !== studioInfo.length - 1, 'pb-[80px]': index === studioInfo.length - 1}">
			<StudioSection
				v-if="index === 0"
				:align="item.align"
				:amount="item.detail.list.length"
				:detailList="item.detail.list"
				:id="item.id"
				:img="item.img"
				:swiperClass="item.swiperClass"
				:title="item.listTitle" />
			<div
				v-if="index !== 0"
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="flex flex-col transition-all duration-700">
				<StudioSection
					:align="item.align"
					:amount="item.detail.list.length"
					:detailList="item.detail.list"
					:id="item.id"
					:img="item.img"
					:swiperClass="item.swiperClass"
					:title="item.listTitle" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import LandingSection from '@/components/pages/studio/LandingSection.vue';
import {studioWording} from '@/assets/wording/studio/text';
import StudioSection from '@/components/pages/studio/StudioSection.vue';
import {seoWording} from 'assets/wording/seoWording';
import seoBanner from 'assets/img/seo/cicadas_banner.png';

// Content
const studioInfo = ref(studioWording.studioInfo);

definePageMeta({
	title: 'Studio',
	keepalive: true,
});

useSeoMeta({
	title: () => seoWording.studioList.title,
	description: () => seoWording.studioList.description,
	ogTitle: () => seoWording.studioList.metaTitle,
	ogDescription: () => seoWording.studioList.metaDescription,
	ogImage: () => seoBanner || '',
	ogUrl: () => seoWording.domain,
	ogType: 'website',
	ogSiteName: seoWording.siteName,
	twitterCard: 'summary_large_image',
	twitterTitle: () => seoWording.studioList.metaTitle,
	twitterDescription: () => seoWording.studioList.description,
	twitterImage: () => seoBanner || '',
});
</script>

<style lang="scss" scoped></style>
