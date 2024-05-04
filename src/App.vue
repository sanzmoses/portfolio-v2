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

    <template v-if="is_mobile">
      <div class="cover-banner">
        <q-banner class="bg-red">
          <template v-slot:avatar>
            <q-icon name="system_security_update_warning" color="white" />
          </template>

          <p class="mb-0">Mobile design is currently under construction.</p>
          <p class="mb-0">Please visit the site in a bigger screen.</p>
          <p class="mb-0">Sorry for the inconvinience</p>
        </q-banner>
      </div>
    </template>

    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { useRoute  } from 'vue-router';
import { onMounted, computed, watch } from 'vue'
import { useGlobalStore } from '/src/stores/GlobalStore'
import { useQuasar } from 'quasar'

export default {
  name: 'App',
  components: {
    Header,
  },
  setup() {
    const global_store = useGlobalStore()
    const setInitialLoading = global_store.SET_INITIAL_LOADING

    const vueRoute = useRoute()
    const $q = useQuasar()

    const is_mobile = computed(() => {
      const is_height_mb = $q.screen.height < 500
      return $q.screen.lt.sm || is_height_mb ? true : false
    })

    watch(is_mobile, () => {
      const body = document.body;

      if(is_mobile) {
        // Change overflow to hidden
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    })

    onMounted(async () => {
      setTimeout(() => {
        if(vueRoute.name !== "Initial") {
          setInitialLoading(false)
        }
      }, 100)
    })
   
    return {
      is_mobile
    }
  }
}
</script>

<style lang="scss">
body {
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: blue orange;   /* scroll thumb and track */ 
}

.cover-banner {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(14, 12, 24);
  z-index: 99;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
