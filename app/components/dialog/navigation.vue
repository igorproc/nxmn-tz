<template>
  <ui-dialog
    :vfm-props="{
      class: 'dialog-navigation',
      contentTransition: 'vfm-slide-left',
      onBeforeOpen: () => dialogStore.stateMap.navigation = true,
      onBeforeClose: () => dialogStore.stateMap.navigation = false,
    }"
  >
    <div class="dialog-navigation__wrapper">
      <div class="dialog-navigation__links">
        <div class="dialog-navigation__link-group">
          <ui-navigation-item
            v-for="(item, index) in formattedLinks.first"
            :key="item.id"
            :index="index"
            v-bind="item"
          />
        </div>

        <div class="dialog-navigation__link-group">
          <ui-navigation-item
            v-for="(item, index) in formattedLinks.second"
            :key="item.id"
            :index="index + formattedLinks.half"
            v-bind="item"
          />
        </div>
      </div>

      <div class="dialog-navigation__contacts">
        <ui-conatcts
          size="medium"
          color="dark"
        />

        <span class="dialog-navigation__contacts-email h6 additional-font">
          ccentr@office-krasnodar.ru
        </span>

        <div class="dialog-navigation__contacts-socials contacts-socials">
          <ui-button
            v-for="item in socials"
            :key="item.id"
            tag="UILink"
            variant="social"
            :to="item.link"
          >
            <icon
              :name="item.icon"
              class="contacts-socials__item-icon"
            />
          </ui-button>
        </div>
      </div>

      <div class="dialog-navigation__callback">
        <ui-button
          variant="primary"
        >
          <template #prepend>
            <img
              :src="callback.image"
              class="dialog-navigation__callback-image"
            >
          </template>

          <span class="p5">
            Получить консультацию менеджера
          </span>
        </ui-button>
      </div>
    </div>
  </ui-dialog>
</template>

<script setup lang="ts">
import { links, socials, callback } from '~/assets/json/header.json'

const dialogStore = useDialogStore()

const formattedLinks = computed(() => {
  const halfItems = Math.ceil(links.length / 2)

  return {
    half: halfItems,
    first: links.slice(0, halfItems),
    second: links.slice(halfItems),
  }
})
</script>

<style lang="scss">
.dialog-navigation {
  top: 80rem;

  &__wrapper {
    position: relative;
    padding: 60rem 50rem;
    display: grid;
    grid-template: "links links contact" "links links callback" / 365rem 465rem 1fr;
    max-width: calc(100vw - 100rem);
    width: 100%;
    height: 578rem;
    background-color: $background-color;
    z-index: 1;
  }

  &__links {
    display: flex;
    align-items: flex-start;
    gap: 100rem;
    grid-area: links;
  }

  &__link-group {
    display: flex;
    flex-direction: column;
    gap: 32rem;
  }

  &__contacts {
    grid-area: contact;

    .contacts-socials {
      margin-top: 16rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8rem;

      &__item-icon {
        width: 24rem;
      }
    }
  }

  &__contacts-email {
    margin-top: 26rem;
    width: 100%;
    display: inline-block;
    text-transform: uppercase;
    text-align: end;
  }

  &__callback {
    grid-area: callback;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  &__callback-image {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
    border-radius: 100%;
  }
}
</style>
