<template>
	<div class="w-full flex flex-col items-center justify-start gap-0 md:gap-5" :class="{'hidden md:block md:opacity-0': isHide}">
		<img :alt="logoAlt" :src="logoSrc" class="px-5 max-w-72 aspect-1/1" />
		<p v-html="description" class="text-center italic font-label text-body md:text-labelLg font-semibold"></p>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	logoSrc: string;
	logoAlt: string;
	description: string;
	isHide: boolean;
}

withDefaults(defineProps<Props>(), {
	logoSrc: '',
	logoAlt: '',
	description: '',
	isHide: false,
});
</script>

<style lang="scss" scoped></style>
