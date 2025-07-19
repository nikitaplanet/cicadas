<template>
	<div class="aboutUs-bg px-6 py-[120px] flex flex-col gap-[100px]">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-full max-w-[500px]" alt="flower" src="@/assets/img/about/ourStory/1.svg" />
			<img class="w-full max-w-[500px] px-2" alt="flower" src="@/assets/img/about/ourStory/word1_m.svg" />
			<div class="w-full flex flex-row items-center justify-end">
				<img class="w-[120px]" alt="feather" src="@/assets/img/about/ourStory/feather.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-full max-w-[500px]" alt="flower" src="@/assets/img/about/ourStory/2.svg" />
			<img class="w-full max-w-[500px]" alt="flower" src="@/assets/img/about/ourStory/word2_m.svg" />
			<div class="w-full flex flex-row items-center justify-start pl-10">
				<img class="w-[120px]" alt="feather" src="@/assets/img/about/ourStory/feather2.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-full max-w-[500px] px-3" alt="flower" src="@/assets/img/about/ourStory/word3_m.svg" />
			<img class="w-[90%] max-w-[430px]" alt="flower" src="@/assets/img/about/ourStory/3.svg" />
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-full max-w-[500px]" alt="flower" src="@/assets/img/about/ourStory/word4_m.svg" />
			<img class="w-[75%] max-w-[400px]" alt="flower" src="@/assets/img/about/ourStory/4.svg" />
			<div class="w-full flex flex-row items-center justify-start pl-10">
				<img class="w-[120px]" alt="feather" src="@/assets/img/about/ourStory/feather4.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-[90%] max-w-[450px]" alt="flower" src="@/assets/img/about/ourStory/word5_m.svg" />
			<img class="w-[90%] max-w-[430px]" alt="flower" src="@/assets/img/about/ourStory/5.svg" />
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
