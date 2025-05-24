<template>
	<div class="aboutIssue-bg pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center">
				<div class="w-full">
					<SectionNameTag>{{ aboutWording.issuesWeTackle.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col justify-center items-end gap-10 mt-28">
					<HoverTextBox
						v-for="item in issues"
						@click="handleClick(item.id)"
						@mouseleave="hoverImage = showImage"
						@mouseover="hoverImage = item.id"
						:description="item.description"
						:isActive="selectedContent === item.id"
						:isShowArrowButton="false"
						:key="item.title"
						:title="item.title"
						align="right"
						defaultColor="text-text-supportive-violet-dark" />
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {aboutWording} from '@assets/wording/about/text.ts';
import HoverTextBox from '@components/molecules/HoverTextBox.vue';

const selectedContent = ref(0);
const showImage = ref(0);
const hoverImage = ref(0);

const handleClick = (val: number) => {
	selectedContent.value = val;
	showImage.value = val;
	hoverImage.value = val;
};

const issues = reactive([...aboutWording.issuesWeTackle.issueList]);
</script>

<style lang="scss" scoped>
.aboutIssue-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
