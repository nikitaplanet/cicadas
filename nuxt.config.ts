// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: true,
	target: 'server',
	nitro: {
		// preset: 'vercel',
		preset: 'node-server',
		prerender: {
			routes: ['/', '/about', '/workshops', '/studio', '/campaigns'],
		},
	},
	app: {
		baseURL: '/',
		head: {
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0',
				},
				{
					name: 'keywords',
					content: 'Singing Cicadas, singingcicadas, Sharon Yeung, Han Yan Yuen, Hanna Shin',
				},
				{name: 'author', content: 'Cicadas'},
				{name: 'robots', content: 'index, follow'},
			],
			script: [{src: 'https://tally.so/widgets/embed.js', async: true}],
		},
	},
	compatibilityDate: '2025-05-15',
	devtools: {enabled: true},
	modules: [
		'@nuxtjs/seo',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'@ambitiondev/nuxt-cookiebot',
		'@hypernym/nuxt-anime',
		'nuxt-gtag',
		'nuxt-swiper',
		'@primevue/nuxt-module',
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'nuxt-anchorscroll',
	],
	robots: {
		UserAgent: '*',
		Allow: '/',
		Sitemap: 'https://singingcicadas.com/sitemap.xml', // 指向您的 sitemap
	},
	sitemap: {
		hostname: 'https://singingcicadas.com',
		gzip: true, // 生成 sitemap.xml.gz
		routes: async () => {
			return []; // 如果沒有動態路由，可以留空或返回空陣列
		},
	},
	cookiebot: {
		cookieBotId: '5efa9b8a-2cc4-485e-9d86-54b078df59e8',
		culture: 'en',
	},
	anchorscroll: {
		hooks: [
			// Or any valid hook if needed
			// Default is `page:finish`
			'page:transition:finish',
		],
	},
	anime: {
		provide: true, // 全域提供 $anime
		composables: true, // 啟用 composables
		autoImport: true, // 自動匯入
	},
	gtag: {
		id: 'G-BP9QW5TJMS',
		config: {
			anonymize_ip: true,
		},
		initMode: 'manual',
		initialConsent: false,
	},
	css: ['~/assets/styles/index.scss'],
	primevue: {
		autoImport: true,
		components: {
			exclude: ['Form', 'FormField', 'Editor', 'Chart'],
		},
		options: {
			unstyled: true,
		},
	},
	vite: {
		css: {
			preprocessorMaxWorkers: true,
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					additionalData: '@use "@/assets/styles/animation.scss" as *;@use "@/assets/styles/tp/swiper.scss" as *;',
				},
			},
		},
		build: {
			rollupOptions: {
				output: {
					entryFileNames: '_nuxt/my-[name]-[hash].js',
					chunkFileNames: '_nuxt/my-[name]-[hash].js',
					assetFileNames: '_nuxt/my-[name]-[hash].[ext]',
				},
			},
		},
	},
	runtimeConfig: {
		public: {
			siteUrl: 'https://singingcicadas.com', // ✅ 給你全站都能用
		},
	},
});
