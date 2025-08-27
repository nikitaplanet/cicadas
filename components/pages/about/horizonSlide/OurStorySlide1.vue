<template>
	<div class="w-full flex justify-center relative">
		<img
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="absolute right-[3%] top-[-50px] w-32 transition-all duration-700"
			alt="feather"
			src="../../../../assets/img/about/ourStory/feather.svg" />
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full max-w-[960px] flex flex-col lg:flex-row justify-between items-center gap-16 mt-8 transition-all duration-700">
			<img class="w-full max-w-[480px]" alt="flower" src="../../../../assets/img/about/ourStory/1.svg" />
			<div class="flex flex-col relative">
				<img class="w-[340px]" alt="wording" src="@/assets/img/about/ourStory/word1.svg" />
			</div>
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
