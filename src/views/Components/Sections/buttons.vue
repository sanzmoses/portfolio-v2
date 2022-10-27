<template>
  <div class="q-pa-md q-py-xl">

      <h5 class="q-mt-none text-weight-thin">Buttons</h5>

      <q-btn 
        @click="loading = true" 
        :loading="loading" 
        color="red" 
        icon="account_circle" 
        label="On Left" 
        class="q-mx-sm"
      />

      <q-btn 
        outline 
        size="sm"
        color="white" 
        label="Outline" 
        class="q-mx-sm"
      />

      <q-btn 
        @click="loading = true" 
        :disabled="loading" 
        color="white" 
        text-color="black" 
        label="Standard" 
        class="q-mx-sm"
      />

      <q-btn round color="secondary" icon="navigation" />

  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'About',
  setup () {
    const loading = ref(false)

    watchEffect(() => {
      if(loading.value) {
        setTimeout(() => {
          loading.value = false;
        }, 2000)
      }
    })

    return {
      drawer: ref(false),
      loading
    }
  },
  data: () => ({
  }),
}
</script>


<style lang="scss" scoped>
</style>