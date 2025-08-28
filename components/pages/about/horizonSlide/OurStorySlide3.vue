<template>
	<div class="w-full flex justify-center relative">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full max-w-[960px] flex flex-col lg:flex-row justify-between items-center gap-10 transition-all duration-700">
			<img
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="absolute left-[10%] bottom-[-60px] w-32 transition-all duration-700"
				alt="feather"
				src="@/assets/img/about/ourStory/feather2.svg" />

			<div class="w-full max-w-[450px] h-[440px] flex justify-center items-center py-5 px-[13px]">
				<img alt="flower" src="@/assets/img/about/ourStory/3.svg" />
			</div>
			<div class="flex flex-col relative">
				<img class="w-[422px]" alt="wording" src="@/assets/img/about/ourStory/word3.svg" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
