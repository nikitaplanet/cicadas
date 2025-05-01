<template>
	<LoadingOverlay v-if="isShowLoading" />
	<router-view v-else />
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import LoadingOverlay from '@components/atoms/loading/LoadingOverlay.vue';
const isShowLoading = ref(true);

setTimeout(() => {
	isShowLoading.value = false;
}, 5000);
</script>

<style scoped></style>
