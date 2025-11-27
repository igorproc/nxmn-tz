<template>
  <button
    :class="buttonClasses"
    class="ui-button"
  >
    <div
      v-if="slots.prepend"
      class="ui-button__prepend"
    >
      <slot name="prepend" />
    </div>

    <div class="ui-button__inner">
      <slot />
    </div>

    <div
      v-if="slots.append"
      class="ui-button__append"
    >
      <slot name="append" />
    </div>
  </button>
</template>

<script setup lang="ts">
type TUiButtonTag = 'button' | 'UILink'
type TUiButtonVariant = 'primary' | 'secondary' | 'social'

interface Props {
  tag?: TUiButtonTag
  variant?: TUiButtonVariant
  isIcon?: boolean
}

const slots = useSlots()

const props = withDefaults(
  defineProps<Props>(),
  {
    tag: 'button',
    variant: 'primary',
    isIcon: false,
  },
)

const buttonClasses = computed(() => [
  `ui-button--${props.variant}`,
  { 'ui-button--icon': props.isIcon },
])
</script>

<style lang="scss">
.ui-button {
  display: flex;
  align-items: center;
  gap: 8rem;

  // Variants
  &--primary {
    padding: 20rem 14rem;
    border-radius: 2rem;
    background-color: $secondary-color;
    color: $white-color;
  }

  &--social {
    padding: 18rem 12rem;
    border-radius: 3rem;
    background-color: $dark-color-50;
    color: $dark-color-1000;
    transition: $default-transition all;

    &:hover {
      background-color: $accent-color;
      color: $white-color;
    }
  }

  // Modifers
  &--icon {
    padding: 10rem;

    &__content {
      width: 100%;
    }

    &__append {
      display: none;
    }
  }
}
</style>
