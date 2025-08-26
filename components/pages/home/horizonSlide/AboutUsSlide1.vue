<template>
	<div class="max-w-[960px] mx-auto aboutUs-bg">
		<div class="w-full flex flex-row justify-between items-center gap-20">
			<img class="w-full max-w-[514px]" alt="flower" src="../../../../assets/img/home/aboutUs/1.svg" />
			<div class="flex flex-col relative">
				<img
					class="absolute bottom-auto top-[-135px] right-[-20%] w-32"
					alt="feather"
					src="../../../../assets/img/home/aboutUs/1_feather.svg" />
				<img class="w-full max-w-[290px]" alt="wording" src="@/assets/img/home/aboutUs/word/1.svg" />
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
