<template>
  <VueFinalModal
    v-bind="props.vfmProps"
    class="ui-dialog-container"
  >
    <slot :dialog="attrs" />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

interface Props {
  vfmProps: InstanceType<typeof VueFinalModal>['$props']
}

const props = defineProps<Props>()
const attrs = useAttrs()
</script>

<style lang="scss">
.ui-dialog-container {
  display: flex;
  flex-direction: column;
}
</style>
