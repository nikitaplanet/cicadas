<template>
	<div class="flex justify-between flex-row gap-6 group cursor-pointer">
		<div class="flex flex-col items-start gap-4 lg:gap-6">
			<button
				@click="handelClick"
				class="w-full italic font-semibold text-scaleLG lg:text-h1 font-h1 group-hover:text-text-def transition ease-in-out"
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
				class="w-full text-body lg:text-body18 font-body text-text-def font-semibold transition ease-linear group-hover:inline-block"
				:class="{
					'inline-block translate-y-1': isActiveBox,
					hidden: !isActiveBox,
					'text-left': align === 'left',
					'text-right': align === 'right',
				}">
				{{ description }}
			</div>
		</div>
		<router-link v-if="link" :to="link">
			<img
				class="group-hover:opacity-100"
				:class="{'opacity-100': isActive, 'opacity-0': !isActive}"
				alt="arrow"
				src="../../assets/img/home/arrow.svg" />
		</router-link>
		<button v-if="isButton" @click="handleClickArrow" type="button">
			<img
				class="group-hover:opacity-100"
				:class="{'opacity-100': isActive, 'opacity-0': !isActive}"
				alt="arrow"
				src="../../assets/img/home/arrow.svg" />
		</button>
	</div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
interface Props {
	title: string;
	description: string;
	link?: string;
	isActive: boolean;
	isButton?: boolean;
	align?: 'left' | 'right';
	defaultColor?: 'text-text-archive-supportive2' | 'text-text-supportive-violet-dark';
}

const props = withDefaults(defineProps<Props>(), {
	title: '',
	description: '',
	link: '',
	isActive: false,
	align: 'left',
	isButton: false,
	defaultColor: 'text-text-archive-supportive2',
});

const emit = defineEmits(['click', 'clickArrow']);
const handelClick = () => {
	emit('click');
};

const isActiveBox = computed(() => {
	return props.isActive;
});

const handleClickArrow = () => {
	emit('clickArrow');
};
</script>

<style scoped></style>
