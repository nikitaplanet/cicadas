<template>
	<SectionContainer class="text-h2 italic font-semibold text-text-def font-h2sans flex items-center justify-center">
		<div>
			<span v-html="contentText.section2.title1"></span>
			<span v-html="contentText.section2.title2"></span>
		</div>
	</SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {contentText} from '@assets/wording/home/text.ts';
</script>

<style scoped></style>
