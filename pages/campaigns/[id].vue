<template>
	<div class="w-full min-h-screen landing-bg pt-20 lg:pt-28">
		<template v-if="data.id !== 0">
			<h1
				v-html="data.detailTitle"
				class="w-full px-8 text-center text-scale2XL lg:text-h1 font-h1 italic font-semibold"
			></h1>

			<!-- banner -->
			<div
				v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout', once: true }"
				class="w-[90%] max-w-[1045px] mx-auto my-10 lg:my-[60px] flex justify-center transition-all duration-700"
			>
				<img :alt="data.detailTitle" :src="data.img" class="w-full" />
			</div>

			<!-- line -->
			<img
				class="w-[95%] mx-auto"
				alt="line"
				src="@/assets/img/campaigns/detail/bannerLine.svg"
			/>

			<!-- infoList -->
			<div
				class="w-[90%] mx-auto mt-[40px] lg:mt-[60px] flex flex-col gap-[40px] lg:gap-0 lg:grid lg:grid-cols-12"
			>
				<div
					v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout', once: true }"
					class="lg:col-span-3 flex flex-col gap-[13px] transition-all duration-700"
				>
					<div
						v-for="item in infoList"
						:key="item.name"
						class="grid grid-cols-[70px_1fr] items-start"
					>
						<div class="text-left font-semibold font-label text-scale3XS italic">
							{{ item.name }}
						</div>
						<div class="text-scale2XS font-body text-text-def font-medium">
							{{ item.value }}
						</div>
					</div>
				</div>

				<div class="hidden lg:block lg:col-span-1"></div>

				<div class="lg:col-span-8 flex flex-col gap-10 lg:gap-[60px]">
					<div
						v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout', once: true }"
						v-for="(item, index) in data.details?.contentList"
						:key="index"
						class="transition-all duration-700"
					>
						<div
							class="font-label text-body lg:text-scaleDef italic font-semibold text-text-def"
						>
							{{ item.title }}
						</div>

						<div
							v-if="item.textType === TEXT_TYPE.PARAGRAPH"
							v-html="item.content"
							class="font-body text-body lg:text-scaleDef font-medium mt-[10px]"
						></div>

						<div
							v-if="item.textType === TEXT_TYPE.TEXT_LIST"
							class="font-body text-body lg:text-scaleDef font-medium mt-[10px]"
						>
							<ul class="flex flex-col list-[square] list-inside pl-3">
								<li
									v-for="(text, i) in item.list"
									:key="i"
									v-html="text"
								></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- Media -->
			<div class="w-full mt-20 flex flex-col gap-12 lg:gap-16">
				<div
					v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout', once: true }"
					v-for="(item, i) in data.details?.media"
					:key="i"
					class="w-full transition-all duration-700"
				>
					<!-- 2-col -->
					<div
						v-if="item.mediaDisplayType === MEDIA_DISPLAY_TYPE.COL"
						class="w-[90%] mx-auto grid grid-cols-[4fr_8fr] gap-x-5 items-stretch"
					>
						<img
							v-for="(image, subIndex) in item.mediaList"
							:alt="`${subIndex}_image`"
							:key="image.key"
							:src="image.src"
							class="h-full object-cover w-full"
						/>
					</div>

					<!-- swiper -->
					<NImageSwiper
						v-if="item.mediaDisplayType === MEDIA_DISPLAY_TYPE.SWIPER"
						:mediaList="item.mediaList"
					/>
				</div>
			</div>
		</template>

		<div
			v-else
			class="w-[90%] mx-auto font-body text-body divide-text-ui-error font-medium"
		>
			Wrong page, please go back to campaign list page.
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, reactive } from 'vue'
import { campaignsWording } from '@/assets/wording/campaigns/text'
import { TEXT_TYPE } from '@/assets/js/enum/textType'
import { MEDIA_DISPLAY_TYPE } from '@/assets/js/enum/media'
import NImageSwiper from '@/components/atoms/swiper/NImageSwiper.vue'
import type { CampaignItem } from '@/assets/js/enum/campaigns'

// 取得 route param
const route = useRoute()
const id = Number(route.params.id)

// 預設空資料
const defaultData: CampaignItem = {
	id: 0,
	isOngoing: false,
	title: '',
	detailTitle: '',
	img: '',
	year: '',
	region: '',
	issues: '',
	services: '',
	details: null,
}

// 找資料
const data = reactive<CampaignItem>(
	campaignsWording.campaigns.find((item) => item.id === id) || defaultData
)

// 推導 info list
const infoList = computed(() => {
	if (data.id === 0) return []
	return [
		{ name: 'Year', value: data.year },
		{ name: 'Region', value: data.region },
		{ name: 'Issues', value: data.issues },
		{ name: 'Services', value: data.services },
	]
})
</script>

<style scoped lang="scss">
.landing-bg {
	background: linear-gradient(
			180deg,
			var(--sc-color-surface-supportive-green-mid, #bbe5b8) 0%,
			var(--sc-color-surface-def, #fceee9) 34.62%
	);
}
</style>
