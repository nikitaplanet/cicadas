<template>
	<div class="aboutUs-bg pt-32 pb-32">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center">
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-28">
					<div class="flex flex-col">
						<img alt="wording" src="@/assets/img/home/aboutUs/word/2.svg" />
					</div>
					<div class="relative">
						<img class="w-[90%] max-w-[480px] ml-24" alt="flower2" src="@/assets/img/home/aboutUs/2.svg" />
						<img class="absolute bottom-[-130px] right-[-100px] w-[80px]" alt="feather" src="@/assets/img/home/aboutUs/feather2.svg" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
