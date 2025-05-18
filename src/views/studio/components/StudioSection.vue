<template>
	<div class="pt-32 pb-36">
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
						<p
							v-html="description"
							class="mt-5 font-body text-body font-medium"
							:class="{'text-left': align === 'left', 'text-right': align === 'right'}"></p>

						<div class="w-full mt-12 flex items-center" :class="{'justify-start': align === 'left', 'justify-end': align === 'right'}">
							<SwiperImages :img="img" :key="title" class="w-[650px]" :class="swiperClass" />
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';
import SwiperImages from '@components/atoms/swiper/SwiperImages.vue';
import {SwiperImage} from '@components/atoms/swiper';

interface Props {
	id: number;
	title: string;
	description: string;
	img: SwiperImage[];
	align: string;
	swiperClass: string;
}

withDefaults(defineProps<Props>(), {
	id: 1,
	title: '',
	description: '',
	img: () => [],
	align: 'left',
	swiperClass: 'aspect-[banner]',
});
</script>

<style lang="scss" scoped></style>
