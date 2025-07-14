<template>
	<!--Desktop-->
	<div>
		<div class="ourTeamOverlay w-screen h-screen hidden lg:flex flex-col justify-center items-center fixed top-0 left-0 z-30 pt-14 pb-24 px-10">
			<div class="w-full max-w-[1300px] flex justify-end items-center">
				<button @click="handleClose" class="w-11 h-11 flex justify-end items-start" type="button">
					<img class="w-6 h-6" alt="Close" src="@/assets/img/components/overlay/close.svg" />
				</button>
			</div>
			<div class="w-full max-w-[1300px] gap-8 flex flex-col md:flex-row justify-center items-center">
				<div
					class="flex-shrink-0 w-[35%]"
					:class="{
						'max-w-[426px]': profileInfo.id === OUR_TEAM_INFO.SHARON,
						'max-w-[404px]': profileInfo.id === OUR_TEAM_INFO.HANYAN,
						'max-w-[344px]': profileInfo.id === OUR_TEAM_INFO.HANNA,
					}">
					<img :alt="profileInfo.name" :src="profileInfo.img" class="w-full h-auto" />
				</div>

				<div class="relative w-full h-[580px] lg:h-[430px]">
					<img class="object-fit w-full h-full block lg:hidden" alt="bg" src="@/assets/img/about/ourTeamInfoBg.svg" />
					<img class="object-fit w-full h-full hidden lg:block xl:hidden" alt="bg" src="@/assets/img/about/ourTeamInfoBg_wMedium.svg" />
					<img class="object-fit w-full h-full hidden lg:hidden xl:block" alt="bg" src="@/assets/img/about/ourTeamInfoBg_wLong.svg" />

					<div class="absolute w-full h-full top-0 left-0 px-20 pt-48 lg:px-20 lg:pt-32 xl:pt-36">
						<p class="font-semibold text-h4 font-h4 mb-4">{{ profileInfo.name }}</p>
						<p class="font-body text-body font-medium">
							{{ profileInfo.description }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!--Mobile-->
		<div class="ourTeamOverlay w-full h-screen flex flex-col lg:hidden fixed top-0 left-0 z-30">
			<div class="w-full h-[84px] flex justify-end items-center px-10 pt-10">
				<button @click="handleClose" class="w-11 h-11 flex justify-end items-start" type="button">
					<img class="w-[30px] h-[30px]" alt="Close" src="@/assets/img/components/overlay/close.svg" />
				</button>
			</div>
			<!--Img-->
			<div class="flex justify-center items-center px-6 h-[268px]">
				<img :alt="profileInfo.name" :src="profileInfo.imgMobile" class="w-full max-h-[268px] h-auto" />
			</div>

			<!--Content-->
			<div class="ourTeamOverlay__content__mobile bg-cover flex-grow px-6 pb-10 pt-5">
				<div class="relative w-full h-full bg-surface-tertiary px-4 py-10 rounded-xl">
					<div class="ourTeamOverlay__content__scroll w-full h-full overflow-y-auto overscroll-contain">
						<div class="text-scaleLG font-h4 font-semibold">{{ profileInfo.name }}</div>
						<div class="mt-5 text-body font-body font-medium">
							{{ profileInfo.description }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, reactive} from 'vue';
import {OUR_TEAM_INFO} from '@/assets/js/enum/about';
import {aboutWording} from '@/assets/wording/about/text';

interface Props {
	id: OUR_TEAM_INFO;
}

const props = withDefaults(defineProps<Props>(), {
	id: OUR_TEAM_INFO.SHARON,
});

const emit = defineEmits(['close']);

onMounted(() => {
	setTimeout(() => {
		document.body.style.overflow = 'hidden';
	}, 200);
});

onUnmounted(() => {
	document.body.style.overflow = '';
});

function handleClose() {
	emit('close');
}

// data
const profileInfo = reactive(aboutWording.ourTeam.ourTeamList.find((item) => item.id === props.id) || aboutWording.ourTeam.ourTeamList[0]);
</script>

<style lang="scss" scoped>
.ourTeamOverlay {
	background-color: #fceee9;

	&__bgImage {
		background: url('@/assets/img/about/ourTeamInfoBg.svg') no-repeat;
	}

	&__content {
		&__mobile {
			height: calc(100vh - 84px - 268px);

			&__info {
				height: calc(100vh - 84px - 268px - 140px);
			}

			&__scroll {
				-ms-overflow-style: none;
				scrollbar-width: none;

				&::-webkit-scrollbar {
					display: none;
				}
			}
		}
	}
}
</style>
