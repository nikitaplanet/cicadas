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
let swipePanels = gsap.utils.toArray('.section__horizon-block');

onMounted(async () => {
	await nextTick();

	ctx = gsap.context(() => {
		const container = horizonContainer.value!;
		const section = horizonSection.value!;

		gsap.set(container, {x: 0});

		const getMove = () => container.scrollWidth - document.documentElement.clientWidth;

		gsap.to(container, {
			x: () => -getMove(),
			ease: 'none',
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: () => `+=${getMove()}`,
				scrub: true,
				pin: true,
				anticipatePin: 1,
				invalidateOnRefresh: true,
				onEnter: (self) => {
					console.log('onEnter');
				},
				onEnterBack: () => {
					console.log('onEnterBack');
				},
			},
		});
	}, horizonSection);

	initObserver();
});

onBeforeUnmount(() => {
	ctx?.revert();
	ctx = null;
});

function initObserver() {
	intentObserver = Observer.create({
		type: 'wheel,touch',
		onUp: () => !animating && gotoPanel(currentIndex + 1, true),
		onDown: () => !animating && gotoPanel(currentIndex - 1, false),
		wheelSpeed: -1,
		tolerance: 10,
		preventDefault: true,
		onPress: (self) => {
			ScrollTrigger.isTouch && self.event.preventDefault();
		},
	});
}

function gotoPanel(currentIndex, event) {}
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
