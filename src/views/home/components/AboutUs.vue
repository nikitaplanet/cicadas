<template>
	<div class="aboutUs-bg pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center">
				<div class="w-full">
					<SectionNameTag>{{ contentText.aboutUs.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-row justify-center items-center gap-10 mt-28">
					<img alt="flower" src="@/assets/img/home/aboutUs/1.svg" />
					<div class="flex flex-col relative">
						<img class="absolute top-[-135px] right-[-80px] w-32" alt="feather" src="@/assets/img/home/aboutUs/1_feather.svg" />
						<h3 v-html="contentText.aboutUs.content1" class="font-h3sans italic text-h3 font-semibold"></h3>
						<img class="w-48 mt-5 ml-3" alt="1 under" src="@/assets/img/home/aboutUs/1_under.svg" />
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
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
