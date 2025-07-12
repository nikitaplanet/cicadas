<template>
	<footer
		v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
		class="nFooter-bg pt-0 pb-10 lg:pt-32 lg:pb-36 relative transition-all duration-700">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full section-container flex flex-col justify-center items-center">
				<h2 class="font-h1 text-scale2XL lg:text-h1 italic font-semibold relative">
					{{ heading }}
					<span class="ease-in-out transition-all duration-500 lg:block" :class="{'lg:opacity-1': isHover, 'lg:opacity-0': !isHover}">
						<img
							class="absolute right-[-55px] top-[-60px] w-[70px] xs:w-[60px] xs:right-[-25px] lg:right-[-270px] lg:top-[-100px] lg:w-[180px]"
							alt="cloud"
							src="@/assets/img/components/footer/cloud.svg" />
						<img
							class="absolute w-[60px] left-[-70px] top-[160px] xs:w-[50px] xs:left-[-20px] lg:left-[-230px] lg:top-[10px] lg:w-[130px]"
							alt="cloud"
							src="@/assets/img/components/footer/eye.svg" />
					</span>
				</h2>
				<p v-html="description" class="text-center block font-h2sans text-body lg:text-body18 font-medium mt-5"></p>

				<NLink
					@mouseleave="handleHoverLeveButton"
					@mouseover="handleHoverButton"
					class="flex items-center justify-center group relative w-[215px] h-[51px] mt-12 xs:mb-20"
					data-tally-emoji-animation="wave"
					data-tally-emoji-text="👋"
					data-tally-open="mZ1K9z">
					<img
						class="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
						alt="bg"
						src="@/assets/img/components/footer/help_hover.svg" />
					<img
						class="object-contain absolute left-[32px] bottom-[8px] group-hover:opacity-0 transition-opacity duration-200"
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
import {ref, reactive, computed} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import NLink from '@/components/atoms/link/NLink.vue';
import {globalWording} from '@/assets/wording/global/menu';
import dayjs from 'dayjs';
import {ROUTER_NAME} from '@/assets/js/enum/routerEnum';

const route = useRoute();
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
		url: 'https://www.facebook.com/thesingingcicadas',
	},
	{
		title: 'Instagram',
		url: 'https://www.instagram.com/singingcicadasco/',
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/company/13634014/admin/dashboard/',
	},
]);

const heading = computed(() => {
	if (route.path === '/workshops') {
		return globalWording.footer.heading2;
	} else {
		return globalWording.footer.heading;
	}
});

const description = computed(() => {
	if (route.path === '/workshops') {
		return globalWording.footer.description2;
	} else {
		return globalWording.footer.description;
	}
});
</script>

<style lang="scss" scoped>
.section-container {
	min-height: 65vh;
}

.nFooter-bg {
	background: linear-gradient(180deg, rgba(249, 223, 213, 0) 24.93%, #dd5621 92.44%);
}
</style>
