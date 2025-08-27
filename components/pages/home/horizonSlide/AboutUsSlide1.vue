<template>
	<div class="w-full flex justify-center relative">
		<img
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="absolute top-[-85px] right-[2%] w-32 transition-all duration-500"
			alt="feather"
			src="../../../../assets/img/home/aboutUs/1_feather.svg" />

		<div class="max-w-[960px] mx-auto aboutUs-bg">
			<div class="w-full flex flex-row justify-between items-center gap-20">
				<img class="w-full max-w-[514px]" alt="flower" src="../../../../assets/img/home/aboutUs/1.svg" />
				<div class="flex flex-col relative">
					<img class="w-full max-w-[290px]" alt="wording" src="@/assets/img/home/aboutUs/word/1.svg" />
				</div>
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
