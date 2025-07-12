<template>
	<button
		@click="handleClick"
		@mouseleave="handleHoverLeave"
		@mouseover="handleHover"
		class="flex flex-col justify-start items-start"
		type="button">
    <span
		class=" font-h1 text-scaleLG lg:text-h3 italic font-semibold text-left transition-colors ease-in-out"
		:class="{
        'text-text-def': isActiveStyle,
        'text-text-supportive-blue-blue100': !isActiveStyle && defaultColorType === 'blue',
        'text-text-supportive-violet-violet100': !isActiveStyle && defaultColorType === 'violet',
      }">
      {{ title }}
    </span>

		<span v-show="isActiveStyle" class="w-full flex flex-col justify-start items-start transition ease-in-out">
      <span
		  class="w-full max-w-[500px] font-semibold font-body text-body lg:text-body18 mt-6 text-left transition-colors"
		  :class="{
          'text-text-def': isActiveStyle,
          'text-text-supportive-blue-blue100': !isActiveStyle && defaultColorType === 'blue',
          'text-text-supportive-violet-violet100': !isActiveStyle && defaultColorType === 'violet',
        }">
        {{ content }}
      </span>

      <img
		  v-if="defaultColorType === 'blue'"
		  class="w-full mt-5"
		  alt="underline"
		  src="@/assets/img/home/issues/line.svg" />
      <img
		  v-else
		  class="w-full mt-5"
		  alt="underline"
		  src="@/assets/img/home/issues/line_violet.svg" />
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
	defaultColorType: 'blue',
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
