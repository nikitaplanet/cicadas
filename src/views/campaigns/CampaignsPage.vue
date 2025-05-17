<template>
	<div class="w-full min-h-screen bg-surface-def">
		<!-- NavBar：根據滾動切換位置 -->
		<div
			ref="nav"
			id="homeNav"
			class="py-5"
			:class="[
				'transition-all duration-300',
				isScrolledPastLanding ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute top-0 left-0 w-full z-20',
			]">
			<NavBar />
		</div>

		<LandingSection />

		<template v-for="(item, index) in campaigns" :key="item.title">
			<CampaignSection
				:id="item.id"
				:img="item.img"
				:issues="item.issues"
				:region="item.region"
				:services="item.services"
				:title="item.title"
				:year="item.year" />
			<img v-if="index !== campaigns.length - 1" class="w-full px-8" alt="line" src="@/assets/img/campaigns/listLine.svg" />
		</template>

		<!--Loadmore-->
		<div class="w-full flex justify-center items-center">
			<img alt="LoadMore" src="@/assets/img/campaigns/loadMore.svg" />
		</div>

		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';
import NavBar from '@components/organisms/navbar/NavBar.vue';
import NFooter from '@components/organisms/footer/NFooter.vue';
import LandingSection from '@/views/campaigns/components/LandingSection.vue';
import CampaignSection from '@/views/campaigns/components/CampaignSection.vue';
import {campaignsWording} from '@assets/wording/campaigns/text.ts';

// 是否已經滑超過 LandingSection
const isScrolledPastLanding = ref(false);

// 監聽 scroll
const handleScroll = () => {
	// 判斷是否超過 100vh
	isScrolledPastLanding.value = window.scrollY > window.innerHeight - 100;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

// Content
const campaigns = ref(campaignsWording.campaigns);
</script>

<style lang="scss" scoped>
.about-bg {
	background: linear-gradient(
		180deg,
		var(--Surface-supportive-violet-dark, #d6b9e0) 0%,
		var(--Surface-supportive-violet-mid, #e9c9f4) 50.33%,
		var(--Surface-def, #fceee9) 100%
	);
}

.section {
	&-gradient1,
	&-gradient2,
	&-gradient3,
	&-gradient4 {
		width: 100%;
		height: 120px;
	}

	&-gradient1 {
		background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient2 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-supportive-violet-mid, #e9c9f4) 100%);
	}

	&-gradient3 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-mid, #e9c9f4) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient4 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-def, #fceee9) 100%);
	}
}
</style>
