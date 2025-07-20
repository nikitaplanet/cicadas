<template>
	<div class="fixed top-0 left-0 z-50 w-full h-full bg-surface-primary flex justify-center items-center">
		<div class="flex flex-row gap-4">
			<img class="svg-dot" alt="dot-1" src="@/assets/img/icons/dot-1.svg" />
			<img class="svg-dot animate-pulse" alt="dot-2" src="@/assets/img/icons/dot-2.svg" />
			<img class="svg-dot" alt="dot-3" src="@/assets/img/icons/dot-3.svg" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import {watch} from 'vue';

interface Props {
	isShow: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	isShow: false,
});

watch(
	() => props.isShow,
	(val) => {
		if (val) {
			lockBodyScroll();
		} else {
			unlockBodyScroll();
		}
	},
);

// 鎖定/解鎖 body 滾動
const lockBodyScroll = () => {
	document.body.style.overflow = 'hidden';
};

const unlockBodyScroll = () => {
	document.body.style.overflow = '';
};
</script>

<style lang="scss" scoped>
.svg-dot {
	width: 16px;
	height: 16px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	animation: svgFade 1.6s ease-in-out infinite;
}

.svg-dot:nth-child(1) {
	animation-delay: 0s;
}
.svg-dot:nth-child(2) {
	animation-delay: 0.4s;
}
.svg-dot:nth-child(3) {
	animation-delay: 0.8s;
}

@keyframes svgFade {
	0%,
	100% {
		opacity: 0.6; /* 淡出狀態 */
		transform: scale(0.8) translateY(3px); /* 稍微縮小 + 下移 */
	}
	50% {
		opacity: 1; /* 完全顯示 */
		transform: scale(1) translateY(-3px); /* 正常大小 + 上移 */
	}
}
</style>
