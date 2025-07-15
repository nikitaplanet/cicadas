// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: true,
	target: 'server', // 重點
	nitro: {
		preset: 'cloudflare-pages',
		prerender: {
			crawlLinks: true,
			routes: ['/', '/campaigns/1', '/campaigns/2', '/campaigns/3'],
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
			],
			script: [
				{src: 'https://tally.so/widgets/embed.js', async: true},
				// {
				// 	id: 'Cookiebot',
				// 	src: 'https://consent.cookiebot.com/uc.js',
				// 	'data-cbid': '5efa9b8a-2cc4-485e-9d86-54b078df59e8',
				// 	'data-blockingmode': 'auto',
				// 	type: 'text/javascript',
				// },
			],
		},
	},
	compatibilityDate: '2025-05-15',
	devtools: {enabled: false},
	modules: ['nuxt-swiper', '@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
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
	},
});
