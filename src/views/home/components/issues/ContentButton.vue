<template>
	<button
		@click="handleClick"
		@mouseleave="handleHoverLeave"
		@mouseover="handleHover"
		class="flex flex-col justify-start items-start"
		type="button">
		<span
			class="font-h1 text-h3 italic font-semibold transition ease-in-out"
			:class="{'text-text-def': isActiveStyle, 'text-text-supportive-blue-dark': !isActiveStyle}">
			{{ title }}
		</span>
		<span v-show="isActiveStyle" class="w-full flex flex-col justify-start items-start transition ease-in-out">
			<span
				class="w-full font-semibold italic text-body18 mt-6 text-left"
				:class="{'text-text-def': isActiveStyle, 'text-text-supportive-blue-dark': !isActiveStyle}">
				{{ content }}
			</span>
			<img class="w-full mt-5" alt="underline" src="@/assets/img/home/issues/line.svg" />
		</span>
	</button>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';

interface Props {
	title: string;
	content: string;
	isActive: boolean;
}
const props = withDefaults(defineProps<Props>(), {
	title: '',
	content: '',
	isActive: false,
});
const emit = defineEmits(['click']);

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
</script>

<style scoped></style>
