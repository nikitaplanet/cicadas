<template>
	<div class="pt-0 pb-10">
		<SectionContainer :hasMinHeight="false">
			<div class="flex flex-col">
				<!---col-->
				<div class="w-full grid grid-cols-1">
					<!---row-->
					<router-link
						:to="`/studio/${id}`"
						class="flex flex-col cursor-pointer transition ease-in-out hover:opacity-90"
						:class="{
							'items-end justify-start': align === 'right',
						}">
						<h2
							v-html="title"
							class="italic font-semibold text-h2 font-h2 cursor-pointer"
							:class="{'text-left': align === 'left', 'text-right': align === 'right'}"></h2>

						<div
							class="w-full mt-12 flex items-center cursor-pointer"
							:class="{'justify-start': align === 'left', 'justify-end': align === 'right'}">
							<img :alt="title" :src="img" class="w-[650px]" />
						</div>
					</router-link>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';

interface Props {
	id: string;
	title: string;
	img: string;
	align: string;
	swiperClass: string;
}

withDefaults(defineProps<Props>(), {
	id: '1',
	title: '',
	img: '',
	align: 'left',
	swiperClass: 'aspect-[banner]',
});
</script>

<style lang="scss" scoped></style>
