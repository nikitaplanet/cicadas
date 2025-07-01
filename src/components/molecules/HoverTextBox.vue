<template>
	<div class="flex justify-between flex-row gap-6 group cursor-pointer">
		<div class="flex flex-col items-start gap-4 lg:gap-6">
			<!--桌機按鈕-->
			<button
				@click="handelClick"
				class="hidden lg:block w-full italic font-semibold text-scaleLG lg:text-h1 font-h1 group-hover:text-text-def transition ease-in-out"
				:class="{
					[props.defaultColor]: !isActiveBox,
					'text-text-def': isActiveBox,
					'text-left': align === 'left',
					'text-right': align === 'right',
				}"
				type="button">
				{{ title }}
			</button>

			<!--手機按鈕-->
			<button
				@click="handelClickMobile"
				class="block lg:hidden w-full italic font-semibold text-scaleLG lg:text-h1 font-h1 group-hover:text-text-def transition ease-in-out"
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
				class="w-full text-body hidden lg:text-body18 font-body text-text-def font-semibold transition ease-linear lg:group-hover:inline-block"
				:class="{
					'inline-block translate-y-1': isActiveBox,
					hidden: !isActiveBox,
					'text-left': align === 'left',
					'text-right': align === 'right',
				}">
				{{ description }}
			</div>
		</div>
		<router-link v-if="link" :to="link" class="hidden lg:block">
			<img
				class="group-hover:opacity-100"
				:class="{'opacity-100': isActive, 'opacity-0': !isActive}"
				alt="arrow"
				src="../../assets/img/home/arrow.svg" />
		</router-link>
		<button v-if="isButton" @click="handleClickArrow" class="hidden lg:block" type="button">
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
import {useRouter} from 'vue-router';

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
const router = useRouter();

const handelClick = () => {
	emit('click');
	router.push(props.link);
};

const handelClickMobile = () => {
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
