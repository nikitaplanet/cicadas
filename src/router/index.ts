import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import {globalWording} from '@assets/wording/global/menu.ts';
import {ROUTER_NAME} from '@assets/js/enum/routerEnum.ts';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: ROUTER_NAME.HOME_PAGE,
		component: () => import('@/views/home/HomePage.vue'),
		meta: {
			title: `${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/about',
		name: ROUTER_NAME.ABOUT_PAGE,
		component: () => import('@/views/about/AboutPage.vue'),
		meta: {
			title: `${globalWording.meta.title.about} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/campaigns',
		name: ROUTER_NAME.CAMPAIGNS_PAGE,
		component: () => import('@/views/campaigns/CampaignsPage.vue'),
		meta: {
			title: `${globalWording.meta.title.campaigns} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/studio',
		name: ROUTER_NAME.STUDIO_PAGE,
		component: () => import('@/views/studio/StudioPage.vue'),
		meta: {
			title: `${globalWording.meta.title.studio} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/workshops',
		name: ROUTER_NAME.WORKSHOPS_PAGE,
		component: () => import('@/views/workshops/WorkshopsPage.vue'),
		meta: {
			title: `${globalWording.meta.title.workshops} | ${globalWording.meta.title.main}`,
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: ROUTER_NAME.ERROR_404_PAGE,
		component: () => import('@/views/error/Error404Page.vue'),
		meta: {
			title: `${globalWording.meta.title.error} | ${globalWording.meta.title.main}`,
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	scrollBehavior() {
		return {top: 0};
	},
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
