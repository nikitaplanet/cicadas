<template>
	<nav class="w-full flex justify-between items-center px-8">
		<div class="flex gap-10">
			<NLink to="/">
				<img alt="logo default" src="@/assets/img/components/nav/navLogo.svg" />
			</NLink>

			<div class="flex gap-1">
				<NLink
					v-for="(item, index) in menu"
					@mouseleave="item.isHover = false"
					@mouseover="item.isHover = true"
					:key="item.url"
					:to="item.url"
					class="group font-label text-def text-labelMd italic relative font-semibold">
					<img
						:src="navImages[index]"
						class="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						:class="{'opacity-100': checkLinkActive(item)}"
						alt="bg" />
					<span class="w-full text-center absolute bottom-1 left-0 z-10">{{ item.label }}</span>
				</NLink>
			</div>
		</div>

		<!--Let's talk-->
		<NLink class="group relative" to="/form">
			<img
				class="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
				alt="bg"
				src="@/assets/img/components/nav/talk__hover.svg" />
			<img
				class="object-contain absolute left-0 bottom-1 group-hover:opacity-0 transition-opacity duration-200"
				alt="bg"
				src="@/assets/img/components/nav/talk__default.svg" />
		</NLink>
	</nav>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import router from '@/router';

import {navMenu} from '@assets/wording/global/menu.ts';
import NLink from '@components/atoms/link/NLink.vue';
import {NavMenuItem} from '@components/organisms/navbar/index.ts';

const navImages = navMenu.map((_, index) => new URL(`../../../assets/img/components/nav/menu${index}.svg`, import.meta.url).href);
const menu = ref<NavMenuItem[]>(
	navMenu.map((item) => {
		return {
			...item,
			isHover: false,
		};
	}),
);

const checkLinkActive = (item: NavMenuItem) => {
	return router.currentRoute.value.name === item.name;
};

import {useRoute} from 'vue-router';
</script>

<style lang="scss" scoped></style>
