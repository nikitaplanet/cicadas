export default defineNuxtPlugin(() => {
	// CookieConsentDeclaration 是 Cookiebot 在 consent 做完後觸發的事件
	window.addEventListener('CookieConsentDeclaration', () => {
		if (window.Cookiebot?.consents?.given?.statistics) {
			// 使用 nuxt-gtag 的 gtag composable 載入
			const {load} = useGtag();
			load(); // ✅ 啟動 Google Analytics
		}
	});

	// 若使用者已經 consent 過，仍要即時載入
	if (window.Cookiebot?.consents?.given?.statistics) {
		const {load} = useGtag();
		load();
	}
});
