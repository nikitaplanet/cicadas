<template>
	<footer class="nFooter-bg pt-32 pb-10 lg:pb-36 relative">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full section-container flex flex-col justify-center items-center">
				<h2 class="font-h1 text-scale2XL lg:text-h1 italic font-semibold relative">
					{{ globalWording.footer.heading }}
					<span class="ease-in-out transition-all duration-500 lg:block" :class="{'opacity-1': isHover, 'opacity-0': !isHover}">
						<img
							class="absolute right-[-55px] top-[-60px] w-[70px] lg:right-[-270px] lg:top-[-100px] lg:w-[180px]"
							alt="cloud"
							src="@/assets/img/components/footer/cloud.svg" />
						<img
							class="absolute w-[60px] left-[-70px] top-[160px] lg:left-[-230px] lg:top-[10px] lg:w-[130px]"
							alt="cloud"
							src="@/assets/img/components/footer/eye.svg" />
					</span>
				</h2>
				<p
					v-html="globalWording.footer.description"
					class="text-center block font-h2sans text-body lg:text-body18 italic font-medium mt-5"></p>

				<NLink
					@mouseleave="handleHoverLeveButton"
					@mouseover="handleHoverButton"
					class="group relative w-[215px] h-[51px] mt-12"
					data-tally-emoji-animation="wave"
					data-tally-emoji-text="👋"
					data-tally-open="mZ1K9z">
					<img
						class="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
						alt="bg"
						src="@/assets/img/components/footer/help_hover.svg" />
					<img
						class="object-contain absolute left-0 bottom-0 group-hover:opacity-0 transition-opacity duration-200"
						alt="bg"
						src="@/assets/img/components/footer/help_def.svg" />
				</NLink>
			</div>

			<!--social info-->
			<div class="w-full absolute bottom-0 left-0">
				<div
					class="w-full lg:px-8 m-auto flex flex-col items-center gap-5 justify-start lg:flex-row lg:justify-between font-label text-scale2XS lg:text-labelSm font-semibold text-text-alternate italic p-5">
					<div>{{ globalWording.footer.domain }}</div>
					<div class="hidden lg:block">© {{ currentYear }} {{ globalWording.footer.copyright }}</div>
					<div class="flex flex-row gap-6">
						<NLink
							v-for="item in socialInfoAry"
							:hasUnderline="false"
							:href="item.url"
							class="font-label text-scale2XS lg:text-labelSm font-semibold text-text-alternate italic transition ease-in-out hover:underline hover:underline-offset-4"
							target="_blank"
							>{{ item.title }}</NLink
						>
					</div>
					<div class="block lg:hidden">© {{ currentYear }} {{ globalWording.footer.copyright }}</div>
				</div>
			</div>
		</SectionContainer>
	</footer>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';
import SectionContainer from '@components/layout/SectionContainer.vue';
import NLink from '@components/atoms/link/NLink.vue';
import {globalWording} from '@assets/wording/global/menu.ts';
import dayjs from 'dayjs';

const currentYear = dayjs().year();

const isHover = ref(false);
const handleHoverButton = () => {
	isHover.value = true;
};
const handleHoverLeveButton = () => {
	isHover.value = false;
};

const socialInfoAry = reactive([
	{
		title: 'Facebook',
		url: '',
	},
	{
		title: 'Instagram',
		url: '',
	},
	{
		title: 'LinkedIn',
		url: '',
	},
]);
</script>

<style lang="scss" scoped>
.section-container {
	min-height: 65vh;
}

.nFooter-bg {
	background: linear-gradient(180deg, rgba(249, 223, 213, 0) 24.93%, #dd5621 92.44%);
}
</style>
