<template>
  <div>
    <q-scroll-observer @scroll="onScroll" />
    <div class="row">
      <div class="col-12 col-sm-10 offset-sm-1">
        
        <div class="row justify-between">
          <h2 class="text-primary">Style Guide</h2>

          <div class="row flex-center">
            <SeamlessNav :class="[{'fixed': is_fixed}]" />
          </div>
        </div>

        <q-separator />

        <template v-for="link in compagestore.links" :key="'links-'+link">
          <component :id="link" :is="link"></component>

          <q-separator />
        </template>

      </div>
    </div>

  </div>
</template>

<script>
import { debounce } from 'quasar'
import SeamlessNav from "./Single/SeamlessNav.vue"
import buttons from "./Sections/buttons.vue"
import chips from "./Sections/chips.vue"
import cards from "./Sections/cards.vue"
import banner from "./Sections/banner.vue"
import dialogs from "./Sections/dialogs.vue"
import forms from "./Sections/forms.vue"
import typography from "./Sections/typography.vue"
import { useComponentsPageStore } from '/src/stores/ComponentsPageStore'
import { ref } from 'vue'

export default {
  name: 'About',
  setup () {
    const compagestore = useComponentsPageStore()
    const setActive = compagestore.SET_ACTIVE
    const is_fixed = ref(false)

    function onScroll (evt) {
      console.log("position", evt.position)
      if(evt.position.top > 50) {
        is_fixed.value = true;
      } else {
        is_fixed.value = false;
      }
    }

    return { 
      onScroll: debounce(onScroll, 200),
      compagestore,
      setActive,
      is_fixed
    }
  },
  components: {
    SeamlessNav,
    buttons,
    cards,
    banner,
    dialogs,
    forms,
    typography,
    chips
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