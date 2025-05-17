<template>
	<div class="pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="flex flex-col">
				<!---col-->
				<div class="w-full grid grid-cols-2">
					<!---row-->
					<h2 v-html="title" class="italic font-semibold text-h2 font-h2"></h2>
					<div class="w-full grid grid-cols-1">
						<div class="grid grid-cols-1 gap-5">
							<div v-for="item in infos" :key="item.title" class="flex flex-row gap-10">
								<div class="w-16 italic text-labelMd font-semibold font-label">{{ item.title }}</div>
								<div class="text-body font-body font-medium">{{ item.content }}</div>
							</div>
						</div>

						<div class="mt-16">
							<img :alt="`${id}.jpg`" :src="img" />
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {reactive, computed} from 'vue';
import SectionContainer from '@components/layout/SectionContainer.vue';

interface Props {
	id: number;
	title: string;
	year: string;
	region: string;
	issues: string;
	services: string;
	img: string;
}

const props = withDefaults(defineProps<Props>(), {
	id: 1,
	title: '',
	year: '',
	region: '',
	issues: '',
	services: '',
	img: '',
});

const infos = reactive([
	{title: 'Year', content: props.year},
	{title: 'Region', content: props.region},
	{title: 'Issues', content: props.issues},
	{title: 'Services', content: props.services},
]);
</script>

<style lang="scss" scoped></style>
