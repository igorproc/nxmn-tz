<template>
  <layout-provider>
    <div class="app-layout app-layout--default">
      <layout-base-header />

      <div class="app-layout__content">
        <slot />
      </div>
    </div>
  </layout-provider>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.app-layout--default {
  margin: 0 50rem;
  position: relative;
}
</style>
