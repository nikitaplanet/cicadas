<template>
	<Accordion :pt="accordionPT" unstyled value="0">
		<slot />
	</Accordion>
</template>

<script lang="ts" setup>
import Accordion from 'primevue/accordion';

// AccordionTab 各區塊樣式
const accordionPT = {
	root: {class: 'w-full flex flex-col gap-5 border-none'},
};
</script>
