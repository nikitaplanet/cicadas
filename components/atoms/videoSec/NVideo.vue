<template>
	<div class="w-full aspect-video">
		<ShimmerLoad v-show="!isLoaded" className="w-full aspect-video" />
		<Transition name="fade" mode="out-in">
			<div style="padding: 56.25% 0 0 0; position: relative" v-show="isLoaded">
				<iframe
					@load="onIframeLoad"
					:src="videoUrl"
					class="absolute top-0 left-0 w-full h-full"
					allow="autoplay; fullscreen; picture-in-picture"
					frameborder="0"
					title="Singing Cicadas Showreel">
				</iframe>
				<button type="button" class="absolute top-0 left-0 w-full h-full" @click="handleClickVideo"></button>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import ShimmerLoad from '~/components/atoms/loading/ShimmerLoad.vue';
import {ref} from 'vue';

interface Props {
	videoUrl: string;
}

const props = withDefaults(defineProps<Props>(), {
	videoUrl: '',
});

const isLoaded = ref(false);

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

<style scoped lang="scss">

</style>