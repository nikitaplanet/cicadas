<template>
	<div class="relative aboutUs-bg pt-32 pb-32">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center pt-8">
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28">
					<div class="flex flex-col">
						<h3 v-html="contentText.aboutUs.content2" class="font-h3sans italic text-h4 font-semibold"></h3>
						<img class="w-48 mt-5 ml-3" alt="1 under" src="../../../../assets/img/home/aboutUs/1_under.svg" />
					</div>
					<img class="w-[90%] max-w-[580px] pb-5 ml-24" alt="flower2" src="../../../../assets/img/home/aboutUs/2.svg" />
				</div>
			</div>
		</SectionContainer>

		<img class="absolute bottom-[100px] right-[30px] w-[80px]" alt="feather" src="../../../../assets/img/home/aboutUs/feather2.svg" />
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {contentText} from '@assets/wording/home/text.ts';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
