<template>
	<div
		v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
		class="w-full max-w-[960px] flex flex-col lg:flex-row justify-between items-center gap-10 transition-all duration-700">
		<img class="w-[400px]" alt="flower" src="@/assets/img/about/ourStory/5.svg" />
		<div class="flex flex-col relative">
			<img class="w-[350px]" alt="wording" src="@/assets/img/about/ourStory/word5.svg" />
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
