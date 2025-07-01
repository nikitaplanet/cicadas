<template>
	<div class="aboutUs-bg pt-32 pb-32">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center pt-8">
				<div class="w-full">
					<SectionNameTag>{{ contentText.aboutUs.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28">
					<img class="w-[100%] max-w-[600px]" alt="flower" src="../../../../assets/img/home/aboutUs/1.svg" />
					<div class="flex flex-col relative">
						<img
							class="absolute bottom-[-135px] lg:bottom-auto lg:top-[-135px] right-[-40%] xs:right-[-30px] lg:right-[-80px] w-32"
							alt="feather"
							src="../../../../assets/img/home/aboutUs/1_feather.svg" />
						<h3 v-html="contentText.aboutUs.content1" class="hidden md:block font-h3sans text-scaleLG sm:text-h3 font-semibold"></h3>
						<h3
							v-html="contentText.aboutUs.content1Mobile"
							class="block md:hidden mt-6 font-h3sans text-scaleLG md:text-h3 font-semibold text-center"></h3>
						<img
							class="hidden md:block w-28 md:w-48 mt-[2px] md:mt-[-5px] ml-32 md:ml-3"
							alt="1 under"
							src="../../../../assets/img/home/aboutUs/1_under.svg" />
						<img
							class="block md:hidden w-32 md:w-48 mt-[2px] md:mt-[-5px] ml-16 md:ml-3"
							alt="1 under"
							src="../../../../assets/img/home/aboutUs/1_under_m.svg" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {contentText} from '@assets/wording/home/text.ts';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	width: 100vw;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
