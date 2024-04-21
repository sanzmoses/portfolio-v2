<template>
  <div>
    <Header />

    <div class="pt-10">
      <router-view v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { useRoute  } from 'vue-router';
import { onMounted } from 'vue'
import { useGlobalStore } from '/src/stores/GlobalStore'

export default {
  name: 'App',
  components: {
    Header,
  },
  setup() {
    const global_store = useGlobalStore()
    const setInitialLoading = global_store.SET_INITIAL_LOADING

    const vueRoute = useRoute()

    onMounted(async () => {
      setTimeout(() => {
        if(vueRoute.name !== "Initial") {
          setInitialLoading(false)
        }
      }, 100)
    })
   
  }
}
</script>

<style lang="scss">
body {
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: blue orange;   /* scroll thumb and track */ 
}
</style>
