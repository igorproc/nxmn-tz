<template>
  <div class="main-page-hero-start-slide start-slide">
    <div class="start-slide__image-wrapper">
      <div
        id="gsap-hero-start-slide-cropped-image"
        :style="{ backgroundImage: `url(${image})` }"
        class="start-slide__image"
      />
    </div>

    <div
      v-if="slides.length"
      class="start-slide__slider"
    >
      {{ slides }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFlatCardProps } from '~/components/entity/flat/card/index.vue'

interface Props {
  image: string
  slides: IFlatCardProps[]
}

const { image, slides } = defineProps<Props>()
</script>

<style lang="scss">
.main-page-hero-start-slide {
  position: absolute;
  width: 100%;
  height: 100%;

  .start-slide {
    &__image-wrapper {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: var(--hero-start-slide-left-offset, -60rem);
      width: calc(100% + var(--hero-start-slide-width, 100rem) + 25px);
      height: 100%;
    }

    &__image {
      width: 100%;
      height: 100%;
      scale: 1.4;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
    }

    &__slider {
      position: absolute;
      bottom: 16rem;
      right: 18rem;
    }
  }
}
</style>
