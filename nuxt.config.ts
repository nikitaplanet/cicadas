// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	target: 'static', // 重點
	nitro: {
		preset: 'cloudflare-pages',
	},
	app: {
		baseURL: '/', // 若部署在子目錄請改成 `/your-sub-path/`
	},
	compatibilityDate: '2025-05-15',
	devtools: {enabled: false},
	modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', '@primevue/nuxt-module'],
	css: ['~/assets/styles/index.scss'],
	primevue: {
		autoImport: true,
		components: {
			exclude: ['Form', 'FormField', 'Editor', 'Chart'],
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
