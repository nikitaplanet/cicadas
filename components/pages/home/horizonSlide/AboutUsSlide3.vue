<template>
	<div class="relative aboutUs-bg">
		<SectionContainer :hasMinHeight="false">
			<div
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="w-full flex flex-col justify-center items-center transition-all duration-500">
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 my-28">
					<div class="flex flex-col">
						<img class="w-full min-w-[350px] max-w-[350px]" alt="" src="@/assets/img/home/aboutUs/word/3.svg" />
					</div>
					<img class="w-[90%] max-w-[580px] pb-5 ml-24" alt="bird" src="@/assets/img/home/aboutUs/3.svg" />
				</div>
			</div>
		</SectionContainer>

		<NLink class="group absolute bottom-[120px] right-[130px] w-[130px] h-[25px]" to="/about">
			<div class="w-full relative">
				<img
					class="absolute top-0 left-0 cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300"
					alt="feather"
					src="@/assets/img/home/aboutUs/learnMore.svg" />
				<img
					class="absolute top-0 left-0 w-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					alt="feather"
					src="@/assets/img/home/aboutUs/learnMore_hover.svg" />
			</div>
		</NLink>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {contentText} from '@/assets/wording/home/text';
import NLink from '~/components/atoms/link/NLink.vue';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
