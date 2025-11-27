<template>
  <section class="main-page-info">
    {{ props }}
  </section>
</template>

<script setup lang="ts">
interface IMainPageInfoCard {
  id: number
  image: string
  count: string
  title: string
}

interface Props {
  cards: IMainPageInfoCard
}

const props = defineProps<Props>()
</script>
