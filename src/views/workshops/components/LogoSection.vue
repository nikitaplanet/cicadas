<template>
	<div class="pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div>
					<HeaderText ref="headerText" :mode="TextMode.dark" class="relative">
						<span v-html="workshopsWording.logoSection.title"></span>
					</HeaderText>
				</div>
				<div>
					<HeaderDescription ref="headerDesc" :isItalic="false" :mode="TextMode.dark">
						<span v-html="workshopsWording.logoSection.description"></span>
					</HeaderDescription>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-20 md:grid-cols-3 mt-20">
				<div class="flex flex-col gap-20 md:gap-32">
					<LogoImage v-for="item in col1" :description="item.description" :isHide="item.isHide" :logoAlt="item.alt" :logoSrc="item.img" />
				</div>
				<div class="flex flex-col gap-20 md:gap-32">
					<LogoImage v-for="item in col2" :description="item.description" :isHide="item.isHide" :logoAlt="item.alt" :logoSrc="item.img" />
				</div>
				<div class="flex flex-col gap-20 md:gap-32">
					<LogoImage v-for="item in col3" :description="item.description" :isHide="item.isHide" :logoAlt="item.alt" :logoSrc="item.img" />
				</div>
			</div>
		</SectionContainer>
	</div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';
import SectionContainer from '@components/layout/SectionContainer.vue';
import LogoImage from '@/views/workshops/components/LogoImage.vue';

import {workshopsWording} from '@assets/wording/workshops/text.ts';

import LogoImage1 from '@/assets/img/workshops/logos/1.svg';

import LogoImage4 from '@/assets/img/workshops/logos/4.svg';
import LogoImage5 from '@/assets/img/workshops/logos/5.svg';
import LogoImage6 from '@/assets/img/workshops/logos/6.svg';

import LogoImage7 from '@/assets/img/workshops/logos/7.svg';
import {TextMode} from '@components/atoms/text';
import HeaderText from '@components/atoms/text/HeaderText.vue';
import HeaderDescription from '@components/atoms/text/HeaderDescription.vue';

const col1 = reactive([
	{
		img: LogoImage5,
		alt: '5',
		description: workshopsWording.logoSection.logoList[5],
		isHide: true,
	},
	{
		img: LogoImage5,
		alt: '5',
		description: workshopsWording.logoSection.logoList[5],
		isHide: false,
	},
]);

const col2 = reactive([
	{
		img: LogoImage1,
		alt: '1',
		description: workshopsWording.logoSection.logoList[1],
		isHide: false,
	},
	{
		img: LogoImage7,
		alt: '7',
		description: workshopsWording.logoSection.logoList[7],
		isHide: false,
	},
]);

const col3 = reactive([
	{
		img: LogoImage4,
		alt: '4',
		description: workshopsWording.logoSection.logoList[4],
		isHide: false,
	},
	{
		img: LogoImage6,
		alt: '6',
		description: workshopsWording.logoSection.logoList[6],
		isHide: false,
	},
]);
</script>

<style lang="scss" scoped></style>
