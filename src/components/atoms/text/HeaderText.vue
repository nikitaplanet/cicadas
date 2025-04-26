<template>
    <h1 class="font-h1 text-h1 text-[80px] italic font-semibold" :class="{
        'text-text-alternate': mode === TextMode.light,
        'text-text-def': mode === TextMode.dark
    }">
        <slot/>
    </h1>
</template>

<script setup lang="ts">
import {TextMode} from './index';

interface Props {
    mode?: TextMode
}

const props = withDefaults(defineProps<Props>(), {
    mode: TextMode.dark
});

const mode = props.mode;
</script>

<style scoped>
</style>
