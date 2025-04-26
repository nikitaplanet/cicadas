<template>
    <div class="landing-bg w-full">
        <SectionContainer>
            <div class="w-full h-screen relative">
                <div class="w-full h-full absolute left-0 top-0 flex align-center justify-center">
                    <img class="block w-9/12 max-w-[450px]" src="~@/assets/img/global/brand/LogoIcon.svg" alt="LogoIcon"/>
                </div>
                <div class="w-full h-full grid grid-cols-12 pt-12 absolute">
                    <div class="col-span-8">
                        <HeaderText :mode="TextMode.light">
                            We are a<br/>
                            social impact <br/>agency
                        </HeaderText>
                    </div>

                    <div class="col-span-4">
                        <HeaderDescription :mode="TextMode.light">
                            Through data-driven insights and compelling<br/> storytelling, we create powerful campaigns to<br/>
                            amplify the work of change makers across Asia
                        </HeaderDescription>
                    </div>
                </div>
            </div>
        </SectionContainer>
    </div>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import HeaderText from '@/components/atoms/text/HeaderText.vue';
import HeaderDescription from '@/components/atoms/text/HeaderDescription.vue';
import {TextMode} from '@/components/atoms/text';
</script>

<style scoped lang="scss">
.landing-bg {
    background: var(
            --SC-Gradient-orange-hero,
            linear-gradient(180deg, var(--Border-primary, #DD5621) 38.08%, rgba(221, 86, 33, 0) 100%)
    );
}
</style>
