import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import {globalWording} from '@assets/wording/global/menu.ts';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'HomePage',
		component: () => import('@/views/home/HomePage.vue'),
		meta: {
			title: `${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/about',
		name: 'AboutPage',
		component: () => import('@/views/about/AboutPage.vue'),
		meta: {
			title: `${globalWording.meta.title.about} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/campaigns',
		name: 'CampaignsPage',
		component: () => import('@/views/campaigns/CampaignsPage.vue'),
		meta: {
			title: `${globalWording.meta.title.campaigns} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/studio',
		name: 'StudioPage',
		component: () => import('@/views/studio/StudioPage.vue'),
		meta: {
			title: `${globalWording.meta.title.studio} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/workshops',
		name: 'WorkshopsPage',
		component: () => import('@/views/workshops/WorkshopsPage.vue'),
		meta: {
			title: `${globalWording.meta.title.workshops} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'Error404Page',
		component: () => import('@/views/error/Error404Page.vue'),
		meta: {
			title: `${globalWording.meta.title.error} | ${globalWording.meta.title.main}`,
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	scrollBehavior() {
		return {top: 0};
	},
});

router.beforeEach((to, from, next) => {
	document.title = (to.meta.title as string) || 'LIANG LIN  ∣ 00';
	next();
});

export default router;
