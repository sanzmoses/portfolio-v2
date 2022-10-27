<template>
  <div class="q-pa-xl">

    <div class="row">
      <div class="col-8">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
          <h3 v-if="toggle" class="q-mt-none">Quasar Components</h3>
        </transition>

       <q-btn @click="toggle = true" flat>Test</q-btn>

        <q-separator />

        <ButtonSection />

        <q-separator />

        <CardsSection />

        <q-separator />

        <BannerSection />

      </div>
      <div class="col-4 q-pa-md">
        <p class="text-weight-bold">Contents</p>
      </div>
    </div>

  </div>
</template>

<script>
import ButtonSection from "./Sections/buttons.vue"
import CardsSection from "./Sections/cards.vue"
import BannerSection from "./Sections/banner.vue"

export default {
  name: 'About',
  components: {
    ButtonSection,
    CardsSection,
    BannerSection
  },
  data: () => ({
    toggle: false,
  }),
  watch: {
    toggle: function (value) {
      if(value) {
        setTimeout(() => {
          this.toggle = false
        }, 3000)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>