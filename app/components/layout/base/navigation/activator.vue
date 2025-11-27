<template>
  <div class="ui-menu-activator">
    <ui-button
      is-icon
      variant="primary"
      class="ui-menu-activator__button"
      @click="toggle"
    >
      <span
        :class="{ 'ui-menu-activator__button-cross--active': active }"
        class="ui-menu-activator__button-cross"
      />
    </ui-button>

    <span
      :class="{ 'ui-menu-activator__text--open': active }"
      class="ui-menu-activator__text"
    >
      {{ menuAdditionalText }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  active: boolean
}

interface Emits {
  (name: 'toggle', active: boolean): void
}

const dictionary = {
  additionalText: {
    close: 'меню',
    open: 'закрыть',
  },
}

const { active } = defineProps<Props>()
const emit = defineEmits<Emits>()

const menuAdditionalText = computed(() => {
  if (!active) {
    return dictionary.additionalText.close
  }

  return dictionary.additionalText.open
})

const toggle = () => {
  emit('toggle', !active)
}
</script>

<style lang="scss">
.ui-menu-activator {
  display: flex;
  align-items: center;
  gap: 8rem;

  &__button-cross {
    position: relative;
    display: flex;
    align-items: center;
    width: 32rem;
    height: 8rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 32rem;
      height: 1rem;
      background-color: $white-color;
      transition: $default-transition all;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    &--active {
      gap: 0;

      &::before {
        transform: translateY(4rem) rotate(-25deg);
      }

      &::after {
        transform: translateY(-3rem) rotate(25deg);
      }
    }
  }

  &__text {
    font-size: 12rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.02rem;
    text-transform: uppercase;
    color: $primary-color;

    &--open {
      color: $white-color;
    }
  }
}
</style>
