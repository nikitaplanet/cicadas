<template>
	<div class="flex justify-between flex-row gap-6 group cursor-pointer">
		<div class="flex flex-col items-start gap-6">
			<button
				@click="handelClick"
				class="w-full italic font-semibold text-h1 font-h1 group-hover:text-text-def transition ease-in-out"
				:class="{
					[props.defaultColor]: !isActiveBox,
					'text-text-def': isActiveBox,
					'text-left': align === 'left',
					'text-right': align === 'right',
				}"
				type="button">
				{{ title }}
			</button>
			<div
				class="w-full text-body18 italic font-body text-text-def font-semibold transition ease-linear group-hover:inline-block"
				:class="{
					'inline-block translate-y-1': isActiveBox,
					hidden: !isActiveBox,
					'text-left': align === 'left',
					'text-right': align === 'right',
				}">
				{{ description }}
			</div>
		</div>
		<img
			v-if="isShowArrowButton"
			class="group-hover:opacity-100"
			:class="{'opacity-100': isActive, 'opacity-0': !isActive}"
			alt="arrow"
			src="../../assets/img/home/arrow.svg" />
	</div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
interface Props {
	title: string;
	description: string;
	isActive: boolean;
	align?: 'left' | 'right';
	isShowArrowButton?: boolean;
	defaultColor?: 'text-text-archive-supportive2' | 'text-text-supportive-violet-dark';
}

const props = withDefaults(defineProps<Props>(), {
	title: '',
	description: '',
	isActive: false,
	align: 'left',
	isShowArrowButton: true,
	defaultColor: 'text-text-archive-supportive2',
});

const emit = defineEmits(['click']);
const handelClick = () => {
	emit('click');
};

const isActiveBox = computed(() => {
	return props.isActive;
});
</script>

<style scoped></style>
