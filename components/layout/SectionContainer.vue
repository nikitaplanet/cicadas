<template>
	<div class="w-full px-6 lg:px-8 m-auto" :class="{'section-container': hasMinHeight, 'w-auto': isAutoWidth}">
		<slot />
	</div>
</template>

<script lang="ts" setup>
interface Props {
	hasMinHeight?: boolean;
	isAutoWidth?: boolean;
}

withDefaults(defineProps<Props>(), {
	hasMinHeight: true,
	isAutoWidth: false,
});
</script>

<style lang="scss" scoped>
.section-container {
	min-height: calc(100vh - 100px);
}
</style>
