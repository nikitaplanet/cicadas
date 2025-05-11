<template>
	<div class="pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center">
				<div class="w-full">
					<SectionNameTag>{{ aboutWording.ourTeam.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col justify-center items-center mt-8">
					<div class="w-full grid grid-cols-2">
						<div class="flex justify-end items-center relative">
							<img class="opacity-0" alt="Sharon" src="@/assets/img/about/sharon.svg" />
							<img class="absolute top-0 right-[-17px]" alt="Sharon" src="@/assets/img/about/sharon.svg" />
							<HeadingHomeMade class="absolute right-[160px] bottom-[-49px]">{{ aboutWording.ourTeam.sharon.name }}</HeadingHomeMade>
						</div>
						<div class="flex justify-start items-center relative">
							<img class="opacity-0" alt="Sharon" src="@/assets/img/about/hanyan.svg" />
							<img class="absolute top-0 left-[-17px]" alt="Sharon" src="@/assets/img/about/hanyan.svg" />
							<HeadingHomeMade class="absolute left-[235px] bottom-[-49px]">{{ aboutWording.ourTeam.hanyan.name }}</HeadingHomeMade>
						</div>
					</div>

					<div>
						<img class="w-32 mt-16" alt="hoverUs" src="@/assets/img/about/hoverUs.svg" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {aboutWording} from '@assets/wording/about/text.ts';
import {contentText} from '@assets/wording/home/text.ts';
import HeadingHomeMade from '@components/atoms/text/HeadingHomeMade.vue';
</script>

<style lang="scss" scoped></style>
