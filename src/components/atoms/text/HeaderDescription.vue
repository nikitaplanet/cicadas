<template>
	<p
		class="font-body text-body italic"
		:class="{
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
}

withDefaults(defineProps<Props>(), {
	mode: TextMode.dark,
});
</script>

<style scoped></style>
