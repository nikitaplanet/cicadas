<template>
	<nav class="w-full">
		<!--Desk-->
		<div class="hidden lg:flex w-full justify-between items-center px-8">
			<div class="flex gap-10">
				<NLink to="/">
					<img v-if="!isScrolledPastLanding" alt="logo default" src="@/assets/img/components/nav/navLogo.svg" />
					<img v-else alt="logo default" src="@/assets/img/components/nav/navLogo_w.svg" />
				</NLink>

				<div class="flex gap-1">
					<NLink
						v-for="(item, index) in menu"
						@mouseleave="item.isHover = false"
						@mouseover="item.isHover = true"
						:key="item.url"
						:to="item.url"
						class="group font-label text-def text-labelMd italic relative font-semibold"
						:class="{'ml-2': index === 2, 'ml-[-3px]': index === 3}">
						<img
							:src="item.bgImage"
							class="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							:class="{'opacity-100': checkLinkActive(item)}"
							alt="bg" />
						<span
							class="w-full text-center absolute bottom-1 left-0 z-10"
							:class="{'text-text-alternate group-hover:text-black': isScrolledPastLanding && !checkLinkActive(item)}"
							>{{ item.label }}</span
						>
					</NLink>
					<NLink @click="handleShowCommon" class="ml-[-12px] group font-label text-def text-labelMd italic relative font-semibold">
						<img
							class="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							alt="bg"
							src="@/assets/img/components/nav/menu4.svg" />
						<span
							class="w-full text-center absolute bottom-1 left-0 z-10"
							:class="{'text-text-alternate group-hover:text-black': isScrolledPastLanding}"
							>{{ globalWording.nav.button.common }}</span
						>
					</NLink>
				</div>
			</div>

			<!--Let's talk-->
			<NLink class="group relative" data-tally-emoji-animation="wave" data-tally-emoji-text="👋" data-tally-open="mZ1K9z">
				<img
					v-if="!isScrolledPastLanding"
					class="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
					alt="bg"
					src="@/assets/img/components/nav/talk__hover.svg" />
				<img
					v-if="isScrolledPastLanding"
					class="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
					alt="bg"
					src="@/assets/img/components/nav/talk__w__hover.svg" />
				<img
					v-if="!isScrolledPastLanding"
					class="object-contain absolute left-0 bottom-1 group-hover:opacity-0 transition-opacity duration-200"
					alt="bg"
					src="@/assets/img/components/nav/talk__default.svg" />
				<img
					v-if="isScrolledPastLanding"
					class="object-contain absolute left-0 bottom-1 group-hover:opacity-0 transition-opacity duration-200"
					alt="bg"
					src="@/assets/img/components/nav/talk__w.svg" />
			</NLink>
		</div>

		<!--Mobile-->
		<div class="w-full px-6 flex justify-between items-center lg:hidden">
			<div>
				<NLink to="/">
					<img
						v-if="!isLight && !isScrolledPastLanding"
						class="h-[24px]"
						alt="logo default"
						src="@/assets/img/components/nav/navLogo.svg" />
					<img v-else-if="isLight || isScrolledPastLanding" alt="logo default" src="@/assets/img/components/nav/navLogo_w.svg" />
				</NLink>
			</div>
			<div>
				<button @click="handleToggleMenuOverlay" type="button">
					<img v-if="!isLight && !isScrolledPastLanding" alt="Hamburger" src="@/assets/img/icons/menu/hamburger.svg" />
					<img v-else-if="isLight || isScrolledPastLanding" alt="Hamburger" src="@/assets/img/icons/menu/hamburger_w.svg" />
				</button>
			</div>
		</div>
		<ClientOnly>
			<Teleport to="body">
				<!--Overlay-->
				<transition mode="out-in" name="fade">
					<div
						v-if="isShowMenuOverlay"
						class="flex w-screen px-6 h-full fixed top-0 left-0 z-30 bg-[linear-gradient(180deg,var(--sc-color-surface-primary,#DD5621)_7.56%,var(--sc-color-surface-tertiary,#F0E3DE)_50%)]"
						:class="{
							'flex-col-reverse bg-[linear-gradient(180deg,var(--sc-color-surface-primary,#DD5621)_7.56%,var(--sc-color-surface-tertiary,#F0E3DE)_50%)]':
								isNavBottom,
							'flex-col bg-[linear-gradient(180deg,var(--sc-color-surface-tertiary,#F0E3DE)_50%,var(--sc-color-surface-primary,#DD5621)_92.44%)]':
								!isNavBottom,
						}">
						<div class="w-full flex justify-between items-center" :class="{'py-[23px]': isNavBottom, 'py-[23px] ': !isNavBottom}">
							<NLink @click="handleCloseMenuOverlay" to="/">
								<img class="h-6" alt="logo default" src="@/assets/img/components/nav/navLogo.svg" />
							</NLink>
							<button @click="handleToggleMenuOverlay" type="button">
								<img alt="closeMenu" src="@/assets/img/icons/menu/closeMenu.svg" />
							</button>
						</div>
						<!--MenuList-->
						<div class="w-full pb-16 flex-grow flex flex-col justify-center items-center gap-5">
							<NLink
								v-for="item in menu"
								@click="handleCloseMenuOverlay"
								@mouseleave="item.isHover = false"
								@mouseover="item.isHover = true"
								:key="item.url"
								:to="item.url"
								class="group font-label text-def italic relative font-semibold h-[22px]">
								<img
									:alt="item.label"
									:src="item.bgImage"
									class="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									:class="{'opacity-100': checkLinkActive(item)}" />
								<span class="w-full text-scaleDef text-center absolute bottom-1 left-0 z-10">{{ item.label }}</span>
							</NLink>
							<NLink @click="handleShowCommon" class="group font-label text-def italic relative font-semibold h-[22px]">
								<img
									class="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									alt="common"
									src="@/assets/img/components/nav/menu4.svg" />
								<span class="w-full text-scaleDef text-center absolute bottom-1 left-0 z-10">{{
									globalWording.nav.button.common
								}}</span>
							</NLink>
						</div>
					</div>
				</transition>
			</Teleport>
		</ClientOnly>
	</nav>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';
import {globalWording, navMenu} from '@/assets/wording/global/menu';
import NLink from '@/components/atoms/link/NLink.vue';
import type {NavMenuItem} from '~/components/organisms/navbar/index';

const emit = defineEmits(['showCommon']);

interface Props {
	isNavBottom: boolean;
	isLight: boolean;
	isScrolledPastLanding: boolean;
}

withDefaults(defineProps<Props>(), {
	isNavBottom: false,
	isLight: false,
	isScrolledPastLanding: false,
});

const route = useRoute();

const menu = ref<NavMenuItem[]>(
	navMenu.map((item) => {
		return {
			...item,
			isHover: false,
		};
	}),
);

const checkLinkActive = (item: NavMenuItem) => {
	return route.path.includes(item.url);
};

const handleShowCommon = () => {
	isShowMenuOverlay.value = false;
	emit('showCommon');
};

/* Mobile Menu */
const isShowMenuOverlay = ref(false);
const handleToggleMenuOverlay = () => {
	isShowMenuOverlay.value = !isShowMenuOverlay.value;
};

const handleCloseMenuOverlay = () => {
	isShowMenuOverlay.value = false;
};

watch(
	() => isShowMenuOverlay.value,
	(value) => {
		document.body.classList.toggle('overflow-hidden', value);
	},
);
</script>

<style lang="scss" scoped></style>
