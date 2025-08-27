<template>
	<div class="w-full flex justify-center relative">
		<img
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="absolute bottom-[-90px] left-[2%] w-[80px] transition-all duration-700"
			alt="feather"
			src="@/assets/img/home/aboutUs/feather2.svg" />
		<div class="w-[960px] mx-auto aboutUs-bg">
			<div
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="w-full flex flex-col lg:flex-row justify-center items-center gap-5 transition-all duration-700">
				<div class="flex">
					<img class="w-[422px]" alt="wording" src="@/assets/img/home/aboutUs/word/2.svg" />
				</div>
				<div class="relative">
					<img class="w-full max-w-[478px]" alt="flower2" src="@/assets/img/home/aboutUs/2.svg" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
