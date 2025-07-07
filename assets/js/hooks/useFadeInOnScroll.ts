export enum ScrollTriggerDirection {
	UP = 1,
	DOWN = 2,
	LEFT = 3,
	RIGHT = 4,
}

interface ScrollTriggerOptions {
	direction?: ScrollTriggerDirection;
	ease?: string;
	duration?: number;
	start?: string;
	end?: string;
	once?: boolean;
}

export async function useFadeInOnScroll(
	el: HTMLElement | null | undefined,
	trigger: HTMLElement | null | undefined,
	options?: ScrollTriggerOptions,
) {
	// ✅ SSR 安全保護
	if (!import.meta.client || !el || !trigger) return;

	const gsap = await import('gsap');
	const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
	gsap.default.registerPlugin(ScrollTrigger);

	let directionX = 0;
	let directionY = 0;

	switch (options?.direction) {
		case ScrollTriggerDirection.UP:
			directionY = -50;
			break;
		case ScrollTriggerDirection.DOWN:
			directionY = 50;
			break;
		case ScrollTriggerDirection.LEFT:
			directionX = -50;
			break;
		case ScrollTriggerDirection.RIGHT:
			directionX = 50;
			break;
	}

	gsap.default.from(el, {
		opacity: 0,
		x: directionX,
		y: directionY,
		duration: options?.duration || 1,
		ease: options?.ease || 'power2.out',
		scrollTrigger: {
			trigger: trigger,
			start: options?.start || 'top 80%',
			end: options?.end || '',
			toggleActions: options?.once ? 'play none none none' : 'play reverse play reverse',
		},
	});
}