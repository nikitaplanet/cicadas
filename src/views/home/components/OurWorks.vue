<template>
	<div class="section3-bg py-28">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full grid grid-cols-12">
				<div class="col-span-5 flex flex-col">
					<SectionNameTag>Our Works</SectionNameTag>
					<div class="relative p-16 mt-3">
						<div
							:class="{
								'inline-block opacity-100': hoverImage === 0,
								'hidden opacity-0': hoverImage !== 0,
							}">
							<img alt="1" src="@/assets/img/home/section3/1.png" />
							<img class="absolute top-6 left-4" alt="1 decor" src="@/assets/img/home/section3/1_decor.svg" />
						</div>

						<div :class="{'inline-block opacity-100': hoverImage === 1, 'hidden opacity-0': hoverImage !== 1}">
							<img alt="2" src="@/assets/img/home/section3/2.png" />
							<img class="absolute top-14 left-4" alt="2 decor" src="@/assets/img/home/section3/2_decor.svg" />
						</div>

						<div :class="{'inline-block opacity-100': hoverImage === 2, 'hidden opacity-0': hoverImage !== 2}">
							<img alt="3" src="@/assets/img/home/section3/3.png" />
							<img class="absolute top-2 left-5" alt="3 decor" src="@/assets/img/home/section3/3_decor.svg" />
						</div>

						<div :class="{'inline-block opacity-100': hoverImage === 3, 'hidden opacity-0': hoverImage !== 3}">
							<img alt="4" src="@/assets/img/home/section3/4.png" />
							<img class="absolute top-6 right-8" alt="4 decor" src="@/assets/img/home/section3/4_decor.svg" />
							<img class="absolute top-6 right-16" alt="4 decor" src="@/assets/img/home/section3/4_decor.svg" />
						</div>
					</div>
				</div>
				<div class="col-span-7 flex flex-col p-10 gap-10 mt-7">
					<HoverTextBox
						v-for="item in list"
						@click="handleClick(item.id)"
						@mouseleave="hoverImage = showImage"
						@mouseover="hoverImage = item.id"
						:description="item.description"
						:isActive="selectedContent === item.id"
						:key="item.title"
						:title="item.title" />
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import HoverTextBox from '@components/molecules/HoverTextBox.vue';
import {contentText} from '@assets/wording/home/text.ts';

const selectedContent = ref(0);
const showImage = ref(0);
const hoverImage = ref(0);

const handleClick = (val: number) => {
	selectedContent.value = val;
	showImage.value = val;
	hoverImage.value = val;
};

const list = reactive([...contentText.ourWorks.list]);
</script>

<style lang="scss" scoped>
.section3-bg {
	background: var(--Surface-supportive-green-light, #ddf0db);
}
</style>
