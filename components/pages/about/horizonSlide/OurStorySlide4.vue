<template>
	<div class="aboutUs-bg">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center pt-8">
				<div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10">
					<img class="w-[90%] max-w-[350px]" alt="flower" src="@/assets/img/about/ourStory/4.svg" />
					<div class="flex flex-col relative">
						<img
							class="absolute bottom-[-135px] lg:top-[-180px] right-[-40%] xs:right-[-30px] lg:right-[-130px] w-32"
							alt="feather"
							src="@/assets/img/about/ourStory/feather4.svg" />
						<img class="w-full max-w-[350px] ml-24" alt="wording" src="@/assets/img/about/ourStory/word4.svg" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
</script>

<style lang="scss" scoped>
.aboutUs-bg {
	width: 100vw;
	background: var(--Surface-supportive-violet-light, #f3e6f7);
}
</style>
