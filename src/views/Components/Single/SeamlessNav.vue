<template>
  <div>
    <q-btn 
      @click="seamless = !seammless" 
      size="xl"
      text-color="black" 
      icon="menu" 
      color="primary"
      push 
      round 
    />

    <q-dialog 
      v-model="seamless" 
      position="right"
      seamless 
    >
      <q-card style="width: 350px">
        <q-linear-progress :value="0.6" color="primary" />

        <q-card-section class="row items-center no-wrap">
          <div>
            <h5 class="q-ma-none">Table of Contents</h5>
          </div>

          <q-space />
          <q-btn flat round icon="close" v-close-popup />
        </q-card-section>

        <q-card-section class="q-px-xl q-pt-none q-pb-lg">
          <template v-for="link in compagestore.links" :key="'links-'+link">
            <q-btn 
              flat 
              class="text-capitalize" 
              color="warning" 
              :label="link"
            />
          </template>
          
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useComponentsPageStore } from '/src/stores/ComponentsPageStore'

export default {
  setup () {

    const compagestore = useComponentsPageStore()

    return {
      seamless: ref(false),
      compagestore
    }
  }
}
</script>

<style lang="">
</style>