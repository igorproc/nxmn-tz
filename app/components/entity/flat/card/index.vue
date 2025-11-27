<template>
  <div class="flat-card">
    {{ props }}
  </div>
</template>

<script setup lang="ts">
export interface IFlatCardProps {
  id: number
  image: string
  title: string
  deadline: string | Date
}

const props = defineProps<IFlatCardProps>()
</script>
