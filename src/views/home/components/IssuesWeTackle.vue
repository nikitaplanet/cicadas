<template>
	<div class="issues-bg pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center">
				<div class="w-full">
					<SectionNameTag>{{ contentText.issuesWeTackle.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col gap-5 justify-center items-start mt-14 pl-[15%]">
					<ContentButton
						v-for="item in textAry"
						@click="handleClickItem(item)"
						:content="item.content"
						:isActive="item.isActive"
						:key="item.title"
						:title="item.title" />
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';
import {contentText} from '@assets/wording/home/text.ts';
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import ContentButton from '@/views/home/components/issues/ContentButton.vue';

const textAry = reactive(contentText.issuesWeTackle.contentTextList.map((item, index) => ({...item, id: index, isActive: index === 0})));
const selectedContent = ref(textAry[0]);

const handleClickItem = (item: any) => {
	textAry.forEach((i) => {
		i.isActive = i.id === item.id;
	});
	selectedContent.value = item;
};
</script>

<style lang="scss" scoped>
.issues-bg {
	background: var(--Surface-supportive-blue-light, #cce2f7);
}
</style>
