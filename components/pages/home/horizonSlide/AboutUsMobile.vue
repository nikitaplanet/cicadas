<template>
	<div class="aboutUs-bg px-4 py-[120px] flex flex-col gap-[100px]">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-full max-w-[515px]" alt="flower" src="@/assets/img/home/aboutUs/1.svg" />
			<img class="w-11/12 max-w-[400px]" alt="word" src="@/assets/img/home/aboutUs/word/1_m.svg" />
			<div class="w-full flex flex-row items-center justify-end">
				<img alt="feather" src="@/assets/img/home/aboutUs/1_feather.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-11/12 max-w-[515px]" alt="flower" src="@/assets/img/home/aboutUs/2.svg" />
			<img class="w-11/12 max-w-[400px]" alt="word" src="@/assets/img/home/aboutUs/word/2_m.svg" />
			<div class="w-full flex flex-row items-center justify-start mt-8">
				<img alt="feather" src="@/assets/img/home/aboutUs/feather2.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-[85%] max-w-[515px]" alt="flower" src="@/assets/img/home/aboutUs/3.svg" />
			<img class="w-11/12 max-w-[400px]" alt="word" src="@/assets/img/home/aboutUs/word/3_m.svg" />
			<router-link class="w-full flex flex-row items-center justify-center mt-8" to="/">
				<img alt="feather" src="@/assets/img/home/aboutUs/learnMore.svg" />
			</router-link>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.aboutUs-bg {
	width: 100vw;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
