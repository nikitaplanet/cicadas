import {ref, onMounted, onUnmounted} from 'vue';
import throttle from 'lodash/throttle';

/**
 * 控制 NavBar 顯示：滾過 Landing 才判斷滾動方向，往下滑隱藏，往上滑顯示
 */
export function useScrollDirectionNav(throttleDelay = 200) {
	const isScrolledPastLanding = ref(false);
	const showNavBar = ref(true);

	let lastScrollY = window.scrollY;

	const handleScroll = throttle(() => {
		const currentScrollY = window.scrollY;
		const hasPassedLanding = currentScrollY > window.innerHeight - 100;

		// ✅ 一進入 landing 區下方，立刻固定 & 隱藏 NavBar（避免出現一瞬間）
		if (hasPassedLanding && !isScrolledPastLanding.value) {
			isScrolledPastLanding.value = true;
			showNavBar.value = false;
			lastScrollY = currentScrollY;
			return;
		}

		// 更新狀態
		isScrolledPastLanding.value = hasPassedLanding;

		if (isScrolledPastLanding.value) {
			if (currentScrollY > lastScrollY) {
				// 往下滑
				showNavBar.value = false;
			} else {
				// 往上滑
				showNavBar.value = true;
			}
			lastScrollY = currentScrollY;
		} else {
			// 在 Landing 區段內，強制顯示
			showNavBar.value = true;
		}
	}, throttleDelay);

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	return {
		isScrolledPastLanding,
		showNavBar,
	};
}
