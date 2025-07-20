<template>
	<div>
		<section ref="horizonSection" class="section -b -horizon">
			<div ref="horizonContainer" class="section__horizon">
				<div class="section__horizon-block pl-[100px]">
					<AboutUsSlide1 />
				</div>
				<div class="section__horizon-block">
					<AboutUsSlide2 />
				</div>
				<div class="section__horizon-block pl-[100px] pr-[100px]">
					<AboutUsSlide3 />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

import AboutUsSlide1 from '~/components/pages/home/horizonSlide/AboutUsSlide1.vue';
import AboutUsSlide2 from '~/components/pages/home/horizonSlide/AboutUsSlide2.vue';
import AboutUsSlide3 from '~/components/pages/home/horizonSlide/AboutUsSlide3.vue';

// 使用 ref 來取得 DOM 元素
const horizonSection = ref(null);
const horizonContainer = ref(null);

// 計算滾動進度的函數
const getProgress = (element) => {
	const rect = element.getBoundingClientRect();
	let progress = -(rect.top / (element.clientHeight - window.innerHeight));

	if (progress <= 0) {
		progress = 0;
	} else if (progress >= 1) {
		progress = 1;
	}

	return progress;
};

// 處理滾動事件的函數
const handleScroll = () => {
	if (horizonSection.value && horizonContainer.value) {
		const progress = getProgress(horizonSection.value);
		// 計算實際的可滾動距離（總寬度 - 視窗寬度）
		const scrollableWidth = horizonContainer.value.scrollWidth - horizonContainer.value.clientWidth;
		horizonContainer.value.scrollLeft = progress * scrollableWidth;
	}
};

// 生命週期鉤子
onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
:deep(body::-webkit-scrollbar) {
	display: none;
}

:deep(body) {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}

/* Section 基礎樣式 */
.section {
	width: 100vw;
}

/* Section A 樣式 */
.section.-a {
	font-size: 6vw;
	height: 100vh;
}

/* Section B 樣式 */
.section.-b {
	color: #001514;
	height: 500vh;
	position: relative;
}

/* Section C 樣式 */
.section.-c {
	font-size: 2vw;
	font-weight: 100;
	height: 100vh;
	color: #fff;
}

.section.-c a {
	font-size: 16px;
	opacity: 0.3;
	color: #fff;
	display: block;
}

/* 水平滾動容器 */
.section__horizon {
	top: 0;
	position: sticky;
	width: 100%;
	height: 100vh;
	white-space: nowrap;
	overflow-x: auto;
	overflow-y: hidden;
	display: flex;
	gap: 160px;

	background: var(--Surface-supportive-violet-light, #f3e6f7);

	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
}

/* 水平滾動區塊 */
.section__horizon-block {
	//width: 100vw;
	flex: 0 0 auto;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}

.section__horizon-block > div {
	width: 100%;
	height: 100%;
	font-size: 6vw;
	display: flex;
	align-items: center;
	justify-content: center;
}

.section__horizon-block > span {
	font-size: 4vw;
	writing-mode: vertical-lr;
	padding: 1vw;
}

/* 文字容器 */
.section__text {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 0.5rem;
}
</style>
