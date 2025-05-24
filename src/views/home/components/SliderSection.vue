<template>
	<div class="sliderSection">
		<SectionContainer class="pt-16 pb-20">
			<div class="w-full">
				<HeadingHomeMade>{{ contentText.sliderSection.header }}</HeadingHomeMade>
			</div>

			<div class="mt-12">
				<PartnerSwiper />
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {contentText} from '@/assets/wording/home/text.ts';
import HeadingHomeMade from '@components/atoms/text/HeadingHomeMade.vue';
import PartnerSwiper from '@/views/home/components/sliderSection/PartnerSwiper.vue';
</script>

<style lang="scss" scoped></style>
