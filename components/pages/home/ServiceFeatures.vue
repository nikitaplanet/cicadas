<template>
	<div class="issues-bg py-24 lg:pt-32 lg:pb-36">
		<SectionContainer :hasMinHeight="false">
			<div
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="w-full flex flex-col justify-center items-center transition-all duration-700">
				<div class="w-full">
					<SectionNameTag>{{ contentText.issuesWeTackle.title }}</SectionNameTag>
				</div>
				<ClientOnly>
					<div class="w-full px-4 lg:px-0 flex flex-col gap-5 items-start mt-14 lg:pl-[15%] lg:justify-center">
						<ContentButton
							v-for="item in textAry"
							@click="handleClickItem(item)"
							:content="item.content"
							:isActive="item.isActive"
							:key="item.title"
							:title="item.title"
							defaultColorType="blue" />
					</div>
				</ClientOnly>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';
import {contentText} from '@/assets/wording/home/text';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionNameTag from '@/components/atoms/text/SectionNameTag.vue';
import ContentButton from '@/components/pages/home/issues/ContentButton.vue';

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
const {isMobile} = useGetMediaQuery();

const textAry = reactive(
	contentText.issuesWeTackle.contentTextList.map((item, index) => ({
		...item,
		id: index,
		isActive: isMobile.value ? index === 0 : false,
	})),
);
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
