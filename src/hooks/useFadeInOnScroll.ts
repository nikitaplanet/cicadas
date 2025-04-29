import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

export function useFadeInOnScroll(el: HTMLElement | null | undefined, trigger: HTMLElement | null | undefined, options?: ScrollTriggerOptions) {
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
		default:
			break;
	}

	gsap.from(el, {
		opacity: 0,
		x: directionX,
		y: directionY,
		duration: options?.duration ? options.duration : 1,
		ease: options?.ease ? options.ease : 'power2.out',
		scrollTrigger: {
			trigger: trigger,
			start: options?.start ? options.start : 'top 80%',
			end: options?.end ? options.end : '',
			toggleActions: options?.once ? 'play none none none' : 'play reverse play reverse',
		},
	});
}
