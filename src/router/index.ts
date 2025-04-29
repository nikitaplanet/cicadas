import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'HomePage',
		component: () => import('@/views/home/HomePage.vue'),
		meta: {
			title: 'Cicadas',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'Error404Page',
		component: () => import('@/views/error/Error404Page.vue'),
		meta: {
			title: ' 404 頁面 - Cicadas',
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
	document.title = (to.meta.title as string) || 'LIANG LIN  ∣ 00';
	next();
});

export default router;
