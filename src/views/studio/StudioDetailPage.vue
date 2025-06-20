<template>
	<div v-if="!detailData" class="w-full h-screen text-center pt-32 pb-32 flex justify-center items-center px-6 text-sm text-link-primary md:px-10">
		無此頁資訊<NLink class="ml-3" hasUnderline to="/studio">返回列表</NLink>
	</div>
	<template v-else>
		<!--Header-->
		<LandingSection :description="detailData.detail.description" :title="detailData.title" />
		<div class="w-full pt-32 px-6 md:px-10">
			<div v-for="(item, index) in detailData.detail.list" class="w-full">
				<div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div class="flex flex-col justify-start items-start">
						<div v-if="item.isOnGoing" class="flex justify-start items-center mb-3">
							<img alt="" src="@/assets/img/icons/sliderDots/dot_active.svg" />
							<span class="ml-2 text-text-primary font-label text-scaleDef italic font-semibold">Ongoing</span>
						</div>
						<h2 v-html="item.title" class="italic font-semibold text-h2 font-h2"></h2>
					</div>
					<div>
						<p v-html="item.content" class="text-body font-body font-medium"></p>
						<div class="w-full mt-10">
							<img v-if="item.media.type === MEDIA_TYPE.VIMEO" alt="None" src="@/assets/img/studio/detail/none.png" />
							<img v-else :alt="item.title" :src="item.media.src" />
						</div>
					</div>
				</div>
				<img v-if="index !== detailData.detail.list.length - 1" class="w-full py-20" alt="line" src="@/assets/img/campaigns/listLine.svg" />
			</div>
		</div>
	</template>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import {studioWording} from '@assets/wording/studio/text.ts';
import NLink from '@components/atoms/link/NLink.vue';
import LandingSection from '@/views/studio/components/LandingSection.vue';
import {MEDIA_TYPE} from '@assets/js/enum/media.ts';
const route = useRoute();

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

const data = studioWording.studioInfo.find((item: StudioData) => item.id === route.params.id);
const detailData = ref(data);
</script>

<style lang="scss" scoped></style>
