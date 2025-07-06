<template>
	<div class="relative aboutUs-bg pt-32 pb-32">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center pt-12">
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28">
					<div class="flex flex-col">
						<img alt="" src="@/assets/img/home/aboutUs/word/3.svg" />
						<h3 v-html="contentText.aboutUs.content3" class="font-h3sans italic text-h4 font-semibold"></h3>
					</div>
					<img class="w-[90%] max-w-[580px] pb-5 ml-24" alt="bird" src="@/assets/img/home/aboutUs/3.svg" />
				</div>
			</div>
		</SectionContainer>

		<img class="absolute bottom-[120px] right-[130px] w-[130px]" alt="feather" src="@/assets/img/home/aboutUs/learnMore.svg" />
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';
import {contentText} from '@assets/wording/home/text.ts';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
