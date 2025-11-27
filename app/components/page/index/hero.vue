<template>
  <div
    ref="triggerSection"
    class="main-page-hero hero"
  >
    <div
      ref="animationPin"
      class="hero__pin"
    >
      <page-index-hero-start-slide
        ref="startSlide"
        :image="image"
        :slides="slides"
        class="hero__start-slide"
      />

      <page-index-hero-last-slide
        ref="lastSlide"
        v-bind="content"
        class="hero__last-slide"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { IFlatCardProps } from '~/components/entity/flat/card/index.vue'
import type { IMainPageSecondHeroSlideProps } from '~/components/page/index/hero/last-slide.vue'

interface Props {
  image: string
  content: IMainPageSecondHeroSlideProps
  slides: IFlatCardProps[]
}

const { $gsap } = useNuxtApp()

const { image, content, slides } = defineProps<Props>()

const triggerSection = useTemplateRef<HTMLElement>('triggerSection')
const animationPin = useTemplateRef<HTMLElement>('animationPin')
const startSlide = useTemplateRef<ComponentPublicInstance>('startSlide')
const lastSlide = useTemplateRef<ComponentPublicInstance>('lastSlide')
const timeline = shallowRef<null | gsap.core.Timeline>(null)

const startCardAnimation = () => {
  $gsap.instance.set(
    lastSlide.value?.$el,
    { autoAlpha: 0, z: 500, x: '-100rem' },
  )

  const timelineInstance: gsap.core.Timeline = $gsap.instance.timeline({
    scrollTrigger: {
      trigger: triggerSection.value,
      pin: animationPin.value,
      start: 'top top',
      end: `+=${window.innerHeight / 2}`,
      scrub: true,
    },
  })

  timelineInstance.to(
    startSlide.value?.$el,
    { width: '793rem', right: 0, duration: 1.0, ease: 'power2.inOut' },
    'start',
  )

  timelineInstance.to(
    lastSlide.value?.$el,
    {
      autoAlpha: 1,
      z: 500,
      x: '-50rem',
      duration: 0.5,
    },
    0,
  )

  timeline.value = timelineInstance
}

onMounted(async () => {
  if (!$gsap.instance || !$gsap.scroll) {
    return
  }

  startCardAnimation()
})

onUnmounted(() => {
  if (!timeline.value) {
    return
  }

  timeline.value.scrollTrigger?.kill()
  timeline.value.kill()
})
</script>

<style lang="scss">
.main-page-hero {
  width: 100%;
  height: 100dvh;
  position: relative;

  .hero {
    &__pin {
      height: 100%;
      transform-style: preserve-3d;
    }

    &__last-slide {
      opacity: 0;
      position: absolute;
      top: 0;
      left: var(--hero-last-slide-left-offset, -50rem);
      width: 727rem;
      height: 100%;
      background: $white-color;
    }
  }
}
</style>
