export default defineNuxtPlugin((nuxtApp) => {
	const {gtag} = useGtag();

	nuxtApp.hook('page:finish', () => {
		if (typeof gtag === 'function') {
			gtag('event', 'page_view', {
				page_path: window.location.pathname + window.location.search,
				page_location: window.location.href,
				page_title: document.title,
			});
			console.log('📊 GA page_view tracked');
		}
	});
});
