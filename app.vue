<template>
	<LoadingOverlay
		class="transition duration-300 ease-in-out"
		:class="{block: !isHideLoading, hidden: isHideLoading, 'opacity-0': !isShowLoading, 'opacity-100': isShowLoading}" />
	<LightLoadingOverlay
		:isShow="isShowLightLoading"
		class="transition duration-300 ease-in-out"
		:class="{block: !isHideLightLoading, hidden: isHideLightLoading, 'opacity-0': !isShowLightLoading, 'opacity-100': isShowLightLoading}" />
	<ClientOnly>
		<div ref="nav" id="homeNav" class="py-[23px] transition-all duration-300" :class="navStyle">
			<NavBar @showCommon="handleShowCommon" :isLight="isLightNav" :isNavBottom="isNavBottom" :isScrolledPastLanding="isScrolledPastLanding" />
		</div>
	</ClientOnly>

	<Transition mode="out-in" name="fade">
		<CommonOverlay v-if="isShowCommon" @closeCommon="handleCloseCommon" />
	</Transition>

	<div class="bg-surface-def">
		<Transition mode="out-in" name="fade">
			<div v-if="!isShowLoading">
				<NuxtPage :key="pageKey" />
				<!--Footer-->
				<NFooter />
			</div>
		</Transition>
	</div>

	<ClientOnly>
		<NCursor v-if="isDesktop" />
	</ClientOnly>
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
import NCursor from '@/components/atoms/cursor/NCursor.vue';
import NFooter from '@/components/organisms/footer/NFooter.vue';

import {useDebounceFn} from '@vueuse/core';

const {isScrolledPastLanding, showNavBar} = useScrollDirectionNav();

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
import {seoWording} from 'assets/wording/seoWording';
import seoBanner from 'assets/img/seo/cicadas_banner.png';
import LightLoadingOverlay from '~/components/atoms/loading/LightLoadingOverlay.vue';
const {isDesktop} = useGetMediaQuery();

const route = useRoute();
const isShowLoading = ref(true);
const isShowLightLoading = ref(false);
const isHideLoading = ref(false);
const isHideLightLoading = ref(true);
const isHomePage = computed(() => route.path === '/');
const isShowCommon = ref(false);
const previousIsMobile = ref(!isDesktop.value);
const pageKey = ref(`${route.fullPath}-${!isDesktop.value ? 'm' : 'd'}`);

initPageLoading();
function initPageLoading() {
	isShowLoading.value = true;
	setTimeout(() => {
		isShowLoading.value = false;
	}, 2200);

	isHideLoading.value = false;
	setTimeout(() => {
		isHideLoading.value = true;
	}, 2300);
}

function initLightLoading() {
	isShowLightLoading.value = true;
	setTimeout(() => {
		isShowLightLoading.value = false;
	}, 700);

	isHideLightLoading.value = false;
	setTimeout(() => {
		isHideLightLoading.value = true;
	}, 800);
}

// 監聽路由變化（正常情況下 NuxtPage 會自動換，但保險加上）
watch(
	() => route.fullPath,
	(newPath) => {
		pageKey.value = `${newPath}-${!isDesktop.value ? 'm' : 'd'}`;
	},
);

watch(
	() => route.fullPath,
	() => {
		initLightLoading();
	},
);

const handleMobileSwitch = useDebounceFn(() => {
	const wasMobile = previousIsMobile.value;
	const nowMobile = !isDesktop.value;

	if (wasMobile !== nowMobile) {
		initPageLoading();
		pageKey.value = `${route.fullPath}-${nowMobile ? 'm' : 'd'}`;
		previousIsMobile.value = nowMobile;
	}
}, 200);

watch(isDesktop, handleMobileSwitch);

// Nav Style
const isNavBottom = ref(false);
const navStyle = computed(() => {
	if (isHomePage.value) {
		isNavBottom.value = false;

		return [
			isScrolledPastLanding.value
				? 'fixed top-0 left-0 w-full z-20 nav-gradient-bg'
				: !isDesktop.value
					? 'absolute top-0 left-0 w-full z-20'
					: 'absolute bottom-0 left-0 w-full z-20',
			{
				'-translate-y-full': !showNavBar.value,
				'translate-y-0': !!showNavBar.value,
			},
		];
	} else {
		isNavBottom.value = false;

		return [
			isScrolledPastLanding.value ? 'fixed top-0 left-0 w-full z-20 nav-gradient-bg' : 'absolute top-0 left-0 w-full z-20',
			showNavBar.value ? 'translate-y-0' : '-translate-y-full',
		];
	}
});

const isLightNav = computed(() => {
	if (isHomePage.value) {
		return !isScrolledPastLanding.value;
	}

	return false;
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
		duration: 1.8,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smooth: true,
		touchMultiplier: 1.8,
		smoothTouch: true,
		wheelMultiplier: 1.0, // 滾輪滾動倍數
		normalizeWheel: true, // 標準化不同瀏覽器的滾輪行為
		autoResize: true,
	});

	const raf = (time: number) => {
		lenis.raf(time);
		requestAnimationFrame(raf);
	};
	requestAnimationFrame(raf);

	lenis.on('scroll', ScrollTrigger.update);

	(window as any).__lenis__ = lenis;
});

onUnmounted(() => {
	if (!import.meta.client) return;
	lenis.destroy();
});

useSeoMeta({
	title: () => seoWording.siteName,
	description: () => seoWording.home.description,
});
</script>

<style lang="scss" scoped>
.nav-gradient-bg {
	background: linear-gradient(180deg, #dd5621 15%, rgba(221, 86, 33, 0) 100%);
	//box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3.2px);
	-webkit-backdrop-filter: blur(8.2px);
}
</style>
