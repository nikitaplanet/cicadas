<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection :description="studioWording.landing.description" :title="studioWording.landing.headerTitle" />

		<div
			v-for="(item, index) in studioInfo"
			:key="item.title"
			class="lg:pb-5"
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
			<div v-if="index !== 0" class="flex flex-col scroll-fade">
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

useHead({
	link: [{rel: 'canonical', href: `${seoWording.domain}/studio`}],
});

useSeoMeta({
	title: () => seoWording.studioList.title,
	description: () => seoWording.studioList.description,
	ogTitle: () => seoWording.studioList.metaTitle,
	ogDescription: () => seoWording.studioList.metaDescription,
	ogImage: () => seoBanner || '',
	ogUrl: () => `${seoWording.domain}/studio`,
	ogType: 'website',
	ogSiteName: seoWording.siteName,
	twitterCard: 'summary_large_image',
	twitterTitle: () => seoWording.studioList.metaTitle,
	twitterDescription: () => seoWording.studioList.description,
	twitterImage: () => seoBanner || '',
});

import {useScrollAnime} from '~/composable/useScrollAnime';
const {fadeInOnScroll} = useScrollAnime();
onMounted(() => {
	fadeInOnScroll('.scroll-fade', {
		duration: 1000,
		delay: (el, i) => i * 200, // 錯開動畫
	});
});
</script>

<style lang="scss" scoped></style>
