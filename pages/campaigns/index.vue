<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<template v-for="(item, index) in campaigns" :key="item.title">
			<div v-if="index !== 0" class="scroll-fade">
				<CampaignSection
					@click="handleClickCampaign(item.id)"
					:id="item.id"
					:img="item.img"
					:isOngoing="item.isOngoing"
					:issues="item.issues"
					:region="item.region"
					:services="item.services"
					:title="item.title"
					:year="item.year"
					class="cursor-pointer" />
				<img v-if="index !== campaigns.length - 1" class="w-full px-8" alt="line" src="@/assets/img/campaigns/listLine.svg" />
			</div>

			<template v-else>
				<CampaignSection
					@click="handleClickCampaign(item.id)"
					:id="item.id"
					:img="item.img"
					:isOngoing="item.isOngoing"
					:issues="item.issues"
					:region="item.region"
					:services="item.services"
					:title="item.title"
					:year="item.year"
					class="cursor-pointer" />
				<img v-if="index !== campaigns.length - 1" class="w-full px-8" alt="line" src="@/assets/img/campaigns/listLine.svg" />
			</template>
		</template>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import LandingSection from '@/components/pages/campaigns/LandingSection.vue';
import CampaignSection from '@/components/pages/campaigns/CampaignSection.vue';
import {campaignsWording} from '@/assets/wording/campaigns/text';
import {seoWording} from '~/server/content/seoWording';
import seoBanner from 'assets/img/seo/cicadas_banner.png';

definePageMeta({
	title: seoWording.campaignList.title,
	keepalive: true,
});

useHead({
	link: [{rel: 'canonical', href: `https://singingcicadas.com/campaigns`}],
});

useSeoMeta({
	title: () => seoWording.campaignList.title,
	description: () => seoWording.campaignList.description,
	ogTitle: () => seoWording.campaignList.metaTitle,
	ogDescription: () => seoWording.campaignList.metaDescription,
	ogImage: () => seoBanner || '',
	ogUrl: () => `https://singingcicadas.com/campaigns`,
	ogType: 'website',
	ogSiteName: seoWording.siteName,
	twitterCard: 'summary_large_image',
	twitterTitle: () => seoWording.campaignList.metaTitle,
	twitterDescription: () => seoWording.campaignList.description,
	twitterImage: () => seoBanner || '',
});

const router = useRouter();

// Content
const campaigns = ref(campaignsWording.campaigns);

const handleClickCampaign = (id: number) => {
	router.push(`/campaigns/${id}`);
};

import {useScrollAnime} from '~/composable/useScrollAnime';
const {fadeInOnScroll} = useScrollAnime();
onMounted(() => {
	fadeInOnScroll('.scroll-fade', {
		duration: 1000,
		delay: (el, i) => i * 200, // 錯開動畫
	});
});
</script>

<style lang="scss" scoped>
.campaign-item {
	opacity: 0;
	will-change: opacity, transform;
}
</style>
