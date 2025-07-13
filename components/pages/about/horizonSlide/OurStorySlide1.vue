<template>
	<div class="aboutUs-bg pt-32 pb-32">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center pt-8">
				<div class="w-full">
					<SectionNameTag>{{ aboutWording.ourStory.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28">
					<img class="w-[90%] max-w-[500px]" alt="flower" src="../../../../assets/img/about/ourStory/1.svg" />
					<div class="flex flex-col relative">
						<img
							class="absolute bottom-[-135px] lg:bottom-auto lg:top-[-135px] right-[-40%] xs:right-[-30px] lg:right-[-110px] w-32"
							alt="feather"
							src="../../../../assets/img/about/ourStory/feather.svg" />
						<img class="w-full max-w-[350px] ml-24" alt="wording" src="@/assets/img/about/ourStory/word1.svg" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionNameTag from '@/components/atoms/text/SectionNameTag.vue';
import {aboutWording} from '@/assets/wording/about/text';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	width: 100vw;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
