<template>
  <header class="app-base-layout-header header">
    <section class="header__start">
      <ui-logo
        :is-light="dialogStore.stateMap.navigation"
      />

      <layout-base-navigation-activator
        :active="dialogStore.stateMap.navigation"
        @toggle="toggleActivatorHandler"
      />
    </section>

    <ui-button
      variant="primary"
      class="header__choice-flat p5"
    >
      <span
        class="header__choice-flat-content p5"
      >
        выбрать квартиру
      </span>

      <template #append>
        <icon
          name="asset:key"
          class="header__choice-flat-icon"
        />
      </template>
    </ui-button>

    <ui-conatcts />
  </header>
</template>

<script setup lang="ts">
import { useDialogStore } from '~/stores/dialog'

const dialogStore = useDialogStore()

const toggleActivatorHandler = (toBeActive: boolean) => {
  if (toBeActive) {
    dialogStore.modal!.navigation.open()
    return
  }
  dialogStore.modal!.navigation.close()
}
</script>

<style lang="scss">
.app-base-layout-header {
  position: fixed;
  top: 0;
  left: 50rem;
  width: calc(100% - 100rem);
  z-index: 1001;
  padding: 12rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header {
    &__start {
      display: flex;
      align-items: center;
      gap: 28rem;
    }

    &__choice-flat {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &__choice-flat-content {
      text-transform: uppercase;
    }

    &__choice-flat-icon {
      width: 16rem;
    }
  }
}
</style>
