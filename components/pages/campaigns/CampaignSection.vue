<template>
	<div class="py-10 lg:py-20">
		<SectionContainer :hasMinHeight="false">
			<div v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}" class="flex flex-col transition-all duration-700">
				<!---col-->
				<div class="w-full grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-12">
					<!---row-->
					<div class="flex flex-col gap-3">
						<div v-if="isOngoing" class="flex flex-row gap-[10px] text-text-primary text-labelLg font-label italic font-semibold">
							<img alt="isOngoing" src="@/assets/img/components/swiper/dot_active.svg" />
							Ongoing
						</div>
						<h2 v-html="title" class="italic font-semibold text-scaleXL lg:text-h2 font-h2"></h2>
					</div>

					<div class="w-full grid grid-cols-1 gap-7 lg:gap-16">
						<div class="grid grid-cols-1 gap-5">
							<div v-for="item in infos" :key="item.title" class="grid grid-cols-[65px_1fr] gap-10">
								<div class="w-[65px] italic text-labelSm lg:text-labelMd font-semibold font-label pt-[5px]">{{ item.title }}</div>
								<div class="flex-grow text-scaleSM lg:text-scaleMD font-body font-medium">{{ item.content }}</div>
							</div>
						</div>
						<img :alt="`${id}.jpg`" :src="img" class="clickCursor" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';

interface Props {
	id: number;
	isOngoing: boolean;
	title: string;
	year: string;
	region: string;
	issues: string;
	services: string;
	img: string;
}

const props = withDefaults(defineProps<Props>(), {
	id: 1,
	isOngoing: false,
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
