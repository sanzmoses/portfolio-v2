<template>
  <div class="q-pa-md q-gutter-sm">
    
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Starter',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    
  },
  setup(props) {
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

<style lang="scss" scoped>

</style>
