<template>
	<h2
		class="heading-home-made-text font-superhighlight xs:text-[20px] text-[26px] md:text-[60px] lg:text-superhighlight xl:text-superhighlightXL 2xl:text-superhighlightSuper text-text-primary whitespace-nowrap">
		<slot />
	</h2>
</template>

<script lang="ts" setup>
const root = ref<HTMLElement>();
defineExpose({root});
</script>

<style lang="scss" scoped></style>
