<template>
	<div class="w-full flex flex-col items-center justify-start gap-5">
		<img :alt="logoAlt" :src="logoSrc" />
		<p v-html="description" class="text-center italic font-label text-labelLg font-semibold"></p>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	logoSrc: string;
	logoAlt: string;
	description: string;
}

withDefaults(defineProps<Props>(), {
	logoSrc: '',
	logoAlt: '',
	description: '',
});
</script>

<style lang="scss" scoped></style>
