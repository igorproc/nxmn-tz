<template>
  <div class="main-page-hero-last-slide slide">
    <h2 class="slide__title additional-font h1">
      {{ props.title }}
    </h2>

    <div class="slide__content">
      <img
        :src="props.image"
        class="slide__image"
      >

      <p class="slide__text p4">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface IMainPageSecondHeroSlideProps {
  image: string
  title: string
  subtitle: string
  description: string
}

const props = defineProps<IMainPageSecondHeroSlideProps>()
</script>

<style lang="scss">
.main-page-hero-last-slide {
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 78rem), calc(100% - 83rem) 100%, 0% 100%);

  .slide {
    position: relative;

    &__title {
      position: absolute;
      top: 115rem;
      right: 53rem;
      width: 583rem;
      text-align: center;
      z-index: 2;
    }

    &__content {
      position: absolute;
      left: 50%;
      bottom: 106rem;
      width: 338rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    &__image {
      width: 283rem;
      height: 357rem;
      object-fit: cover;
      object-position: center right;
    }

    &__text {
      margin-top: 12rem;
      text-align: center;
      color: $dark-color-600;
    }
  }
}
</style>
