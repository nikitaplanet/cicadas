<template>
	<div>
		<section ref="horizonSection" class="section -b -horizon">
			<div ref="horizonContainer" class="section__horizon">
				<div class="section__horizon-block">
					<OurStorySlide1 />
				</div>
				<div class="section__horizon-block">
					<OurStorySlide2 />
				</div>
				<div class="section__horizon-block">
					<OurStorySlide3 />
				</div>
				<div class="section__horizon-block">
					<OurStorySlide4 />
				</div>
				<div class="section__horizon-block">
					<OurStorySlide5 />
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount, nextTick} from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {Observer} from 'gsap/Observer';

import OurStorySlide1 from '~/components/pages/about/horizonSlide/OurStorySlide1.vue';
import OurStorySlide2 from '~/components/pages/about/horizonSlide/OurStorySlide2.vue';
import OurStorySlide3 from '~/components/pages/about/horizonSlide/OurStorySlide3.vue';
import OurStorySlide4 from '~/components/pages/about/horizonSlide/OurStorySlide4.vue';
import OurStorySlide5 from '~/components/pages/about/horizonSlide/OurStorySlide5.vue';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

const horizonSection = ref<HTMLElement | null>(null);
const horizonContainer = ref<HTMLElement | null>(null);

let intentObserver: Observer | null = null;
let ctx: gsap.Context | null = null;
let animating = ref(false);
let currentIndex = 0;
let swipePanels = ref<HTMLElement[]>([]);
const totalSlides = 5;

function initST() {
	ctx = gsap.context(() => {
		const container = horizonContainer.value!;
		const section = horizonSection.value!;

		// 設置初始位置
		gsap.set(container, {x: 0});

		// 只負責 pin section，不做橫向動畫
		ScrollTrigger.create({
			trigger: section,
			start: 'top top',
			end: `+=${(totalSlides - 1) * window.innerHeight}`, // 每個 slide 相當於一個螢幕高度的滾動距離
			pin: true,
			anticipatePin: 1,
			invalidateOnRefresh: true,
			onEnter: () => {
				console.log('ScrollTrigger onEnter');
				intentObserver?.enable();
			},
			onLeave: () => {
				console.log('ScrollTrigger onLeave - 向下離開');
				intentObserver?.disable();
			},
			onEnterBack: () => {
				console.log('ScrollTrigger onEnterBack');
				intentObserver?.enable();
			},
			onLeaveBack: () => {
				console.log('ScrollTrigger onLeaveBack - 向上離開');
				intentObserver?.disable();
			},
		});
	}, horizonSection);
}

function initObserver() {
	swipePanels.value = gsap.utils.toArray('.section__horizon-block');
	console.log('Total slides:', swipePanels.value.length);

	intentObserver = ScrollTrigger.observe({
		target: horizonSection.value,
		type: 'wheel,touch',
		onUp: () => {
			console.log('Observer onUp (向下滾動)');
			if (!animating.value) {
				goToNextSlide();
			}
		},
		onDown: () => {
			console.log('Observer onDown (向上滾動)');
			if (!animating.value) {
				goToPrevSlide();
			}
		},
		wheelSpeed: -1,
		tolerance: 10,
		preventDefault: true,
		onPress: (self) => {
			ScrollTrigger.isTouch && self.event.preventDefault();
		},
	});

	intentObserver.disable();
	console.log('Observer initialized');
}

function goToNextSlide() {
	const nextIndex = currentIndex + 1;
	console.log('goToNextSlide:', currentIndex, '->', nextIndex);

	if (nextIndex >= totalSlides) {
		console.log('已到最後一張，釋放滾動');
		// 到達最後一張後，讓用戶繼續向下滾動到下個 section
		intentObserver?.disable();
		// 觸發 ScrollTrigger 繼續滾動
		gsap.to(window, {
			scrollTo: {
				y: horizonSection.value!.offsetTop + horizonSection.value!.offsetHeight + 1,
				autoKill: false,
			},
			duration: 0.5,
		});
		return;
	}

	animateToSlide(nextIndex);
}

function goToPrevSlide() {
	const prevIndex = currentIndex - 1;
	console.log('goToPrevSlide:', currentIndex, '->', prevIndex);

	if (prevIndex < 0) {
		console.log('已到第一張，釋放滾動');
		// 到達第一張後，讓用戶繼續向上滾動到上個 section
		intentObserver?.disable();
		// 觸發 ScrollTrigger 繼續滾動
		gsap.to(window, {
			scrollTo: {
				y: horizonSection.value!.offsetTop - 1,
				autoKill: false,
			},
			duration: 0.5,
		});
		return;
	}

	animateToSlide(prevIndex);
}

function animateToSlide(index: number) {
	if (index < 0 || index >= totalSlides) return;

	console.log(`切換到第 ${index + 1} 張 slide`);
	animating.value = true;

	const container = horizonContainer.value!;
	const targetX = -index * window.innerWidth;

	gsap.to(container, {
		x: targetX,
		duration: 0.8,
		ease: 'power2.out',
		onComplete: () => {
			currentIndex = index;
			animating.value = false;
			console.log(`動畫完成，當前第 ${currentIndex + 1} 張`);
		},
	});
}

// 重置到第一張
function resetToFirstSlide() {
	console.log('重置到第一張');
	currentIndex = 0;
	const container = horizonContainer.value!;
	gsap.set(container, {x: 0});
}

onMounted(async () => {
	await nextTick();

	resetToFirstSlide();
	initST();
	initObserver();

	console.log('組件已掛載');
});

onBeforeUnmount(() => {
	intentObserver?.kill();
	ctx?.revert();
	ctx = null;
});
</script>

<style lang="scss" scoped>
:deep(body::-webkit-scrollbar) {
	display: none;
}
:deep(body) {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.section {
	width: 100vw;
}
.section.-b {
	color: #001514;
	position: relative;
}

.section__horizon {
	position: relative;
	top: 0;
	width: 500%; /* 5 個 slide */
	height: 100vh;
	display: flex;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
	overflow: hidden;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
}

.section__horizon-block {
	width: 20%; /* 每個佔 20% */
	flex: 0 0 20%;
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
