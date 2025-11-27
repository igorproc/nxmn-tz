<script lang="ts" setup>
import pageData from '~/assets/json/main-page.json'
import { timer } from '#shared/utils/timer'

const { data } = useAsyncData('main-page', async () => {
  await timer(Math.random())

  return pageData
})
</script>

<template>
  <div class="app-page-home">
    <page-index-hero
      v-if="data?.hero"
      v-bind="data.hero"
    />
  </div>
</template>

<style lang="scss">
</style>
