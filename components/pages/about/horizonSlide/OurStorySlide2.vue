<template>
	<div class="w-full flex justify-center relative">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="relative w-full max-w-[960px] flex flex-col lg:flex-row justify-between items-center gap-10 transition-all duration-700">
			<div class="flex flex-col">
				<img class="w-[422px]" alt="wording" src="@/assets/img/about/ourStory/word2.svg" />
			</div>

			<div class="w-full max-w-[450px] h-[440px] flex justify-center items-center py-[30px] px-[15px]">
				<img alt="flower" src="@/assets/img/about/ourStory/2.svg" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
