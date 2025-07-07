<template>
	<h1
		class="font-h1 text-scale2XL lg:text-h1 italic font-semibold"
		:class="{
			'text-text-alternate': mode === TextMode.light,
			'text-text-def': mode === TextMode.dark,
		}">
		<slot />
	</h1>
</template>

<script lang="ts" setup>
import {TextMode} from './index';

interface Props {
	mode?: TextMode;
}

const props = withDefaults(defineProps<Props>(), {
	mode: TextMode.dark,
});

const mode = props.mode;
</script>

<style scoped></style>
