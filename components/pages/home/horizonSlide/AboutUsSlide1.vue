<template>
	<div class="aboutUs-bg">
		<SectionContainer :hasMinHeight="false" :isAutoWidth="true">
			<div class="w-full lg:w-[80vw] flex flex-col justify-center items-center pt-8">
				<div class="w-full">
					<SectionNameTag>{{ contentText.aboutUs.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-row justify-center items-center gap-10 my-28">
					<img class="w-[90%] max-w-[550px]" alt="flower" src="../../../../assets/img/home/aboutUs/1.svg" />
					<div class="flex flex-col relative">
						<img
							class="absolute bottom-auto top-[-135px] right-[-40%] w-32"
							alt="feather"
							src="../../../../assets/img/home/aboutUs/1_feather.svg" />
						<img class="w-full max-w-[320px] ml-4" alt="wording" src="@/assets/img/home/aboutUs/word/1.svg" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionNameTag from '@/components/atoms/text/SectionNameTag.vue';
import {contentText} from '@/assets/wording/home/text.ts';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	width: 100vw;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
