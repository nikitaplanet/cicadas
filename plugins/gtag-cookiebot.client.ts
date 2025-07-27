export default defineNuxtPlugin(() => {
	const {initialize, gtag} = useGtag();

	window.addEventListener('CookieConsentDeclaration', () => {
		if (window.Cookiebot?.consent?.statistics) {
			initialize();
			gtag('consent', 'update', {
				ad_user_data: 'granted',
				ad_personalization: 'granted',
				ad_storage: 'granted',
				analytics_storage: 'granted',
			});
		}
	});

	if (window.Cookiebot?.consent?.statistics) {
		initialize();
		gtag('consent', 'update', {
			ad_user_data: 'granted',
			ad_personalization: 'granted',
			ad_storage: 'granted',
			analytics_storage: 'granted',
		});
	}
});
