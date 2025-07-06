<template>
	<div class="aboutUs-bg pt-32 pb-32">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center pt-8">
				<div class="w-full">
					<SectionNameTag>{{ contentText.aboutUs.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28">
					<img class="w-[90%] max-w-[550px]" alt="flower" src="../../../../assets/img/home/aboutUs/1.svg" />
					<div class="flex flex-col relative">
						<img
							class="absolute bottom-[-135px] lg:bottom-auto lg:top-[-135px] right-[-40%] xs:right-[-30px] lg:right-[-80px] w-32"
							alt="feather"
							src="../../../../assets/img/home/aboutUs/1_feather.svg" />
						<img class="w-full max-w-[350px] ml-4" alt="wording" src="@/assets/img/home/aboutUs/word/1.svg" />
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
