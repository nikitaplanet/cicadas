<template>
	<div class="pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full grid grid-cols-12">
				<div class="w-full col-span-4">
					<SectionNameTag>{{ contentText.qa.title }}</SectionNameTag>
				</div>
				<div class="col-span-8 w-full flex flex-col justify-center items-start gap-5">
					<QAccordion>
						<QAccordionItem v-for="item in qaList" :content="item.content" :id="item.id" :title="item.title"></QAccordionItem>
					</QAccordion>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {contentText} from '@assets/wording/home/text.ts';
import QAccordion from '@components/atoms/accordion/QAccordion.vue';
import QAccordionItem from '@components/atoms/accordion/QAccordionItem.vue';

const qaList = reactive(contentText.qa.qaList.map((item, index) => ({...item, id: index, isActive: index === 0})));
</script>

<style lang="scss" scoped></style>
