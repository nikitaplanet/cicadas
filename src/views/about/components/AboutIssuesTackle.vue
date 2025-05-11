<template>
	<div class="aboutIssue-bg pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center">
				<div class="w-full">
					<SectionNameTag>{{ aboutWording.issuesWeTackle.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-row justify-center items-center gap-10 mt-28"></div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {contentText} from '@assets/wording/home/text.ts';
import {aboutWording} from '@assets/wording/about/text.ts';
</script>

<style lang="scss" scoped>
.aboutIssue-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
