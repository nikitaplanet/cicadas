<template>
	<div v-show="!isInIframe" :style="{left: x + 'px', top: y + 'px'}" class="custom-cursor" :class="{'is-clickable': isClickable}"></div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const x = ref<number>(0);
const y = ref<number>(0);
const isInIframe = ref<boolean>(false);
const isClickable = ref<boolean>(false);
let iframeCheckInterval: number;

function isElementClickable(el: Element | null): boolean {
	if (!el) return false;

	// 1. 原生 tag 判斷
	const tag = el.tagName.toUpperCase();
	if (['A', 'BUTTON'].includes(tag)) return true;

	// 2. 判斷 data-clickable 屬性
	if (el.getAttribute('data-clickable') === 'true') return true;

	// 3. 判斷游標樣式
	const style = getComputedStyle(el);
	if (style.cursor === 'pointer') return true;

	// 4. 向上查找是否有 clickCursor class
	let current: Element | null = el;
	while (current) {
		if (current.classList.contains('clickCursor')) return true;
		if (current.classList.contains('swiper-button-next')) return true;
		if (current.classList.contains('swiper-button-prev')) return true;
		if (current.classList.contains('swiper-pagination-bullet')) return true;
		current = current.parentElement;
	}

	return false;
}

function handleMouseMove(e: MouseEvent): void {
	x.value = e.clientX;
	y.value = e.clientY;

	const el = document.elementFromPoint(e.clientX, e.clientY);
	isClickable.value = isElementClickable(el);

	// 判斷是否進入 iframe
	if (el?.tagName.toLowerCase() === 'iframe') {
		isInIframe.value = true;
		document.body.classList.remove('hide-cursor');
	} else {
		isInIframe.value = false;
		document.body.classList.add('hide-cursor');
	}
}

onMounted(() => {
	document.body.classList.add('hide-cursor');
	window.addEventListener('mousemove', handleMouseMove);

	iframeCheckInterval = window.setInterval(() => {
		const el = document.elementFromPoint(x.value, y.value);
		if (el?.tagName.toLowerCase() === 'iframe') {
			isInIframe.value = true;
			document.body.classList.remove('hide-cursor');
		}
	}, 500);
});

onBeforeUnmount(() => {
	document.body.classList.remove('hide-cursor');
	window.removeEventListener('mousemove', handleMouseMove);

	clearInterval(iframeCheckInterval);
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
	animation: cursorBlink 1s steps(1) infinite;
}

.custom-cursor.is-clickable {
	background-image: url('@/assets/img/icons/cursor/hover.svg');
}

@keyframes cursorBlink {
	0% {
		background-image: url('@/assets/img/icons/cursor/default_b.svg');
	}
	50% {
		background-image: url('@/assets/img/icons/cursor/default_c.svg');
	}
	100% {
		background-image: url('@/assets/img/icons/cursor/default_b.svg');
	}
}
</style>
<style lang="scss">
body.hide-cursor,
body.hide-cursor * {
	cursor: none !important;
}
</style>
