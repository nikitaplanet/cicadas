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
