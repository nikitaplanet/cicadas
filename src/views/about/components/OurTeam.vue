<template>
	<div class="pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div class="w-full flex flex-col justify-center items-center">
				<div class="w-full">
					<SectionNameTag>{{ aboutWording.ourTeam.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col justify-center items-center mt-8">
					<div class="w-full grid grid-cols-2">
						<div
							@mouseleave="isShowSharonChat = false"
							@mouseover="isShowSharonChat = true"
							class="flex justify-end items-center relative cursor-pointer">
							<div class="transition-opacity ease-in-out" :class="{'opacity-10': isShowHanyanChat, 'opacity-100': !isShowHanyanChat}">
								<img class="opacity-0" alt="Sharon" src="@/assets/img/about/sharon.svg" />
								<img class="absolute top-0 right-[-17px]" alt="Sharon" src="@/assets/img/about/sharon.svg" />
								<HeadingHomeMade class="absolute right-[160px] bottom-[-49px]">{{
									aboutWording.ourTeam.sharon.name
								}}</HeadingHomeMade>
							</div>

							<!--Hanyan Info-->
							<div
								v-html="aboutWording.ourTeam.hanyan.content"
								class="hanyanInfo opacity-0 transition-opacity absolute top-14 right-[-120px] ease-in-out pl-10 pr-60 pt-16 w-[600px] h-[277px] text-body font-medium font-body text-text-supportive-violet-light"
								:class="{'opacity-100': isShowHanyanChat}"></div>
						</div>
						<div
							@mouseleave="isShowHanyanChat = false"
							@mouseover="isShowHanyanChat = true"
							class="flex justify-start items-center relative cursor-pointer">
							<div class="transition-opacity ease-in-out" :class="{'opacity-10': isShowSharonChat, 'opacity-100': !isShowSharonChat}">
								<img class="opacity-0" alt="Sharon" src="@/assets/img/about/hanyan.svg" />
								<img class="absolute top-0 left-[-17px]" alt="Sharon" src="@/assets/img/about/hanyan.svg" />
								<HeadingHomeMade class="absolute left-[235px] bottom-[-49px]">{{ aboutWording.ourTeam.hanyan.name }}</HeadingHomeMade>
							</div>

							<!--Sharon Info-->
							<div
								v-html="aboutWording.ourTeam.sharon.content"
								class="sharonInfo opacity-0 transition-opacity absolute left-0 top-14 ease-in-out px-36 pt-16 w-[600px] h-[277px] text-body font-medium font-body text-text-supportive-violet-light"
								:class="{'opacity-100': isShowSharonChat}"></div>
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
import {ref} from 'vue';
import SectionContainer from '@components/layout/SectionContainer.vue';
import SectionNameTag from '@components/atoms/text/SectionNameTag.vue';
import {aboutWording} from '@assets/wording/about/text.ts';
import HeadingHomeMade from '@components/atoms/text/HeadingHomeMade.vue';

const isShowSharonChat = ref(false);
const isShowHanyanChat = ref(false);

// function handleClickSharon() {
// 	isShowSharonChat.value = true;
// 	isShowHanyanChat.value = false;
// }
//
// function handleClickHanyan() {
// 	isShowHanyanChat.value = true;
// 	isShowSharonChat.value = false;
// }
</script>

<style lang="scss" scoped>
.sharonInfo {
	background: url('@/assets/img/about/sharon_infoBg.svg') no-repeat;
	background-size: contain;
}

.hanyanInfo {
	background: url('@/assets/img/about/hanyan_infoBg.svg') no-repeat;
	background-size: contain;
}
</style>
