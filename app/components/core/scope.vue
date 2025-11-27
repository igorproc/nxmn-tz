<script lang="ts" setup>
</script>

<template>
  <section class="app-common-scope">
    <nuxt-loading-indicator
      :throttle="0"
      :duration="5e3"
    />

    <ui-dialog-global-container />
  </section>
</template>
