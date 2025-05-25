<template>
	<div class="w-full min-h-screen bg-surface-def">
		<!--Landing-->
		<LandingSection />

		<!--WordFade-->
		<WordFadeInSection />

		<!--OurTeam-->
		<OurTeam />

		<!--BG 過場-->
		<div class="section-gradient1"></div>

		<!--WorkWith-->
		<WorkWithSwiperSection />

		<!--BG 過場-->
		<div class="section-gradient2"></div>

		<!--Service we offer-->
		<ServiceWeOfferSection />

		<!--BG 過場-->
		<div class="section-gradient3"></div>

		<!--Issues we tackle-->
		<AboutIssuesTackle />

		<div class="section-gradient4"></div>
		<!--Footer-->
		<NFooter />
	</div>
</template>

<script lang="ts" setup>
import NavBar from '@components/organisms/navbar/NavBar.vue';
import LandingSection from '@/views/about/components/LandingSection.vue';
import WordFadeInSection from '@/views/about/components/WordFadeInSection.vue';
import OurTeam from '@/views/about/components/OurTeam.vue';
import WorkWithSwiperSection from '@/views/about/components/WorkWithSwiperSection.vue';
import ServiceWeOfferSection from '@/views/about/components/ServiceWeOfferSection.vue';
import NFooter from '@components/organisms/footer/NFooter.vue';
import AboutIssuesTackle from '@/views/about/components/AboutIssuesTackle.vue';

import {useScrollDirectionNav} from '@/hooks/useNavBar.ts';
const {isScrolledPastLanding, showNavBar} = useScrollDirectionNav();
</script>

<style lang="scss" scoped>
.about-bg {
	background: linear-gradient(
		180deg,
		var(--Surface-supportive-violet-dark, #d6b9e0) 0%,
		var(--Surface-supportive-violet-mid, #e9c9f4) 50.33%,
		var(--Surface-def, #fceee9) 100%
	);
}

.section {
	&-gradient1,
	&-gradient2,
	&-gradient3,
	&-gradient4 {
		width: 100%;
		height: 120px;
	}

	&-gradient1 {
		background: linear-gradient(180deg, var(--Surface-def, #fceee9) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient2 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-supportive-violet-mid, #e9c9f4) 100%);
	}

	&-gradient3 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-mid, #e9c9f4) 0%, var(--Surface-supportive-violet-light, #f3e6f7) 100%);
	}

	&-gradient4 {
		background: linear-gradient(180deg, var(--Surface-supportive-violet-light, #f3e6f7) 0%, var(--Surface-def, #fceee9) 100%);
	}
}
</style>
