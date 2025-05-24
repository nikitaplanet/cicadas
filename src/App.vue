<template>
	<LoadingOverlay
		class="transition duration-300 ease-in-out"
		:class="{block: !isHideLoading, hidden: isHideLoading, 'opacity-0': !isShowLoading, 'opacity-100': isShowLoading}" />

	<router-view v-slot="{Component}">
		<transition mode="out-in" name="fade">
			<component v-if="!isShowLoading" :is="Component" />
		</transition>
	</router-view>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';
import LoadingOverlay from '@components/atoms/loading/LoadingOverlay.vue';
import {useRoute} from 'vue-router';

const isShowLoading = ref(true);
const isHideLoading = ref(false);

setTimeout(() => {
	isShowLoading.value = false;
}, 2200);

setTimeout(() => {
	isHideLoading.value = true;
}, 2500);

const route = useRoute();

watch(
	() => route.fullPath,
	() => {
		isShowLoading.value = true;
		isHideLoading.value = false;

		setTimeout(() => {
			isShowLoading.value = false;
		}, 2200);

		setTimeout(() => {
			isHideLoading.value = true;
		}, 2500);
	},
);
</script>

<style scoped></style>
