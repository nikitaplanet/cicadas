<template>
	<div :style="{left: x + 'px', top: y + 'px'}" class="custom-cursor" :class="{'is-clickable': isClickable}"></div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const x = ref<number>(0);
const y = ref<number>(0);
const isClickable = ref<boolean>(false);

function isElementClickable(el: Element | null): boolean {
	if (!el) return false;

	const tag = el.tagName.toUpperCase();
	if (['A', 'BUTTON'].includes(tag)) return true;

	if (el.getAttribute('data-clickable') === 'true') return true;

	const style = getComputedStyle(el);

	if (style.cursor === 'pointer') return true;

	return false;
}

function handleMouseMove(e: MouseEvent): void {
	x.value = e.clientX;
	y.value = e.clientY;

	const el = document.elementFromPoint(e.clientX, e.clientY);
	isClickable.value = isElementClickable(el);
}

onMounted(() => {
	document.body.classList.add('hide-cursor');
	window.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
	document.body.classList.remove('hide-cursor');
	window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style lang="scss" scoped>
.custom-cursor {
	position: fixed;
	width: 24px;
	height: 24px;
	background: url('@/assets/img/icons/cursor/default_b.svg') no-repeat center center;
	background-size: contain;
	pointer-events: none;
	transform: translate(-50%, -50%);
	z-index: 9999;
	mix-blend-mode: difference;
}

.custom-cursor.is-clickable {
	background-image: url('@/assets/img/icons/cursor/hover.svg');
}
</style>
<style lang="scss">
body.hide-cursor,
body.hide-cursor * {
	cursor: none !important;
}
</style>
