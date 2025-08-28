<template>
	<div class="w-full flex justify-center relative">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="w-full max-w-[960px] flex flex-col lg:flex-row justify-between items-center gap-10 transition-all duration-700">
			<div class="flex flex-col">
				<img class="w-[422px]" alt="wording" src="@/assets/img/about/ourStory/word4.svg" />
			</div>
			<div class="w-full max-w-[450px] h-[440px] flex justify-center items-center px-[60px] py-5">
				<img alt="flower" src="@/assets/img/about/ourStory/4.svg" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
