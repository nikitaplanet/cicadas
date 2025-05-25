<template>
	<div class="w-full min-h-screen bg-surface-def">
		<LandingSection />

		<template v-for="(item, index) in campaigns" :key="item.title">
			<CampaignSection
				@click="handleClickCampaign(item.id)"
				:id="item.id"
				:img="item.img"
				:issues="item.issues"
				:region="item.region"
				:services="item.services"
				:title="item.title"
				:year="item.year"
				class="cursor-pointer" />
			<img v-if="index !== campaigns.length - 1" class="w-full px-8" alt="line" src="@/assets/img/campaigns/listLine.svg" />
		</template>

		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import NFooter from '@components/organisms/footer/NFooter.vue';
import LandingSection from '@/views/campaigns/components/LandingSection.vue';
import CampaignSection from '@/views/campaigns/components/CampaignSection.vue';
import {campaignsWording} from '@assets/wording/campaigns/text.ts';
import router from '@/router';
import {ROUTER_NAME} from '@assets/js/enum/routerEnum.ts';
// Content
const campaigns = ref(campaignsWording.campaigns);

const handleClickCampaign = (id: number) => {
	router.push({name: ROUTER_NAME.CAMPAIGN_DETAIL, params: {id}});
};
</script>

<style lang="scss" scoped></style>
