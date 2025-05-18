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
	description: string;
	img: string[];
	align: string;
}

const props = withDefaults(defineProps<Props>(), {
	id: 1,
	title: '',
	description: '',
	img: () => [],
	align: 'left',
});
</script>

<style lang="scss" scoped></style>
