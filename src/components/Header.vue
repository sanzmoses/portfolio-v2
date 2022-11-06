<template>
  <div class="text-center q-pt-sm">
    <template v-for="route in routes" :key="route.name">
      <q-btn 
        :label="route.name" 
        :outline="route.name === vueRoute.name" 
        :flat="route.name !== vueRoute.name"
        @click="goTo(route.link)" 
        color="primary"
        class="text-capitalize"
        
      />
    </template>
  </div>
</template>

<script>
import { useRouter, useRoute  } from 'vue-router';
import { ref } from 'vue'

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
      drawer: ref(false)
    }
  },
}
</script>