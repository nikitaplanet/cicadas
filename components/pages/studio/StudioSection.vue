<template>
	<div class="pt-0 pb-0 2xl:mb-[-30px]">
		<SectionContainer :hasMinHeight="false">
			<!---col-->
			<div class="w-full grid grid-cols-1">
				<!---row-->
				<router-link
					:to="`/studio/${id}`"
					class="flex flex-col cursor-pointer"
					:class="{
						'items-end justify-start': align === 'right',
					}">
					<div class="w-full lg:max-w-[650px] flex justify-between items-start">
						<h2 class="italic font-semibold text-scaleXL lg:text-h2 font-h2 cursor-pointer">
							{{ title }}
						</h2>
						<img class="inline-block lg:hidden" alt="Right" src="@/assets/img/studio/right.svg" />
					</div>

					<div class="w-full lg:w-[90%] mt-5 lg:mt-12 flex flex-col items-center">
						<span class="w-full flex items-center" :class="{'justify-start': align === 'left', 'justify-end': align === 'right'}">
							<span class="overflow-hidden relative group">
								<img
									:alt="title"
									:src="img"
									class="clickCursor opacity-100 w-full lg:w-[650px] transition-transform duration-500 ease-in-out lg:group-hover:scale-105"
									loading="lazy" />
							</span>
						</span>

						<div class="w-full flex items-center" :class="{'justify-start': align === 'left', 'justify-end': align === 'right'}">
							<div class="w-full lg:w-[650px] flex flex-row justify-end mt-5">
								<img class="inline-block" alt="learn more" src="@/assets/img/studio/learnmore.svg" />
							</div>
						</div>
					</div>
				</router-link>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import NLink from '~/components/atoms/link/NLink.vue';

interface Props {
	id: string;
	title: string;
	img: string;
	align: string;
	swiperClass: string;
	amount: number;
	detailList: any[];
}

withDefaults(defineProps<Props>(), {
	id: '1',
	title: '',
	img: '',
	align: 'left',
	swiperClass: 'aspect-[banner]',
	amount: 0,
	detailList: [],
});
</script>

<style lang="scss" scoped></style>
