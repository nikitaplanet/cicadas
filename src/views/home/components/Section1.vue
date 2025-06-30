<template>
	<SectionContainer>
		<div class="w-full grid grid-cols-12 pt-[200px]">
			<div class="col-span-6 flex flex-col justify-center pl-10">
				<SectionTitle>
					<span v-html="contentText.section1.title"></span>
				</SectionTitle>
				<SectionDescription class="mt-10">
					<span v-html="contentText.section1.description"></span>
				</SectionDescription>
			</div>
			<div class="col-span-6">
				<div style="padding: 56.25% 0 0 0; position: relative">
					<iframe
						@load="onIframeLoad"
						:src="iframeSrc"
						class="absolute top-0 left-0 w-full h-full"
						allow="autoplay; fullscreen; picture-in-picture"
						frameborder="0"
						title="Singing Cicadas Showreel">
					</iframe>
				</div>
				<div v-if="!isLoaded">Loding...</div>
			</div>
		</div>
	</SectionContainer>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionTitle from '@components/atoms/text/SectionTitle.vue';
import SectionDescription from '@components/atoms/text/SectionDescription.vue';
import {contentText} from '@assets/wording/home/text.ts';

const isLoaded = ref(false);
const iframeSrc = 'https://player.vimeo.com/video/1059379503?autoplay=1&muted=1&title=0&byline=0&portrait=0&controls=0&background=1';

function onIframeLoad() {
	isLoaded.value = true;
	console.log('🎞️ iframe loaded!');
}
</script>

<style lang="scss" scoped></style>
