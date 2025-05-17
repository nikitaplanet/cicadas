<template>
	<div class="w-full px-8 m-auto" :class="{'section-container': hasMinHeight}">
		<slot />
	</div>
</template>

<script lang="ts" setup>
interface Props {
	hasMinHeight?: boolean;
}

withDefaults(defineProps<Props>(), {
	hasMinHeight: true,
});
</script>

<style lang="scss" scoped>
.section-container {
	min-height: calc(100vh - 100px);
}
</style>
