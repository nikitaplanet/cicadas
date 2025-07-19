import {useMediaQuery} from '@vueuse/core';

export function useGetMediaQuery() {
	const isMobile = useMediaQuery('(max-width: 639px)');
	const isTablet = useMediaQuery('(min-width: 640px)');
	const isDesktop = useMediaQuery('(min-width: 1025px)');

	return {
		isMobile,
		isTablet,
		isDesktop,
	};
}
