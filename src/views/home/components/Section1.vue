<template>
	<SectionContainer class="py-16">
		<div class="w-full grid grid-cols-12">
			<div class="col-span-6 flex flex-col justify-center pl-10">
				<SectionTitle>
					<span v-html="contentText.section1.title"></span>
				</SectionTitle>
				<SectionDescription class="mt-10">
					<span v-html="contentText.section1.description"></span>
				</SectionDescription>
			</div>
			<div class="col-span-6">
				<img class="w-full h-full object-cover" alt="section1" src="@/assets/img/home/section1.png" />
			</div>
		</div>
	</SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionTitle from '@components/atoms/text/SectionTitle.vue';
import SectionDescription from '@components/atoms/text/SectionDescription.vue';
import {contentText} from '@assets/wording/home/text.ts';
</script>

<style lang="scss" scoped></style>
