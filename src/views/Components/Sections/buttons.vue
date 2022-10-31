<template>
  <div class="q-pa-md q-py-xl">

      <h5 class="q-mt-none text-weight-thin">Buttons</h5>

      <template v-for="(theme, index) in themes" :key="theme">
        <q-btn 
          outline
          @click="loading = true" 
          :loading="loading" 
          :color="theme" 
          :label="theme" 
          :icon="icons[index]"  
          class="q-ma-sm q-px-lg q-py-sm text-capitalize"
        />

        <q-btn 
          @click="loading = true" 
          :loading="loading" 
          :color="theme" 
          :label="theme" 
          text-color="black"
          class="q-ma-sm q-px-lg q-py-sm text-capitalize"
        />
      </template>

      <br />

      <template v-for="(theme, index) in themes" :key="theme">
        <q-btn 
          round 
          :color="theme"
          text-color="white"
          :icon="icons[index]" 
          class="q-ma-sm"
        />
      </template>

      <h5 class="text-weight-thin">Chips</h5>

      <template v-for="(theme, index) in themes" :key="theme">
        <q-chip 
          outline 
          :color="theme"
          text-color="white"
          :icon="icons[index]"
        >
          {{ theme }}
        </q-chip>
      </template>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { getData } from '@/composables/themes.js'

export default {
  name: 'About',
  setup () {
    const loading = ref(false)
    const { themes, icons } = getData()

    watchEffect(() => {
      if(loading.value) {
        setTimeout(() => {
          loading.value = false;
        }, 2000)
      }
    })

    return {
      drawer: ref(false),
      loading,
      themes,
      icons
    }
  },
  data: () => ({
  }),
}
</script>


<style lang="scss" scoped>
</style>