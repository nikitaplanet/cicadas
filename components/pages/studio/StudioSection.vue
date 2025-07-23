<template>
	<div class="pt-0 pb-0 2xl:mb-[-30px]">
		<SectionContainer :hasMinHeight="false">
			<!---col-->
			<div class="w-full grid grid-cols-1">
				<!---row-->
				<router-link
					:to="`/studio/${id}`"
					class="flex flex-col cursor-pointer transition ease-in-out hover:opacity-90"
					:class="{
						'items-end justify-start': align === 'right',
					}">
					<h2 class="max-w-[650px] italic font-semibold text-scaleXL md:text-h2 font-h2 cursor-pointer">
						{{ title }}
						<sup class="text-scaleMD md:text-scaleXL font-h2 font-medium italic -top-4 right-1 md:right-3 md:-top-8 relative">{{
							amount
						}}</sup>
					</h2>

					<div class="w-[90%] mt-5 md:mt-12 flex flex-col items-center">
						<span class="w-full flex items-center" :class="{'justify-start': align === 'left', 'justify-end': align === 'right'}">
							<span class="overflow-hidden relative group">
								<img
									:alt="title"
									:src="img"
									class="clickCursor w-[650px] transition-transform duration-500 ease-in-out lg:group-hover:scale-105"
									loading="lazy" />
								<img
									class="hidden lg:inline-block absolute right-6 bottom-5 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"
									alt="learn more"
									src="@/assets/img/campaigns/learnmore.svg" />
							</span>
						</span>

						<div class="w-full flex items-center" :class="{'justify-start': align === 'left', 'justify-end': align === 'right'}">
							<div class="w-[650px] flex flex-row justify-between mt-5">
								<NLink v-for="item in detailList" class="font-label text-scaleXS italic text-text-primary font-semibold">{{
									item.listTitle
								}}</NLink>
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
