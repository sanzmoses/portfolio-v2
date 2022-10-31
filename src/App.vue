<template>
  <div>
    <Header />

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
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
body {
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: blue orange;   /* scroll thumb and track */ 
}
</style>
