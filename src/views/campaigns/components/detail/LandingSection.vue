<template>
	<div class="w-full min-h-screen landing-bg pt-28">
		<h1 v-html="data.title" class="w-full text-center text-h1 font-h1 italic font-semibold"></h1>
	</div>
</template>

<script lang="ts" setup>
import router from '@/router';
import {campaignsWording} from '@assets/wording/campaigns/text.js';
import {reactive} from 'vue';
import {CampaignDetail} from '@/views/campaigns';
const id = Number(router.currentRoute.value.params.id);

const defaultData = reactive<CampaignDetail>({
	title: '',
	bannerSrc: '',
	year: '',
	region: '',
	issues: '',
	services: '',
	detail: '',
	images: [],
});

const data = reactive<CampaignDetail>(campaignsWording.campaignDetail.find((item) => item.id === id) || defaultData);
</script>

<style lang="scss" scoped>
.landing-bg {
	background: linear-gradient(180deg, var(--sc-color-surface-supportive-green-mid, #bbe5b8) 0%, var(--sc-color-surface-def, #fceee9) 34.62%);
}
</style>
