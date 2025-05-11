<template>
	<div class="sliderSection">
		<SectionContainer class="pt-16 pb-20">
			<div class="w-full">
				<HeadingHomeMade>{{ contentText.sliderSection.header }}</HeadingHomeMade>
			</div>

			<div class="w-full h-[500px] flex items-center justify-center mt-12">
				<div class="w-9/12 max-w-[790px] relative">
					<img class="w-full" alt="ContentBack" src="@/assets/img/home/sliderSection/content_background.svg" />
					<div class="w-full absolute top-[90px] left-0 p-12 flex justify-between items-center gap-5">
						<div class="flex flex-col gap-2 justify-center items-center pr-14">
							<div class="text-h5 font-h5 font-semibold italic">{{ contentText.sliderSection.content1.title }}</div>
							<img class="w-12" alt="HERFUND" src="@/assets/img/home/sliderSection/content1_logo.svg" />
						</div>
						<p class="text-body18 italic font-body font-semibold">{{ contentText.sliderSection.content1.content }}</p>
					</div>

					<button class="absolute right-[-100px] top-[50%]" type="button">
						<img alt="Arrow" src="@/assets/img/home/arrow.svg" />
					</button>

					<div class="w-full flex justify-center items-center gap-3 mt-9">
						<template v-for="item in sliderDots">
							<button v-if="!item.isActive" type="button">
								<img alt="" src="@/assets/img/icons/sliderDots/dot_default.svg" />
							</button>

							<img v-else alt="active dot" src="@/assets/img/icons/sliderDots/dot_active.svg" />
						</template>
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {ref} from 'vue';
import {contentText} from '@/assets/wording/home/text.ts';
import HeadingHomeMade from '@components/atoms/text/HeadingHomeMade.vue';

const contents = ref([]);
const sliderDots = ref([
	{
		id: 0,
		isActive: true,
	},
	{
		id: 1,
		isActive: false,
	},
	{
		id: 2,
		isActive: false,
	},
	{
		id: 3,
		isActive: false,
	},
	{
		id: 4,
		isActive: false,
	},
]);
</script>

<style lang="scss" scoped>
.sliderSection {
}
</style>
