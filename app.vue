<template>
	<LoadingOverlay
		class="transition duration-300 ease-in-out"
		:class="{block: !isHideLoading, hidden: isHideLoading, 'opacity-0': !isShowLoading, 'opacity-100': isShowLoading}" />
	<div ref="nav" id="homeNav" class="py-5 transition-all duration-300" :class="navStyle">
		<NavBar @showCommon="handleShowCommon" :isNavBottom="isNavBottom" />
	</div>

	<Transition mode="out-in" name="fade">
		<CommonOverlay v-if="isShowCommon" @closeCommon="handleCloseCommon" />
	</Transition>

	<div class="bg-surface-def">
		<Transition name="fade" mode="out-in">
			<div v-if="!isShowLoading">
				<NuxtPage />
				<!--Footer-->
				<NFooter />
			</div>
		</Transition>
	</div>
	<NCursor />
</template>

<script lang="ts" setup>
import {ref, watch, computed, onMounted, onUnmounted} from 'vue';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import LoadingOverlay from '@/components/atoms/loading/LoadingOverlay.vue';
import CommonOverlay from '@/components/layout/CommonOverlay.vue';
import NavBar from '@/components/organisms/navbar/NavBar.vue';

import {useScrollDirectionNav} from '@/assets/js/hooks/useNavBar';
import {ROUTER_NAME} from '@/assets/js/enum/routerEnum';
import NCursor from '@/components/atoms/cursor/NCursor.vue';
import NFooter from '@/components/organisms/footer/NFooter.vue';

const {isScrolledPastLanding, showNavBar} = useScrollDirectionNav();
const route = useRoute();

useHead({
	meta: [{name: 'og:title', content: `${route.meta.title} | Cicadas`}],
});


const isShowLoading = ref(true);
const isHideLoading = ref(false);
const isHomePage = ref(route.name === ROUTER_NAME.HOME_PAGE);

const isShowCommon = ref(false);

setTimeout(() => {
	isShowLoading.value = false;
}, 2200);

setTimeout(() => {
	isHideLoading.value = true;
}, 2500);

watch(
	() => isShowLoading.value,
	(newValue) => {
		if (!newValue) {
			isHomePage.value = route.name === ROUTER_NAME.HOME_PAGE;
		}
	},
);

watch(
	() => route.fullPath,
	() => {
		isHomePage.value = route.name === ROUTER_NAME.HOME_PAGE;

		isShowLoading.value = true;
		isHideLoading.value = false;

		setTimeout(() => {
			isShowLoading.value = false;
		}, 2200);

		setTimeout(() => {
			isHideLoading.value = true;
		}, 2500);
	},
);

// Nav Style
const isNavBottom = ref(false);
const navStyle = computed(() => {
	if (isHomePage.value) {
		isNavBottom.value = !isScrolledPastLanding.value;

		return [
			isScrolledPastLanding.value ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute bottom-0 left-0 w-full z-20',
			{
				'-translate-y-full': !showNavBar.value,
				'translate-y-0': !!showNavBar.value,
			},
		];
	} else {
		isNavBottom.value = false;

		return [
			isScrolledPastLanding.value ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute top-0 left-0 w-full z-20',
			showNavBar.value ? 'translate-y-0' : '-translate-y-full',
		];
	}
});

const handleShowCommon = () => {
	isShowCommon.value = true;
};

const handleCloseCommon = () => {
	isShowCommon.value = false;
};

// Lenis
let lenis: Lenis;
onMounted(() => {
	if (!import.meta.client) return;
	gsap.registerPlugin(ScrollTrigger);

	lenis = new Lenis({
		duration: 1.1,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smooth: true,
	});

	const raf = (time: number) => {
		lenis.raf(time);
		requestAnimationFrame(raf);
	};
	requestAnimationFrame(raf);

	lenis.on('scroll', ScrollTrigger.update);
});

onUnmounted(() => {
	if (!import.meta.client) return;
	lenis.destroy();
});
</script>

<style scoped></style>
