<template>
	<div class="w-full flex justify-center relative">
		<img
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="absolute right-[5%] bottom-[-50px] w-32 transition-all duration-700"
			alt="feather"
			src="@/assets/img/about/ourStory/feather4.svg" />
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full max-w-[960px] flex flex-col lg:flex-row justify-between items-center gap-10 transition-all duration-700">
			<div class="w-full max-w-[450px] h-[440px] flex justify-center items-center py-[52px] px-[44px]">
				<img alt="flower" src="@/assets/img/about/ourStory/5_desk.svg" />
			</div>

			<div class="flex flex-col relative">
				<img class="w-[422px]" alt="wording" src="@/assets/img/about/ourStory/word5.svg" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
