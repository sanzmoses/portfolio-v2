<template lang="">
  <div class="q-pa-md q-py-xl">

    <q-chip square size="lg" class="text-weight-bold">
      <q-avatar icon="star" color="accent" text-color="black" />
      Chips
    </q-chip>

    <p class="q-my-xl"></p>

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
import { ref } from 'vue'
import { getData } from '@/composables/themes.js'

export default {
  name: 'chips',
  setup () {
    const { themes, icons } = getData()

    return {
      drawer: ref(false),
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