import { useModal, useVfm } from 'vue-final-modal'
import { skipHydrate } from 'pinia'

export const useDialogStore = defineStore('dialogStore', () => {
  if (import.meta.server) {
    return {
      modal: null,
      stateMap: { navigation: false },
    }
  }

  const modals = useVfm()
  const stateMap = { navigation: false }
  const modalMap = {
    navigation: useModal({
      component: defineAsyncComponent(() => import('~/components/dialog/navigation.vue')),
      defaultModelValue: false,
    }),
  }

  const router = useRouter()
  watch(router.currentRoute, async (value, oldValue) => {
    if (value.fullPath !== oldValue.fullPath) {
      await modals.closeAll()
    }
  })

  return {
    modal: skipHydrate(modalMap),
    stateMap,
  }
})
