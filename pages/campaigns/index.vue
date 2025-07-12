<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<template v-for="(item, index) in campaigns" :key="item.title">
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
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import LandingSection from '@/components/pages/campaigns/LandingSection.vue';
import CampaignSection from '@/components/pages/campaigns/CampaignSection.vue';
import {campaignsWording} from '@/assets/wording/campaigns/text';

const router = useRouter();

// Content
const campaigns = ref(campaignsWording.campaigns);

const handleClickCampaign = (id: number) => {
	router.push(`/campaigns/${id}`);
};
</script>

<style lang="scss" scoped>
.campaign-item {
	opacity: 0;
	will-change: opacity, transform;
}
</style>
