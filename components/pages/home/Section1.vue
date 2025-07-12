<template>
	<SectionContainer>
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full flex flex-col md:gap-5 xl:gap-10 lg:grid lg:grid-cols-12 pt-[100px] lg:pt-[150px] xl:pt-[200px] transition-all duration-700">
			<div class="px-6 col-span-6 xl:col-span-5 xl:px-12 flex flex-col justify-center">
				<SectionTitle>
					<span v-html="contentText.section1.title"></span>
				</SectionTitle>
				<SectionDescription class="mt-5 lg:mt-10">
					<span v-html="contentText.section1.description"></span>
				</SectionDescription>
			</div>
			<div class="mt-[60px] lg:mt-0 col-span-6 xl:col-span-7">
				<ShimmerLoad v-show="!isLoaded" className="w-full aspect-video" />
				<Transition name="fade" mode="out-in">
					<div style="padding: 56.25% 0 0 0; position: relative" v-show="isLoaded">
						<iframe
							@load="onIframeLoad"
							:src="iframeSrc"
							class="absolute top-0 left-0 w-full h-full"
							allow="autoplay; fullscreen; picture-in-picture"
							frameborder="0"
							title="Singing Cicadas Showreel">
						</iframe>
						<button type="button" class="absolute top-0 left-0 w-full h-full" @click="handleClickVideo"></button>
					</div>
				</Transition>
			</div>
		</div>
	</SectionContainer>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionTitle from '@/components/atoms/text/SectionTitle.vue';
import SectionDescription from '@/components/atoms/text/SectionDescription.vue';
import {contentText} from '@/assets/wording/home/text';
import ShimmerLoad from '~/components/atoms/loading/ShimmerLoad.vue';

const isLoaded = ref(false);
const iframeSrc = 'https://player.vimeo.com/video/1059379503?autoplay=1&muted=1&title=0&byline=0&portrait=0&controls=0&background=1';

function onIframeLoad() {
	setTimeout(() => {
		isLoaded.value = true;
	}, 1000);

}

function handleClickVideo() {
	window.open('https://player.vimeo.com/video/1059379503?autoplay=1');
}


</script>

<style lang="scss" scoped></style>
