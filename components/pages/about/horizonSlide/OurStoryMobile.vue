<template>
	<div class="aboutUs-bg px-4 py-[120px] flex flex-col gap-[100px]">
		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-full max-w-[500px]" alt="flower" src="@/assets/img/about/ourStory/mobile1.svg" />
			<div class="w-full flex flex-row items-center justify-end">
				<img class="w-[120px]" alt="feather" src="@/assets/img/about/ourStory/feather.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-full max-w-[500px]" alt="flower" src="@/assets/img/about/ourStory/mobile2.svg" />
			<div class="w-full flex flex-row items-center justify-start pl-10">
				<img class="w-[120px]" alt="feather" src="@/assets/img/about/ourStory/feather2.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-[90%] max-w-[430px]" alt="flower" src="@/assets/img/about/ourStory/mobile3.svg" />
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-[90%] max-w-[420px]" alt="flower" src="@/assets/img/about/ourStory/mobile4.svg" />
			<div class="w-full flex flex-row items-center justify-start pl-10">
				<img class="w-[120px]" alt="feather" src="@/assets/img/about/ourStory/feather4.svg" />
			</div>
		</div>

		<div
			v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
			class="flex flex-col items-center justify-start gap-[60px] transition-all duration-700">
			<img class="w-[90%] max-w-[430px]" alt="flower" src="@/assets/img/about/ourStory/mobile5.svg" />
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
