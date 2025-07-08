// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: true,
	target: 'static', // 重點
	nitro: {
		preset: 'cloudflare-pages',
	},
	app: {
		baseURL: '/',
		head: {
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com'
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous'
				},
				{
					rel: 'preload',
					href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Besley:ital,wght@0,400..900;1,400..900&family=Homemade+Apple&family=Hanken+Grotesk&display=swap',
					as: 'style'
				}
			]
		}
	},
	compatibilityDate: '2025-05-15',
	devtools: {enabled: false},
	modules: ['nuxt-swiper', '@primevue/nuxt-module', '@nuxtjs/tailwindcss',],
	css: [
		'~/assets/styles/index.scss',
	],
	primevue: {
		autoImport: true,
		components: {
			exclude: ['Form', 'FormField', 'Editor', 'Chart'],
		},
		options: {
			unstyled: true,
		}
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
	},
});
