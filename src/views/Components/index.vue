<template>
  <div class="q-pa-xl">

    <div class="row">
      <div class="col-8">
        <h3>Quasar Components</h3>

        <q-separator />

        <Buttons />

        <q-separator />

        <Cards />

        <q-separator />

        <Banner />

        <q-separator />

        <Dialogs />

        <q-separator />
        
        <Forms />

      </div>
      <div class="col-4 q-pa-md">
        <p class="text-weight-bold">Contents</p>
      </div>
    </div>

  </div>
</template>

<script>
import Buttons from "./Sections/buttons.vue"
import Cards from "./Sections/cards.vue"
import Banner from "./Sections/banner.vue"
import Dialogs from "./Sections/dialogs.vue"
import Forms from "./Sections/forms.vue"

export default {
  name: 'About',
  components: {
    Buttons,
    Cards,
    Banner,
    Dialogs,
    Forms
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