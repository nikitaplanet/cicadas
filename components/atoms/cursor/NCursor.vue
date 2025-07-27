<template>
	<div v-show="!isInIframe" :style="{left: x + 'px', top: y + 'px'}" class="custom-cursor">
		<img v-show="isClickable" ref="cursorImg" :src="hoverCursor" :class="['cursor-img', {'is-clickable': isClickable}]" />
		<img v-show="!isClickable" ref="cursorImg" :src="currentCursor" :class="['cursor-img', {'is-clickable': isClickable}]" />
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount, watch} from 'vue';

// 游標位置與狀態
const x = ref(0);
const y = ref(0);
const isInIframe = ref(false);
const isClickable = ref(false);

// 游標圖與動畫資源
const cursorImg = ref<HTMLImageElement | null>(null);
const currentCursor = ref('');
const hoverCursor = new URL('@/assets/img/icons/cursor/hover.svg', import.meta.url).href;

const cursorImages = [
	new URL('@/assets/img/icons/cursor/default_b.svg', import.meta.url).href,
	new URL('@/assets/img/icons/cursor/default_c.svg', import.meta.url).href,
];

let cursorIndex = 0;
let iframeCheckInterval: number;
let blinkInterval: number;

function isElementClickable(el: Element | null): boolean {
	if (!el) return false;

	const tag = el.tagName.toUpperCase();
	if (['A', 'BUTTON'].includes(tag)) return true;
	if (el.getAttribute('data-clickable') === 'true') return true;

	const style = getComputedStyle(el);
	if (style.cursor === 'pointer') return true;

	let current: Element | null = el;
	while (current) {
		if (
			current.classList.contains('clickCursor') ||
			current.classList.contains('swiper-button-next') ||
			current.classList.contains('swiper-button-prev') ||
			current.classList.contains('swiper-pagination-bullet')
		) {
			return true;
		}
		current = current.parentElement;
	}
	return false;
}

function handleMouseMove(e: MouseEvent): void {
	x.value = e.clientX;
	y.value = e.clientY;

	const el = document.elementFromPoint(e.clientX, e.clientY);
	isClickable.value = isElementClickable(el);

	// 檢核是否恢復原鼠標
	const isIframe = el?.tagName.toLowerCase() === 'iframe';
	const hasCookiebotClass = isInCookiebotContainer(el);

	if (isIframe || hasCookiebotClass) {
		isInIframe.value = true;
		document.body.classList.remove('hide-cursor');
	} else {
		isInIframe.value = false;
		document.body.classList.add('hide-cursor');
	}
}

function isInCookiebotContainer(el: Element | null): boolean {
	if (!el) return false;

	// 向上尋找 class 或 id 含有 cookiebot 的元素（第一層父級即可）
	return !!el.closest('[class*="cookiebot" i], [id*="cookiebot" i]');
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

	// 初始圖
	currentCursor.value = cursorImages[0];

	// 動畫切圖
	initInterval();
});

onBeforeUnmount(() => {
	document.body.classList.remove('hide-cursor');
	window.removeEventListener('mousemove', handleMouseMove);
	clearInterval(iframeCheckInterval);
	clearInterval(blinkInterval);
});

function initInterval() {
	blinkInterval = window.setInterval(() => {
		if (!isClickable.value) {
			cursorImg.value!.style.opacity = '0.9';
			setTimeout(() => {
				cursorIndex = (cursorIndex + 1) % cursorImages.length;
				currentCursor.value = cursorImages[cursorIndex];
				cursorImg.value!.style.opacity = '1';
			}, 200);
		}
	}, 500);
}
</script>

<style lang="scss" scoped>
.custom-cursor {
	position: fixed;
	width: 24px;
	height: 24px;
	pointer-events: none;
	transform: translate(-50%, -50%);
	z-index: 9999;
	mix-blend-mode: difference;

	.cursor-img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		opacity: 1;
		transition: opacity 0.1s ease;
	}

	.cursor-img.is-clickable {
		filter: brightness(1.5) saturate(1.2); // 點擊狀態效果
	}
}
</style>
<style lang="scss">
body.hide-cursor,
body.hide-cursor * {
	cursor: none !important;
}
</style>
