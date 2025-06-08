<template>
	<LoadingOverlay
		class="transition duration-300 ease-in-out"
		:class="{block: !isHideLoading, hidden: isHideLoading, 'opacity-0': !isShowLoading, 'opacity-100': isShowLoading}" />
	<div ref="nav" id="homeNav" class="py-5 transition-all duration-300" :class="navStyle">
		<NavBar @showCommon="handleShowCommon" />
	</div>

	<Transition mode="out-in" name="fade">
		<CommonOverlay v-if="isShowCommon" @closeCommon="handleCloseCommon" />
	</Transition>

	<router-view v-slot="{Component}">
		<transition mode="out-in" name="fade">
			<component v-if="!isShowLoading" :is="Component" />
		</transition>
	</router-view>
</template>

<script lang="ts" setup>
import {ref, watch, computed} from 'vue';
import LoadingOverlay from '@components/atoms/loading/LoadingOverlay.vue';
import {useRoute} from 'vue-router';
import CommonOverlay from '@components/layout/CommonOverlay.vue';
import NavBar from '@components/organisms/navbar/NavBar.vue';

import {useScrollDirectionNav} from '@/hooks/useNavBar.ts';
import {ROUTER_NAME} from '@assets/js/enum/routerEnum.ts';

const {isScrolledPastLanding, showNavBar} = useScrollDirectionNav();
const route = useRoute();

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
const navStyle = computed(() => {
	if (isHomePage.value) {
		return [
			isScrolledPastLanding.value ? 'fixed top-0 left-0 w-full z-20 bg-surface-def' : 'absolute bottom-0 left-0 w-full z-20',
			{
				'-translate-y-full': !showNavBar.value,
				'translate-y-0': !!showNavBar.value,
			},
		];
	} else {
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
</script>

<style scoped></style>
