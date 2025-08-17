<template>
	<div>
		<section ref="horizonSection" class="section -b -horizon">
			<div ref="horizonContainer" class="section__horizon">
				<div class="section__horizon-block">
					<OurStorySlide1 />
				</div>
				<div class="section__horizon-block x-100">
					<OurStorySlide2 />
				</div>
				<div class="section__horizon-block x-100">
					<OurStorySlide3 />
				</div>
				<div class="section__horizon-block x-100">
					<OurStorySlide4 />
				</div>
				<div class="section__horizon-block x-100">
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

let intentObserver = null;
let ctx: gsap.Context | null = null;
let animating = ref(false);
let currentIndex = 0;
let swipePanels = ref<HTMLElement[]>([]);

onMounted(async () => {
	await nextTick();

	swipePanels.value = gsap.utils.toArray('.section__horizon-block');
	// set second panel two initial 100%
	gsap.set('.x-100', {xPercent: 100});
	// gsap.set(swipePanels, {
	// 	zIndex: (i) => i,
	// });

	intentObserver = ScrollTrigger.observe({
		type: 'wheel,touch',
		onUp: () => !animating && gotoPanel(currentIndex + 1, true),
		onDown: () => !animating && gotoPanel(currentIndex - 1, false),
		wheelSpeed: -1,
		tolerance: 10,
		preventDefault: true,
		onPress: (self) => {
			// on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
			ScrollTrigger.isTouch && self.event.preventDefault();
		},
	});

	intentObserver.disable();

	console.log('intentObserver', intentObserver);

	const section = horizonSection.value!;

	ScrollTrigger.create({
		trigger: section,
		pin: true,
		start: 'top top',
		end: '+=1',
		anticipatePin: 1,
		markers: true,
		onEnter: (self) => {
			console.log('self', self);
			// intentObserver.enable();
			// gotoPanel(currentIndex + 1, true);
		},
		onEnterBack: () => {
			// intentObserver.enable();
			// gotoPanel(currentIndex - 1, false);
		},
	});
});

onBeforeUnmount(() => {
	ctx?.revert();
	ctx = null;
});

function gotoPanel(index: number, isScrollingDown: boolean) {
	animating.value = true;
	// return to normal scroll if we're at the end or back up to the start
	if ((index === swipePanels.value.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
		let target = index;
		gsap.to(target, {
			// xPercent: isScrollingDown ? -100 : 0,
			duration: 0.0,
			onComplete: () => {
				animating.value = false;
				isScrollingDown && intentObserver?.disable();
			},
		});
		return;
	}

	//   target the second panel, last panel?
	let target = isScrollingDown ? swipePanels.value[index] : swipePanels.value[currentIndex];

	gsap.to(target, {
		xPercent: isScrollingDown ? 0 : 100,
		duration: 0.75,
		onComplete: () => {
			animating.value = false;
		},
	});
	currentIndex = index;
	console.log(index);
}
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

/* IMPORTANT: GSAP controls horizontal translate; no sticky/overflow scrolling here */
.section__horizon {
	position: relative;
	top: 0;
	width: 100%;
	height: 100vh;
	white-space: nowrap;
	overflow: visible;
	display: flex;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
}

.section__horizon-block {
	width: 100%;
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
