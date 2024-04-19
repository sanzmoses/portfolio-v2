<template>
  <div class="q-pa-xl">
    <Projects />
  </div>
</template>

<script>
import Projects from "../components/Home/Projects/index.vue"
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Projects
  },
  setup() {
    const lorem = ref(null);

    lorem.value = '';

    return { 
      lorem
    }
  }
}
</script>
