<template>
  <div class="q-pa-md q-gutter-sm">
    
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Starter',
  components: {
    
  },
  setup() {
    const lorem = ref(null);

    lorem.value = '';

    onMounted(() => {
      
    })
    
    return { 
      lorem
    }
  }
}
</script>
