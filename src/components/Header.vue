<template>
  <div id="header" :class="['fixed-header d-flex justify-space-between']">
    <q-toolbar>
        <div class="header-logo" @click="goToSetTab('/')">
          <q-img
            class="logo"
            :src="logo"
          />

          <div class="overflow-hidden">
            <p class="ml-2 logo-text">SANZMOSES</p>
          </div>
        </div>
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
import { useResponsive } from '@/composables/responsive.js'

export default {
  setup() {
    const routes = ref([
      { name: 'Projects', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ])

    const router = useRouter()
    const vueRoute = useRoute()
    const tab = ref('Projects')
    const toolbar = ref(null)
    const global_store = useGlobalStore()

    const { is_mobile } = useResponsive()

    const timeline = gsap.timeline({
      onStart: () => {
        // initialize route name
        const route_name = vueRoute.name
        tab.value = route_name
      }
    })

    const logo_animation = gsap.timeline({ 
      duration: 0.4, 
      ease: 'Power2.inOut',
      paused: true,
    })

    const logo = computed(() => {
      return new URL(`../assets/sanz_logo_accent.svg`, import.meta.url).href
    })

    const goTo = (value) => {
      router.push(value);
    }   

    const goToSetTab = (value) => {
      router.push(value);
      tab.value = "Projects"
    }   
        
    watchEffect(async () => {
      if(!global_store.initial_loading) {
        timeline.play();
      }

      if(is_mobile.value) {
        logo_animation.play();
      } else {
        logo_animation.reverse();
      }
    })

    onMounted(() => {
      logo_animation.to(".logo-text", {
        x: -150,
        width: 0,
      })

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
        paused: true,
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

.header-logo {
  overflow: hidden;
  display: flex;
  cursor: pointer;
  padding: 10px 5px;
  display: flex;
  align-items: center;

  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: rgba(255, 255, 255, 0.10);
  }

  .logo {
    height: 20px; 
    width: 20px;

  }

  .logo-text {
    display: inline-block;
    margin: 0px;
  }
}
</style>