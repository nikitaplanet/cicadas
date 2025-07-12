<template>
	<p
		class="font-body text-body md:text-scaleMD"
		:class="{
			italic: isItalic,
			'text-text-alternate': mode === TextMode.light,
			'text-text-def': mode === TextMode.dark,
			'text-scaleSM': !isHome,
		}">
		<slot />
	</p>
</template>

<script lang="ts" setup>
import {TextMode} from './index';

interface Props {
	mode?: TextMode;
	isItalic?: boolean;
	isHome?: boolean;
}

withDefaults(defineProps<Props>(), {
	mode: TextMode.dark,
	isItalic: false,
	isHome: false,
});
</script>

<style scoped></style>
