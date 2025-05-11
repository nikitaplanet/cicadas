<template>
	<p
		class="font-body text-body"
		:class="{
			italic: isItalic,
			'text-text-alternate': mode === TextMode.light,
			'text-text-def': mode === TextMode.dark,
		}">
		<slot />
	</p>
</template>

<script lang="ts" setup>
import {TextMode} from './index';

interface Props {
	mode?: TextMode;
	isItalic?: boolean;
}

withDefaults(defineProps<Props>(), {
	mode: TextMode.dark,
	isItalic: true,
});
</script>

<style scoped></style>
