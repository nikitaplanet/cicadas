<template>
	<div
		v-animateonscroll="{enterClass: 'fadein', leaveClass: 'fadeout', once: true}"
		class="w-screen flex items-center justify-center pt-[20px] pb-[80px] px-[60px] transition-all duration-700">
		<HeadingHomeMade>{{ contentText.sliderSection.header }}</HeadingHomeMade>
	</div>
</template>

<script setup>
import {contentText} from 'assets/wording/home/text.js';
import HeadingHomeMade from '~/components/atoms/text/HeadingHomeMade.vue';
</script>

<style lang="scss" scoped></style>
