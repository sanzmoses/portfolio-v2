<template>
  <div id="header" :class="['fixed-header d-flex justify-space-between']">
    <q-toolbar>
      <q-btn flat @click="goToSetTab('Projects')" class="header-logo" >
        <q-img
          :src="logo"
          style="height: 20px; width: 20px"
        />

        <span class="ml-2">sanzmoses</span>
      </q-btn>
      <q-space />
      
      <q-tabs v-model="tab" class="header-links">
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
import gsap from 'gsap'
import { useRouter, useRoute  } from 'vue-router';
import { ref, watchEffect, computed, onMounted } from 'vue'
import { useGlobalStore } from '/src/stores/GlobalStore'

export default {
  setup() {
    const routes = ref([
      { name: 'Projects', link: '/projects' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ])

    const router = useRouter()
    const vueRoute = useRoute()
    const tab = ref('Projects')
    const toolbar = ref(null)
    const global_store = useGlobalStore()
    let timeline = gsap.timeline()

    const logo = computed(() => {
      return new URL(`../assets/sanz_logo_accent.svg`, import.meta.url).href
    })

    const goTo = (value) => {
      router.push(value);
    }   

    const goToSetTab = (value) => {
      router.push("/projects");
      tab.value = "Projects"
    }   
        
    watchEffect(async () => {
      if(!global_store.initial_loading) {
        timeline.play();
      }
    })

    onMounted(() => {
      timeline.fromTo(".header-logo", {
        y: -100
      }, {
        y: 0,
        duration: .7,
        ease: 'Power.easeIn',
      })

      timeline.fromTo(".header-links", {
        y: -100
      }, {
        y: 0,
        delay: .2,
        duration: .7,
        ease: 'Power.easeIn',
      }, "<")

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

      timeline.pause();
    })

    return { 
      goTo,
      tab,
      routes,
      vueRoute,
      drawer: ref(false),
      goToSetTab,
      logo,
      toolbar,
    }
  },
}
</script>

<style lang="scss">
.fixed-header {
  position: fixed;
  width: 100%;
  z-index: 99;
}
</style>