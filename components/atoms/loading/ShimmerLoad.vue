<template>
	<div class="shimmer" :class="className" />
</template>

<script lang="ts" setup>
defineProps<{
	className: string;
}>();
</script>

<style scoped>
.shimmer {
	background: linear-gradient(-45deg, #1e1e1e 0%, #2b2b2b 30%, #1e1e1e 60%);
	background-size: 350%;;
	background-position-x: 100%;
	animation: shimmer 1s infinite linear;
}

@keyframes shimmer {
	to {
		background-position-x: 0%
	}
}
</style>
