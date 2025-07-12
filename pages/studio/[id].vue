<template>
	<div v-if="!detailData" class="w-full h-screen text-center pt-32 pb-32 flex justify-center items-center px-6 text-sm text-link-primary md:px-10">
		無此頁資訊
		<NLink class="ml-3" hasUnderline to="/studio">返回列表</NLink>
	</div>

	<template v-else>
		<!--Header-->
		<LandingSection :description="detailData.detail.description" :title="detailData.title" />

		<div class="w-full pt-32 px-6 md:px-10">
			<div
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				v-for="(item, index) in detailData.detail.list"
				:key="item.id"
				class="w-full transition-all duration-700">
				<div class="w-full grid grid-cols-1 gap-5 lg:grid-cols-2 md:gap-12">
					<div class="flex flex-col justify-start items-start">
						<div v-if="item.isOnGoing" class="flex justify-start items-center mb-3">
							<img alt="" src="@/assets/img/icons/sliderDots/dot_active.svg" />
							<span class="ml-2 text-text-primary font-label text-scaleDef italic font-semibold"> Ongoing </span>
						</div>
						<h2 v-html="item.title" class="italic font-semibold font-h2 text-scaleXL md:text-h2"></h2>
					</div>

					<div>
						<p v-html="item.content" class="text-scaleSM font-body font-medium md:text-scaleMD"></p>
						<div class="w-full mt-10">
							<NVideo v-if="item.media.type === MEDIA_TYPE.VIMEO" :videoUrl="item.media.src" />
							<img v-else :alt="item.title" :src="item.media.src" />
						</div>
					</div>
				</div>

				<img
					v-if="index !== detailData.detail.list.length - 1"
					class="w-full py-10 lg:py-20"
					alt="line"
					src="@/assets/img/campaigns/listLine.svg" />
			</div>
		</div>
	</template>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router';

import {studioWording} from '@/assets/wording/studio/text';
import LandingSection from '@/components/pages/studio/LandingSection.vue';
import {MEDIA_TYPE} from '@/assets/js/enum/media';
import NLink from '@/components/atoms/link/NLink.vue';
import NVideo from '~/components/atoms/videoSec/NVideo.vue';

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
</script>

<style lang="scss" scoped></style>
