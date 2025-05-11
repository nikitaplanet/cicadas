<template>
	<button
		@click="handleClick"
		@mouseleave="handleHoverLeave"
		@mouseover="handleHover"
		class="flex flex-col justify-start items-start"
		type="button">
		<span class="font-h1 text-h3 italic font-semibold transition ease-in-out" :class="[isActiveStyle ? 'text-text-def' : defaultColorClass]">
			{{ title }}
		</span>
		<span v-show="isActiveStyle" class="w-full flex flex-col justify-start items-start transition ease-in-out">
			<span class="w-full font-semibold italic text-body18 mt-6 text-left" :class="[isActiveStyle ? 'text-text-def' : defaultColorClass]">
				{{ content }}
			</span>
			<img v-if="defaultColorType === 'blue'" class="w-full mt-5" alt="underline" src="@/assets/img/home/issues/line.svg" />
			<img v-else class="w-full mt-5" alt="underline" src="@/assets/img/home/issues/line_violet.svg" />
		</span>
	</button>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';

interface Props {
	title: string;
	content: string;
	isActive: boolean;
	defaultColorType?: 'blue' | 'violet';
}
const props = withDefaults(defineProps<Props>(), {
	title: '',
	content: '',
	isActive: false,
	defaultColorClass: 'blue',
});
const emit = defineEmits(['click']);

const colorVariants = {
	blue: 'text-text-supportive-blue-dark',
	violet: 'text-text-supportive-violet-dark',
};

const isHover = ref(false);

const handleHover = () => {
	isHover.value = true;
};

const handleHoverLeave = () => {
	isHover.value = false;
};

const handleClick = () => {
	emit('click');
};

const isActiveStyle = computed(() => {
	return props.isActive || isHover.value;
});

const defaultColorClass = computed(() => {
	return props.defaultColorType ? colorVariants[props.defaultColorType] : colorVariants.blue;
});
</script>

<style scoped></style>
