<template>
  <section
    :class="classes"
    class="base-layout-header-contacts"
  >
    <nuxt-link
      :href="phoneLink"
      target="_blank"
      :class="textClasses.phone"
      class="base-layout-header-contacts__phone"
    >
      {{ formattedPhone }}
    </nuxt-link>

    <p
      :class="textClasses.content"
      class="base-layout-header-contacts__content"
    >
      {{ dictionary.subtitle }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { formatPhone } from '#shared/utils/format'

interface Props {
  phone?: number
  size?: 'small' | 'medium'
  color?: 'dark' | 'light'
}

const dictionary = {
  subtitle: 'Перезвоните мне',
}

const props = withDefaults(
  defineProps<Props>(),
  {
    size: 'small',
    color: 'light',
    phone: 88008007078,
  },
)

const classes = computed(() => [
  `base-layout-header-contacts--${props.size}`,
  `base-layout-header-contacts--${props.color}`,
])

const textClasses = computed(() => {
  if (props.size === 'small') {
    return {
      phone: ['h5'],
      content: ['p5'],
    }
  }

  return {
    phone: ['h3'],
    content: ['h6', 'additional-font'],
  }
})

const formattedPhone = computed(() => formatPhone(props.phone))
const phoneLink = computed(() => `tel:${props.phone}`)
</script>

<style lang="scss">
.base-layout-header-contacts {
  &__phone {
    display: inline-block;
    width: 100%;
    color: $white-color;
    text-align: end;
  }

  &__content {
    margin-top: 2rem;
    color: $white-color;
    text-align: end;
    text-transform: uppercase;
  }

  &--medium {
    .base-layout-header-contacts__content {
      margin-top: 4rem;
    }
  }

  &--dark {
    .base-layout-header-contacts {
      &__phone,
      &__content {
        color: $dark-color-1000;
      }
    }
  }
}
</style>
