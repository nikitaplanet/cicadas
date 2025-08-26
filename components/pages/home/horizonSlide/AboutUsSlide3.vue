<template>
	<div class="w-[960px] mx-auto aboutUs-bg">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full flex flex-col lg:flex-row justify-between items-center gap-20 mb-20 transition-all duration-500">
			<img class="w-[90%] max-w-[512px]" alt="bird" src="@/assets/img/home/aboutUs/3.svg" />
			<div class="flex flex-col">
				<img class="w-[320px]" alt="" src="@/assets/img/home/aboutUs/word/3.svg" />
			</div>
		</div>

		<div class="flex justify-center items-center">
			<NLink class="group bottom-[120px] right-[130px] w-[130px] h-[25px]" to="/about">
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
	</div>
</template>

<script lang="ts" setup>
import NLink from '~/components/atoms/link/NLink.vue';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
