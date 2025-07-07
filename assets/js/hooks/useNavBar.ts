import { ref, onMounted, onUnmounted } from 'vue';
import throttle from 'lodash/throttle';

export function useScrollDirectionNav(throttleDelay = 200) {
	const isScrolledPastLanding = ref(false);
	const showNavBar = ref(true);

	let lastScrollY = 0; // 初始先設為 0，避免 SSR error

	const handleScroll = throttle(() => {
		const currentScrollY = window.scrollY;
		const hasPassedLanding = currentScrollY > window.innerHeight - 100;

		if (hasPassedLanding && !isScrolledPastLanding.value) {
			isScrolledPastLanding.value = true;
			showNavBar.value = false;
			lastScrollY = currentScrollY;
			return;
		}

		isScrolledPastLanding.value = hasPassedLanding;

		if (isScrolledPastLanding.value) {
			showNavBar.value = currentScrollY < lastScrollY;
			lastScrollY = currentScrollY;
		} else {
			showNavBar.value = true;
		}
	}, throttleDelay);

	onMounted(() => {
		if (!import.meta.client) return;
		lastScrollY = window.scrollY; // ✅ 安全初始化
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		if (!import.meta.client) return;
		window.removeEventListener('scroll', handleScroll);
	});

	return {
		isScrolledPastLanding,
		showNavBar,
	};
}