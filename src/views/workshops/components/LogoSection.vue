<template>
	<div class="pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="grid grid-cols-3">
				<div class="flex flex-col gap-32 pt-32">
					<LogoImage v-for="item in col1" :description="item.description" :logoAlt="item.alt" :logoSrc="item.img" />
				</div>
				<div class="flex flex-col gap-32">
					<h2 v-html="workshopsWording.logoSection.title" class="italic font-h1 text-h1 font-semibold text-center"></h2>
					<LogoImage v-for="item in col2" :description="item.description" :logoAlt="item.alt" :logoSrc="item.img" />
				</div>
				<div class="flex flex-col gap-32 pt-32">
					<LogoImage v-for="item in col3" :description="item.description" :logoAlt="item.alt" :logoSrc="item.img" />
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
import LogoImage2 from '@/assets/img/workshops/logos/2.svg';
import LogoImage3 from '@/assets/img/workshops/logos/3.svg';

import LogoImage4 from '@/assets/img/workshops/logos/4.svg';
import LogoImage5 from '@/assets/img/workshops/logos/5.svg';
import LogoImage6 from '@/assets/img/workshops/logos/6.svg';

import LogoImage7 from '@/assets/img/workshops/logos/7.svg';
import LogoImage8 from '@/assets/img/workshops/logos/8.svg';
import LogoImage9 from '@/assets/img/workshops/logos/9.svg';

const col1 = reactive([
	{
		img: LogoImage1,
		alt: '1',
		description: workshopsWording.logoSection.logoList[1],
	},
	{
		img: LogoImage2,
		alt: '2',
		description: workshopsWording.logoSection.logoList[2],
	},
	{
		img: LogoImage3,
		alt: '3',
		description: workshopsWording.logoSection.logoList[3],
	},
]);

const col2 = reactive([
	{
		img: LogoImage4,
		alt: '4',
		description: workshopsWording.logoSection.logoList[4],
	},
	{
		img: LogoImage5,
		alt: '5',
		description: workshopsWording.logoSection.logoList[5],
	},
	{
		img: LogoImage6,
		alt: '6',
		description: workshopsWording.logoSection.logoList[6],
	},
]);

const col3 = reactive([
	{
		img: LogoImage7,
		alt: '7',
		description: workshopsWording.logoSection.logoList[7],
	},
	{
		img: LogoImage8,
		alt: '8',
		description: workshopsWording.logoSection.logoList[8],
	},
	{
		img: LogoImage9,
		alt: '9',
		description: workshopsWording.logoSection.logoList[9],
	},
]);
</script>

<style lang="scss" scoped></style>
