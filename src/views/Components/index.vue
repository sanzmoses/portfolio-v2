<template>
  <div>
    <q-scroll-observer @scroll="onScroll" />
    <div class="row">
      <div class="col-12 col-sm-10 offset-sm-1">
        
        <div class="row justify-between">
          <h2 class="text-primary">Style Guide</h2>

          <div class="row flex-center">
            <SeamlessNav />
          </div>
        </div>

        <q-separator />

        <Text id="typography" />

        <q-separator />

        <Buttons id="buttons" />

        <q-separator />

        <Chips />

        <q-separator />

        <Cards />

        <q-separator />

        <Banner />

        <q-separator />

        <Dialogs />

        <q-separator />
        
        <Forms />

        <q-separator />

      </div>
    </div>

  </div>
</template>

<script>
import { debounce } from 'quasar'
import SeamlessNav from "./Single/SeamlessNav.vue"
import Buttons from "./Sections/buttons.vue"
import Chips from "./Sections/chips.vue"
import Cards from "./Sections/cards.vue"
import Banner from "./Sections/banner.vue"
import Dialogs from "./Sections/dialogs.vue"
import Forms from "./Sections/forms.vue"
import Text from "./Sections/text.vue"

export default {
  name: 'About',
  setup () {
    function onScroll (position) {
      console.log("position", position)
    }

    return { onScroll: debounce(onScroll, 200) }
  },
  components: {
    Buttons,
    Cards,
    Banner,
    Dialogs,
    Forms,
    Text,
    SeamlessNav,
    Chips
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