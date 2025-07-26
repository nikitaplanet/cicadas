// composables/useScrollAnime.ts
export const useScrollAnime = () => {
	const {$anime} = useNuxtApp();

	const fadeInOnScroll = (selector: string, options = {}) => {
		const defaultOptions = {
			opacity: [0, 1],
			translateY: [30, 0],
			duration: 800,
			easing: 'easeOutQuad',
			...options,
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						$anime({
							targets: entry.target,
							...defaultOptions,
						});
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			},
		);

		nextTick(() => {
			document.querySelectorAll(selector).forEach((el) => {
				observer.observe(el);
			});
		});
	};

	return {fadeInOnScroll};
};
