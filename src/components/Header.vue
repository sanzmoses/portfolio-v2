<template>
  <div id="header" :class="['fixed-header d-flex justify-space-between']">
    <q-toolbar>
      <q-btn flat @click="goToSetTab('Projects')" >
        <q-img
          :src="logo"
          style="height: 20px; width: 20px"
        />

        <span class="ml-2">sanzmoses</span>
      </q-btn>
      <q-space />
      
      <q-tabs v-model="tab">
        <template v-for="route in routes" :key="route.name">
          <q-tab 
            color="primary"
            class="text-capitalize"
            @click="goTo(route.link)" 
            :name="route.name" 
            :label="route.name"
            :value="route.name"
          />
        </template>
      </q-tabs>
    </q-toolbar>    
  </div>
</template>

<script>
import { useRouter, useRoute  } from 'vue-router';
import { ref, watch, computed } from 'vue'
import gsap from 'gsap'

export default {
  setup() {
    const routes = ref([
      { name: 'Projects', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ])

    let first_load = false;
    const router = useRouter()
    const vueRoute = useRoute()
    const tab = ref('Projects')

    const logo = computed(() => {
      return new URL(`../assets/sanz_logo_accent.svg`, import.meta.url).href
    })

    const goTo = (value) => {
      router.push(value);
    }   

    const goToSetTab = (value) => {
      router.push("/");
      tab.value = "Projects"
    }   
    
    // Bad Implementation
    watch(() => vueRoute.name, () => {
      if(!first_load) {
        tab.value = "Projects"
        first_load = true;
      }
    });    

    return { 
      goTo,
      tab,
      routes,
      vueRoute,
      drawer: ref(false),
      goToSetTab,
      logo
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