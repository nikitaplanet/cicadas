<template>
	<footer class="nFooter-bg pt-32 pb-36 relative">
		<SectionContainer :has-min-height="false">
			<div class="w-full section-container flex flex-col justify-center items-center">
				<h2 class="font-h1 text-h1 italic font-semibold relative">
					{{ globalWording.footer.heading }}
					<span class="ease-in-out transition-opacity duration-500" :class="{'opacity-1': isHover, 'opacity-0': !isHover}">
						<img class="absolute right-[-270px] top-[-100px] w-[180px]" alt="cloud" src="@/assets/img/components/footer/cloud.svg" />
						<img class="absolute left-[-200px] top-[10px] w-[130px]" alt="cloud" src="@/assets/img/components/footer/eye.svg" />
					</span>
				</h2>
				<p v-html="globalWording.footer.description" class="text-center block font-h2sans text-body18 italic font-medium mt-5"></p>

				<NLink @mouseleave="handleHoverLeveButton" @mouseover="handleHoverButton" class="group relative w-[215px] h-[51px] mt-10" to="/help">
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
			<div class="w-screen absolute bottom-0 left-0">
				<div class="w-11/12 m-auto flex justify-between font-label text-labelMd font-semibold text-text-alternate italic p-5">
					<div>{{ globalWording.footer.domain }}</div>
					<div>© 2025 {{ globalWording.footer.copyright }}</div>
					<div class="flex flex-row gap-6">
						<NLink
							v-for="item in socialInfoAry"
							:href="item.url"
							class="font-label text-labelMd font-semibold text-text-alternate italic transition ease-in-out hover:underline hover:underline-offset-4"
							target="_blank"
							>{{ item.title }}</NLink
						>
					</div>
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
	background: var(--SC-Gradient-orange-footer, linear-gradient(180deg, rgba(249, 223, 213, 0) 24.93%, #dd5621 92.44%));
}
</style>
