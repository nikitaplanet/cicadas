<template>
	<AccordionPanel :pt="accordionPanelPT" :value="id" unstyled>
		<AccordionHeader :pt="accordionHeaderPT" unstyled
			>{{ title }}
			<template #toggleicon="data">
				<img v-show="!data.active" class="p-3" alt="Open" src="@/assets/img/home/qa/open.svg" />
				<img v-show="data.active" alt="Open" src="@/assets/img/home/qa/close.svg" />
			</template>
		</AccordionHeader>
		<AccordionContent class="italic font-semibold" unstyled>
			<div class="m-0 mt-2 pl-3">
				<div v-if="content" class="grid grid-cols-5">
					<p class="col-span-4 font-body text-body18 italic font-medium">{{ content }}</p>
					<span class="col-span-1"></span>
				</div>
				<slot />
			</div>
		</AccordionContent>
	</AccordionPanel>
</template>

<script lang="ts" setup>
import AccordionPanel from 'primevue/accordionpanel';
import AccordionContent from 'primevue/accordioncontent';
import AccordionHeader from 'primevue/accordionheader';
interface Props {
	id: number;
	title: string;
	content?: string;
}

const props = withDefaults(defineProps<Props>(), {
	id: 0,
	title: '',
	content: '',
});

//bg-surface-tertiary
const accordionPanelPT = {
	root: {class: 'w-full p-5 border-svg-mask'},
};

const accordionHeaderPT = {
	root: {class: 'w-full pl-3 flex justify-between items-center text-h4 font-h4 italic font-semibold'},
	toggleicon: {class: 'w-5 h-5'},
};
</script>
<style lang="scss" scoped>
.border-svg-mask {
	background-image: url('../../../assets/img/home/qa/bg.svg');
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 3px;
}
</style>
