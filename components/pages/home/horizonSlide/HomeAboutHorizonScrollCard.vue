<template>
	<SectionContainer :hasMinHeight="false" :isAutoWidth="true" class="aboutUs-bg pt-[120px]">
		<div class="w-full">
			<SectionNameTag>{{ contentText.aboutUs.title }}</SectionNameTag>
		</div>
		<div class="w-full flex flex-col justify-center items-center gap-20">
			<AboutUsSlide1 class="mt-8" />
			<AboutUsSlide2 />
			<AboutUsSlide3 />
		</div>
	</SectionContainer>
</template>

<script setup>
import AboutUsSlide1 from './AboutUsSlide1.vue';
import AboutUsSlide2 from '~/components/pages/home/horizonSlide/AboutUsSlide2.vue';
import AboutUsSlide3 from '~/components/pages/home/horizonSlide/AboutUsSlide3.vue';
import SectionContainer from '~/components/layout/SectionContainer.vue';
import {contentText} from 'assets/wording/home/text.js';
import SectionNameTag from '~/components/atoms/text/SectionNameTag.vue';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
