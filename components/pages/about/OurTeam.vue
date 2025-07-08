<template>
	<div class="pt-32 pb-36">
		<SectionContainer :hasMinHeight="false">
			<div
				v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
				class="w-full flex flex-col justify-center items-center transition-all duration-700">
				<div class="w-full">
					<SectionNameTag>{{ aboutWording.ourTeam.title }}</SectionNameTag>
				</div>
				<div class="w-full flex flex-col justify-center items-center mt-8">
					<div class="w-full flex flex-row justify-center items-start">
						<button
							@click="showOverlay(OUR_TEAM_INFO.SHARON)"
							class="mr-[-50px] transition-all duration-300 hover:opacity-80"
							type="button">
							<img alt="Sharon" src="@/assets/img/about/profile/sharon.svg" />
						</button>
						<button @click="showOverlay(OUR_TEAM_INFO.HANYAN)" class="transition-all duration-300 hover:opacity-80" type="button">
							<div class="w-full m-16"></div>
							<img alt="Hanyan" src="@/assets/img/about/profile/hanyan.svg" />
						</button>
						<button
							@click="showOverlay(OUR_TEAM_INFO.HANNA)"
							class="ml-[-25px] transition-all duration-300 hover:opacity-80"
							type="button">
							<img alt="Hanna" src="@/assets/img/about/profile/hanna.svg" />
						</button>
					</div>

					<div>
						<img class="w-32 mt-10" alt="hoverUs" src="@/assets/img/about/clickUsButton.svg" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</div>

	<Transition mode="out-in" name="fade">
		<OurTeamInfoOverlay v-if="isShowOverlay" @close="handleClose" :id="currentOverlay" />
	</Transition>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionNameTag from '@/components/atoms/text/SectionNameTag.vue';
import {aboutWording} from '@/assets/wording/about/text';
import OurTeamInfoOverlay from '@/components/pages/about/OurTeamInfoOverlay.vue';
import {OUR_TEAM_INFO} from '@/assets/js/enum/about';

const currentOverlay = ref(0);
const isShowOverlay = ref(false);

function showOverlay(id: OUR_TEAM_INFO) {
	currentOverlay.value = id;
	isShowOverlay.value = true;
}

function handleClose() {
	isShowOverlay.value = false;
}
</script>

<style lang="scss" scoped></style>
