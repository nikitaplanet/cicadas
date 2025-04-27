<template>
	<div class="w-11/12 m-auto" :class="{'section-container': hasMinHeight}">
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

<style scoped>
.section-container {
	min-height: calc(100vh - 100px);
}
</style>
