<template>
	<div v-if="!detailData" class="w-full h-screen text-center pt-32 pb-32 flex justify-center items-center px-6 text-sm text-link-primary md:px-10">
		無此頁資訊
		<NLink class="ml-3" hasUnderline to="/studio">返回列表</NLink>
	</div>

	<template v-else>
		<!--Header-->
		<LandingSection :description="detailData.detail.description" :title="detailData.title" />

		<div class="w-full pt-0 px-6 md:px-10">
			<template v-for="(item, index) in detailData.detail.list">
				<div
					v-if="index !== 0"
					v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
					:key="item.id"
					class="w-full transition-all duration-700">
					<StudioDetailListCard :isShowLine="index !== detailData.detail.list.length - 1" :studioData="item" />
				</div>

				<div v-else class="w-full">
					<StudioDetailListCard :isShowLine="index !== detailData.detail.list.length - 1" :studioData="item" />
				</div>
			</template>
		</div>
	</template>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router';

import {studioWording} from '@/assets/wording/studio/text';
import LandingSection from '@/components/pages/studio/LandingSection.vue';
import NLink from '@/components/atoms/link/NLink.vue';
import {seoWording} from 'assets/wording/seoWording';
import StudioDetailListCard from '~/components/pages/studio/detail/StudioDetailListCard.vue';

interface StudioDetailListItem {
	id: string;
	title: string;
	content: string;
	media: any;
	isOnGoing: boolean;
}

interface StudioDetail {
	description: string;
	list: Array<StudioDetailListItem>;
}

interface StudioData {
	id: string;
	title: string;
	img: string;
	align: string;
	swiperClass: string;
	detail: StudioDetail;
}

const route = useRoute();
const data = studioWording.studioInfo.find((item: StudioData) => item.id === String(route.params.id));
const detailData = ref(data);

console.log(detailData);

useSeoMeta({
	title: () => `${detailData?.value.title || 'Studio'} | Cicadas`,
	ogTitle: () => `${detailData?.value.title || 'Studio'} | Cicadas`,
	description: () => detailData?.value.detail.description || '',
	ogDescription: () => detailData?.value.detail.description || '',
	ogImage: () => data?.img || '',
	ogUrl: () => `${seoWording.domain}/studio/${detailData?.value.id}`,
	ogType: 'article',
	ogSiteName: 'Cicadas',
	twitterCard: 'summary_large_image',
	twitterTitle: () => `${detailData?.value.title || 'Campaign'} | Cicadas`,
	twitterDescription: () => detailData?.value.detail.description || '',
	twitterImage: () => data?.img || '',
});
</script>

<style lang="scss" scoped></style>
