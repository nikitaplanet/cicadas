import {useMediaQuery} from '@vueuse/core';

export function useGetMediaQuery() {
	const isMobile = useMediaQuery('(max-width: 1279px)');

	return {
		isMobile,
	};
}
