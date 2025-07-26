import type {RouterConfig} from '@nuxt/schema';

export default <RouterConfig>{
	scrollBehavior(to, from, savedPosition) {
		const lenis = (window as any).__lenis__;

		return new Promise((resolve) => {
			const MAX_RETRY = 30;
			let retryCount = 0;
			let lastHeight = 0;

			const waitForStableHeight = () => {
				const currentHeight = document.body.scrollHeight;

				if (Math.abs(currentHeight - lastHeight) < 10 || retryCount > MAX_RETRY) {
					const targetPosition = savedPosition?.top || 0;

					if (lenis) {
						// 🔥 最簡潔的無動畫滾動
						lenis.scrollTo(targetPosition, {immediate: true, duration: 0});
					} else {
						// fallback
						window.scrollTo({top: targetPosition, behavior: 'auto'});
					}

					resolve(savedPosition || {left: 0, top: 0});
				} else {
					lastHeight = currentHeight;
					retryCount++;
					setTimeout(waitForStableHeight, 50);
				}
			};

			requestAnimationFrame(waitForStableHeight);
		});
	},
};
