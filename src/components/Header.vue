<template>
  <div id="header" :class="['fixed-header text-center']">
    <q-tabs v-model="tab">
      <template v-for="route in routes" :key="route.name">
        <q-tab 
          color="primary"
          class="text-capitalize"
          @click="goTo(route.link)" 
          :name="route.name" 
          :label="route.name" 
        />
      </template>
      </q-tabs>
  </div>
</template>

<script>
import { useRouter, useRoute  } from 'vue-router';
import { ref, watchEffect } from 'vue'
import gsap from 'gsap'

export default {
  setup() {
    const routes = ref([
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Components', link: '/components' },
    ])

    const router = useRouter();
    const vueRoute = useRoute();

    const goTo = (value) => {
      router.push(value);
    }   

    return { 
      goTo,
      routes,
      vueRoute,
      drawer: ref(false),
      tab: ref('Home')
    }
  },
  mounted() {
    let animation = gsap.to("#header", {
          backgroundColor: '#00355c', 
          duration: .5,
          paused: true
        });
    window.onscroll = () => {
      if(document.documentElement.scrollTop > 100) {
        animation.play()
      } else {
        animation.reverse()
      }
    };
  }
}
</script>

<style lang="scss">
.fixed-header {
  position: fixed;
  width: 100%;
  z-index: 99;
}
</style>