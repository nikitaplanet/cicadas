<template>
	<div class="ourTeamOverlay w-full h-screen flex flex-col justify-center items-center fixed top-0 left-0 z-30 pt-14 pb-24 px-10">
		<div class="w-full max-w-[1300px] flex justify-end items-center">
			<button @click="handleClose" class="w-11 h-11 flex justify-end items-start" type="button">
				<img class="w-6 h-6" alt="Close" src="@/assets/img/components/overlay/close.svg" />
			</button>
		</div>
		<div class="w-full max-w-[1300px] gap-8 flex flex-row justify-center items-center">
			<div class="flex-shrink-0 w-[35%]">
				<img :src="profileInfo.img" class="w-full h-auto" alt="Sharon 插圖" />
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
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, reactive} from 'vue';
import {OUR_TEAM_INFO} from '@/assets/js/enum/about';
import {aboutWording} from '@assets/wording/about/text';

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
}
</style>
