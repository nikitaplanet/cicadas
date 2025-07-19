<template>
	<div v-if="studioData" class="w-full grid grid-cols-1 gap-5 lg:grid-cols-2 md:gap-12">
		<div class="flex flex-col justify-start items-start">
			<div v-if="studioData.isOnGoing" class="flex justify-start items-center mb-3">
				<img alt="" src="@/assets/img/icons/sliderDots/dot_active.svg" />
				<span class="ml-2 text-text-primary font-label text-scaleDef italic font-semibold"> Ongoing </span>
			</div>
			<h2 v-html="studioData.title" class="italic font-semibold font-h2 text-scaleXL md:text-h2"></h2>
		</div>

		<div>
			<p v-html="studioData.content" class="text-scaleSM font-body font-medium md:text-scaleMD"></p>
			<div class="w-full mt-10">
				<NVideo v-if="studioData.media?.type === MEDIA_TYPE.VIMEO" :videoUrl="studioData.media?.src" isShowControls />
				<img v-else :alt="studioData.title" :src="studioData.media.src" />
			</div>
		</div>
	</div>

	<img v-if="isShowLine" class="w-full py-10 lg:py-20" alt="line" src="@/assets/img/campaigns/listLine.svg" />
</template>

<script lang="ts" setup>
import {MEDIA_TYPE} from 'assets/js/enum/media';
import NVideo from '~/components/atoms/videoSec/NVideo.vue';

interface Props {
	studioData: object | null;
	isShowLine: boolean;
}

withDefaults(defineProps<Props>(), {
	studioData: () => null,
	isShowLine: true,
});
</script>

<style lang="scss" scoped></style>
