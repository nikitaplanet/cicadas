<template>
	<section ref="horizonTextSection" class="section -b -horizon">
		<div ref="horizonTextContainer" class="section__horizon">
			<div class="section__horizon-block pl-[120px] pr-[120px]">
				<HeadingHomeMade>{{ contentText.sliderSection.header }}</HeadingHomeMade>
			</div>
		</div>
	</section>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {contentText} from 'assets/wording/home/text.js';
import HeadingHomeMade from '~/components/atoms/text/HeadingHomeMade.vue';

const horizonTextSection = ref(null);
const horizonTextContainer = ref(null);

let current = 0;
let target = 0;
let animationFrameId;

function getProgress(element) {
	const rect = element.getBoundingClientRect();
	const totalScroll = element.clientHeight - window.innerHeight;
	let progress = -rect.top / totalScroll;
	return Math.min(1, Math.max(0, progress));
}

function animateScroll() {
	if (!horizonTextSection.value || !horizonTextContainer.value) return;

	const progress = getProgress(horizonTextSection.value);
	const maxScroll = horizonTextContainer.value.scrollWidth - horizonTextContainer.value.clientWidth;

	target = progress * maxScroll;

	const effectiveDuration = 0.6;
	const lerpFactor = 1 - Math.pow(0.01, 1 / (30 * effectiveDuration));

	current += (target - current) * lerpFactor;
	horizonTextContainer.value.scrollLeft = current;

	animationFrameId = requestAnimationFrame(animateScroll);
}

onMounted(() => {
	animationFrameId = requestAnimationFrame(animateScroll);
});

onUnmounted(() => {
	cancelAnimationFrame(animationFrameId);
});
</script>

<style lang="scss" scoped>
.section {
	min-width: 100vw;
}

.section.-b {
	color: #001514;
	height: 500vh;
	position: relative;
}

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
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
}

.section__horizon-block {
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
</style>
