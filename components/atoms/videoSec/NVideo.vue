<template>
	<div class="w-full aspect-video">
		<ShimmerLoad v-show="!isLoaded" className="w-full aspect-video" />
		<Transition mode="out-in" name="fade">
			<div v-show="isLoaded" style="padding: 56.25% 0 0 0; position: relative">
				<ClientOnly>
					<iframe
						v-if="iframeSrc"
						@load="onIframeLoad"
						:src="iframeSrc"
						class="absolute top-0 left-0 w-full h-full"
						allow="autoplay; fullscreen; picture-in-picture"
						frameborder="0"
						title="Singing Cicadas Showreel">
					</iframe>
					<button v-if="!isShowControls" @click="handleClickVideo" class="absolute top-0 left-0 w-full h-full" type="button"></button>
				</ClientOnly>
			</div>
		</Transition>
	</div>
</template>

<script lang="ts" setup>
import ShimmerLoad from '~/components/atoms/loading/ShimmerLoad.vue';
import {computed, ref} from 'vue';

useHead({
	script: [
		{
			src: 'https://player.vimeo.com/api/player.js',
			defer: true,
		},
	],
});

interface Props {
	videoUrl: string;
	isAutoPlay?: boolean;
	isShowControls?: boolean;
	isMuted?: boolean;
	isShowLinkOutside?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	videoUrl: '',
	isAutoPlay: false,
	isShowControls: false,
	isShowLinkOutside: false,
	isMuted: true,
});

const isLoaded = ref(false);

const iframeSrc = computed(() => {
	let controlPath = '&background=1&controls=0';
	if (props.isShowControls) {
		controlPath = `&controls=1`;
	}
	const autoPlay = props.isAutoPlay ? 1 : 0;
	const muted = props.isMuted ? 1 : 0;
	return `${props.videoUrl}?autoplay=${autoPlay}&muted=${muted}&title=1&byline=0&portrait=0${controlPath}`;
});

function onIframeLoad() {
	setTimeout(() => {
		isLoaded.value = true;
	}, 300);
}

function handleClickVideo() {
	let url = props.videoUrl;
	url = `${url}?autoplay=1&muted=1`;
	window.open(url);
}
</script>

<style lang="scss" scoped></style>
