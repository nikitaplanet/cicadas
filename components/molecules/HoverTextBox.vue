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

			<div class="hidden lg:block">
				<button
					@click="handelClick"
					class="w-full text-body lg:text-body18 font-body text-text-def font-semibold transition ease-linear lg:group-hover:inline-block"
					:class="{
						'inline-block translate-y-1': isActiveBox,
						hidden: !isActiveBox,
						'text-left': align === 'left',
						'text-right': align === 'right',
					}"
					type="button">
					{{ description }}

					<div class="flex flex-row justify-end items-center mt-4">
						<img alt="learnMore" src="@/assets/img/home/ourWorks/learnMore.svg" />
					</div>
				</button>
			</div>
		</div>
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
	if (!props.isButton) {
		router.push(props.link);
		return;
	}
	emit('click');
};

const handelClickMobile = () => {
	emit('click');
};

const isActiveBox = computed(() => {
	return props.isActive;
});
</script>

<style scoped></style>
