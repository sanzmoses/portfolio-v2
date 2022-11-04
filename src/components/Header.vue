<template>
  <div class="text-center q-pt-sm">
    <template v-for="route in routes" :key="route.name">
      <q-btn 
        :label="route.name"  
        @click="goTo(route.link)" 
        color="primary"
        class="text-capitalize"
        flat 
      />
    </template>

    <q-btn 
      label="open"  
      @click="drawer = true" 
      color="primary"
      class="text-capitalize"
      flat 
    />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue'

export default {
  setup() {
    const routes = ref([
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Components', link: '/components' },
    ])

    const router = useRouter();

    const goTo = (value) => {
      router.push(value);
    }   

    return { 
      goTo,
      routes,
      drawer: ref(false)
    }
  },
}
</script>