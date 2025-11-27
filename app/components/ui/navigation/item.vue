<template>
  <nuxt-link
    :to="props.link"
    class="ui-navigation-item"
  >
    <span class="ui-navigation-item__index p5">
      {{ itemNumber }}
    </span>

    <span class="ui-navigation-item__title h3 additional-font">
      {{ props.title }}
    </span>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export interface IUiNavigationItem {
  id: number
  index: number
  link: RouteLocationRaw
  title: string
}

const props = defineProps<IUiNavigationItem>()

const itemNumber = computed(() => `0${props.id + 1}`)
</script>

<style lang="scss">
.ui-navigation-item {
  width: max-content;
  display: flex;
  align-items: flex-start;
  gap: 16rem;

  &__index {
    color: $dark-color-200;
  }

  &__title {
    position: relative;
    color: $primary-color;
    text-transform: uppercase;
    transition: ease-in 0.3s all;
  }

  &:hover {
    .ui-navigation-item__title {
      color: $accent-color;
      transform: translateX(30rem);
    }
  }
}
</style>
