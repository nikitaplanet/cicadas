<template>
	<h2
		class="heading-home-made-text font-superhighlight text-scale3XL md:text-superhighlight xl:text-superhighlightSuper text-text-primary whitespace-nowrap">
		<slot />
	</h2>
</template>

<script lang="ts" setup>
const root = ref<HTMLElement>();
defineExpose({root});
</script>

<style lang="scss" scoped></style>
