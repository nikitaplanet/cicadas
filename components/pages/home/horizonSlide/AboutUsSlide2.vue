<template>
	<div class="w-[960px] mx-auto aboutUs-bg">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full flex flex-col lg:flex-row justify-center items-center gap-5 transition-all duration-500">
			<div class="flex">
				<img class="w-[422px]" alt="wording" src="@/assets/img/home/aboutUs/word/2.svg" />
			</div>
			<div class="relative">
				<img class="w-full max-w-[478px]" alt="flower2" src="@/assets/img/home/aboutUs/2.svg" />
				<img class="absolute bottom-[-130px] right-[-100px] w-[80px]" alt="feather" src="@/assets/img/home/aboutUs/feather2.svg" />
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
