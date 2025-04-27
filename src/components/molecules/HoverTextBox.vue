<template>
	<div class="flex justify-between flex-row gap-6 group cursor-pointer">
		<div class="flex flex-col items-start gap-6">
			<button
				@click="handelClick"
				class="italic font-semibold text-h1 font-h1 group-hover:text-text-def transition ease-in-out"
				:class="{'text-text-archive-supportive2': !isActiveBox, 'text-text-def': isActiveBox}"
				type="button">
				{{ title }}
			</button>
			<div
				class="text-body18 italic font-body text-text-def font-semibold transition ease-linear group-hover:inline-block"
				:class="{'inline-block translate-y-1': isActiveBox, hidden: !isActiveBox}">
				{{ description }}
			</div>
		</div>
		<img
			class="group-hover:opacity-100"
			:class="{'opacity-100': isActive, 'opacity-0': !isActive}"
			alt="arrow"
			src="@/assets/img/home/section3/arrow.svg" />
	</div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
interface Props {
	title: string;
	description: string;
	isActive: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	title: '',
	description: '',
	isActive: false,
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
