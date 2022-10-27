<template>
  <div class="q-pa-xl">
    <h3 class="q-mt-none">Home</h3>

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

    lorem.value = 'lorem ipsum tutut kasjdfhlkajshd fl adf';

    return { 
      lorem
    }
  }
}
</script>
