// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: true,
	target: 'server',
	nitro: {
		// preset: 'cloudflare-pages',
		preset: 'node-server',
		prerender: {
			crawlLinks: true,
			routes: ['/', '/campaigns/1', '/campaigns/2', '/campaigns/3'],
		},
	},
	app: {
		baseURL: '/',
		head: {
			title: 'Cicadas',

			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0',
				},
				{
					hid: 'description',
					name: 'description',
					content:
						'Through data-driven insights and compelling storytelling,\n' +
						'we craft powerful campaigns that amplify the voices of\n' +
						'changemakers across Asia. Together, we’ll transform your message into a movement that changes perspectives and catalyses action.',
				},
			],
			script: [
				{src: 'https://tally.so/widgets/embed.js', async: true},
				{
					id: 'Cookiebot',
					src: 'https://consent.cookiebot.com/uc.js',
					'data-cbid': '5efa9b8a-2cc4-485e-9d86-54b078df59e8',
					'data-blockingmode': 'auto',
					type: 'text/javascript',
				},
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
});
