<template>
	<LoadingOverlay
		class="transition duration-300 ease-in-out"
		:class="{block: !isHideLoading, hidden: isHideLoading, 'opacity-0': !isShowLoading, 'opacity-100': isShowLoading}" />
	<ClientOnly>
		<div ref="nav" id="homeNav" class="py-[23px] transition-all duration-300" :class="navStyle">
			<NavBar @showCommon="handleShowCommon" :isLight="isLightNav" :isNavBottom="isNavBottom" />
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
		<NCursor v-if="!isMobile" />
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
const {isMobile} = useGetMediaQuery();

const route = useRoute();
const isShowLoading = ref(true);
const isHideLoading = ref(false);
const isHomePage = computed(() => route.path === '/');
const isShowCommon = ref(false);
const previousIsMobile = ref(isMobile.value);
const pageKey = ref(`${route.fullPath}-${isMobile.value ? 'm' : 'd'}`);

initPageLoading();
function initPageLoading() {
	isShowLoading.value = true;
	setTimeout(() => {
		isShowLoading.value = false;
	}, 2200);

	isHideLoading.value = false;
	setTimeout(() => {
		isHideLoading.value = true;
	}, 2500);
}

watch(
	() => route.fullPath,
	() => {
		initPageLoading();
	},
);

// 監聽路由變化（正常情況下 NuxtPage 會自動換，但保險加上）
watch(
	() => route.fullPath,
	(newPath) => {
		pageKey.value = `${newPath}-${isMobile.value ? 'm' : 'd'}`;
	},
);

const handleMobileSwitch = useDebounceFn(() => {
	const wasMobile = previousIsMobile.value;
	const nowMobile = isMobile.value;

	if (wasMobile !== nowMobile) {
		initPageLoading();
		pageKey.value = `${route.fullPath}-${nowMobile ? 'm' : 'd'}`;
		previousIsMobile.value = nowMobile;
	}
}, 200);

watch(isMobile, handleMobileSwitch);

// Nav Style
const isNavBottom = ref(false);
const navStyle = computed(() => {
	if (isHomePage.value) {
		isNavBottom.value = false;

		return [
			isScrolledPastLanding.value
				? 'fixed top-0 left-0 w-full z-20 bg-surface-def'
				: isMobile.value
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
			isScrolledPastLanding.value ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute top-0 left-0 w-full z-20',
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
