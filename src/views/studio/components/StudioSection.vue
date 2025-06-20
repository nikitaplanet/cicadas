<template>
	<div class="pt-0 pb-10">
		<SectionContainer :hasMinHeight="false">
			<div class="flex flex-col">
				<!---col-->
				<div class="w-full grid grid-cols-1">
					<!---row-->
					<div
						class="flex flex-col"
						:class="{
							'items-end justify-start': align === 'right',
						}">
						<h2
							v-html="title"
							class="italic font-semibold text-h2 font-h2"
							:class="{'text-left': align === 'left', 'text-right': align === 'right'}"></h2>

						<div class="w-full mt-12 flex items-center" :class="{'justify-start': align === 'left', 'justify-end': align === 'right'}">
							<img :alt="title" :src="img" class="w-[650px]" />
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';

interface Props {
	id: number;
	title: string;
	img: string;
	align: string;
	swiperClass: string;
}

withDefaults(defineProps<Props>(), {
	id: 1,
	title: '',
	img: '',
	align: 'left',
	swiperClass: 'aspect-[banner]',
});
</script>

<style lang="scss" scoped></style>
