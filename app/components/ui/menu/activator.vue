<template>
  <div class="ui-menu-activator">
    <ui-button
      is-icon
      variant="primary"
      class="ui-menu-activator__button"
    />

    <span
      class="ui-menu-activator__text"
    >
      меню
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.ui-menu-activator {
  display: flex;
  align-items: center;
  gap: 8rem;

  &__text {
    color: $primary-color;
  }
}
</style>
