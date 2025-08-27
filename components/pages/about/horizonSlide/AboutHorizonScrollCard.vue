<template>
	<div class="aboutUs-bg py-[120px]">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full">
				<SectionNameTag>{{ aboutWording.ourStory.title }}</SectionNameTag>
			</div>

			<div class="w-full flex flex-col justify-center items-center gap-20">
				<OurStorySlide1 />
				<OurStorySlide2 />
				<OurStorySlide3 />
				<OurStorySlide4 />
				<OurStorySlide5 />
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import OurStorySlide1 from '~/components/pages/about/horizonSlide/OurStorySlide1.vue';
import OurStorySlide2 from '~/components/pages/about/horizonSlide/OurStorySlide2.vue';
import OurStorySlide3 from '~/components/pages/about/horizonSlide/OurStorySlide3.vue';
import OurStorySlide4 from '~/components/pages/about/horizonSlide/OurStorySlide4.vue';
import OurStorySlide5 from '~/components/pages/about/horizonSlide/OurStorySlide5.vue';
import {aboutWording} from 'assets/wording/about/text';
import SectionNameTag from '~/components/atoms/text/SectionNameTag.vue';
import SectionContainer from '~/components/layout/SectionContainer.vue';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	width: 100vw;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
