<template>
	<div class="w-full flex justify-center relative">
		<img
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="absolute left-[3%] bottom-[-80px] w-32 transition-all duration-700"
			alt="feather"
			src="@/assets/img/about/ourStory/feather2.svg" />

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="relative w-full max-w-[960px] flex flex-col lg:flex-row justify-between items-center gap-10 transition-all duration-700">
			<div class="flex flex-col">
				<img class="w-[350px]" alt="wording" src="@/assets/img/about/ourStory/word2.svg" />
			</div>
			<img class="w-[480px]" alt="flower" src="@/assets/img/about/ourStory/2.svg" />
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
