<template>
	<SectionContainer>
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full flex flex-col md:gap-5 xl:gap-10 lg:grid lg:grid-cols-12 pt-[60px] lg:pt-[150px] xl:pt-[200px] transition-all duration-700">
			<div class="px-0 col-span-6 xl:col-span-5 xl:px-12 flex flex-col justify-center">
				<SectionTitle>
					<span v-html="contentText.section1.title"></span>
				</SectionTitle>
				<SectionDescription class="mt-5 lg:mt-10">
					<span v-html="contentText.section1.description"></span>
				</SectionDescription>
			</div>
			<div class="mt-[60px] lg:mt-0 col-span-6 xl:col-span-7">
				<NVideo isAutoPlay isShowLinkOutside videoUrl="https://player.vimeo.com/video/1059379503" />
			</div>
		</div>
	</SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionTitle from '@/components/atoms/text/SectionTitle.vue';
import SectionDescription from '@/components/atoms/text/SectionDescription.vue';
import {contentText} from '@/assets/wording/home/text';
import NVideo from '~/components/atoms/videoSec/NVideo.vue';
</script>

<style lang="scss" scoped></style>
