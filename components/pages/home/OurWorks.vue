<template>
	<div class="section3-bg py-10 md:py-28">
		<SectionContainer :hasMinHeight="false">
			<div
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="w-full grid grid-cols-1 xl:grid-cols-12 transition-all duration-700">
				<div class="col-span-1 xl:col-span-5 flex flex-col">
					<SectionNameTag>Our Works</SectionNameTag>
					<div class="relative p-4 xl:p-16 mt-3">
						<div
							:class="{
								'inline-block opacity-100': hoverImage === 0,
								'hidden opacity-0': hoverImage !== 0,
							}">
							<img alt="1" src="@/assets/img/home/section3/1.png" />
						</div>

						<div :class="{'inline-block opacity-100': hoverImage === 1, 'hidden opacity-0': hoverImage !== 1}">
							<img alt="2" src="@/assets/img/home/section3/2.png" />
						</div>

						<div :class="{'inline-block opacity-100': hoverImage === 2, 'hidden opacity-0': hoverImage !== 2}">
							<img alt="3" src="@/assets/img/home/section3/3.png" />
						</div>

						<div :class="{'inline-block opacity-100': hoverImage === 3, 'hidden opacity-0': hoverImage !== 3}">
							<img alt="4" src="@/assets/img/home/section3/4.png" />
						</div>
					</div>
				</div>
				<div class="col-span-1 xl:col-span-7 flex flex-col px-5 xl:p-10 gap-3 xl:gap-10 mt-5 xl:mt-7">
					<HoverTextBox
						v-for="item in list"
						@click="handleClick(item.id)"
						@mouseleave="hoverImage = showImage"
						@mouseover="hoverImage = item.id"
						:description="item.description"
						:isActive="selectedContent === item.id"
						:isButton="item.id === 3"
						:key="item.title"
						:link="item.link"
						:title="item.title" />
					<div class="block lg:hidden text-body font-body font-semibold mt-2">
						{{ currentDescription }}
					</div>
					<div class="flex lg:hidden w-full items-center justify-end mt-2">
						<button @click="handleClickMore" type="button">
							<img alt="learnMore" src="@/assets/img/home/ourWorks/learnMore.svg" />
						</button>
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>

	<Transition mode="out-in" name="fade">
		<CommonOverlay v-if="isShowCommon" @closeCommon="handleCloseCommon" />
	</Transition>
</template>

<script lang="ts" setup>
import {computed, reactive, ref} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionNameTag from '@/components/atoms/text/SectionNameTag.vue';
import HoverTextBox from '@/components/molecules/HoverTextBox.vue';
import {contentText} from '@/assets/wording/home/text';
import CommonOverlay from '@/components/layout/CommonOverlay.vue';

import {useRouter} from 'vue-router';
const router = useRouter();

import {useGetMediaQuery} from '@/assets/js/hooks/useGetMediaQuery';
const {isMobile} = useGetMediaQuery();

const selectedContent = ref(isMobile.value ? 1 : 0);
const showImage = ref(0);
const hoverImage = ref(0);

const isShowCommon = ref(false);

const handleClick = (id: number) => {
	selectedContent.value = id;
	showImage.value = id;
	hoverImage.value = id;

	if (id === 4) {
		// Commons
		isShowCommon.value = true;
	}
};

const handleCloseCommon = () => {
	isShowCommon.value = false;
};

const list = reactive([...contentText.ourWorks.list]);

const currentDescription = computed(() => {
	const current = list.find((item) => item.id === selectedContent.value);
	return current?.description || '';
});

const handleClickMore = () => {
	if (selectedContent.value === 4) {
		// Common
		isShowCommon.value = true;
	} else {
		const current = list.find((item) => item.id === selectedContent.value);
		router.push(current?.link || '');
	}
};
</script>

<style lang="scss" scoped>
.section3-bg {
	background: var(--Surface-supportive-green-light, #ddf0db);
}
</style>
