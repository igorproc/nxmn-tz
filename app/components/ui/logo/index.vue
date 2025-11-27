<template>
  <div
    :class="{ 'ui-logo--light': props.isLight }"
    class="ui-logo"
  >
    <icon
      name="asset:logo"
      class="ui-logo__icon"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  isLight?: boolean
}

const props = withDefaults(
  defineProps<Props>(),
  { isLight: false },
)
</script>

<style lang="scss">
.ui-logo {
  width: 165rem;
  height: 15rem;

  &__icon {
    width: 100%;
    height: 100%;
    color: $dark-color-1000;
    transition: $default-transition color;
  }

  &--light {
    .ui-logo__icon {
      color: $white-color;
    }
  }
}
</style>
