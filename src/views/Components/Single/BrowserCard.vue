<template>
  <div class="rounded-borders" style="overflow: hidden; max-width: 800px;">
    
    <q-bar dark class="bg-dark text-white">
      <div class="col text-center">
        linkvalue.net
      </div>

      <q-btn dense flat round icon="lens" size="7px" color="red" />
      <q-btn dense flat round icon="lens" size="7px" color="yellow" />
      <q-btn @click="toggleDrawer" dense flat round icon="lens" size="7px" color="green" />
    </q-bar>    
    
      <q-layout view="hHh lpR fFf" container style="height: 450px" class="bg-black">

        <q-drawer v-model="drawer" side="right" bordered class="bg-black">
          <!-- drawer content -->
        </q-drawer>
        <q-page-container>
          <q-img
            class="col-5"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            :ratio="16/9"
          />
        </q-page-container>
      </q-layout>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "BrowserCard",
  setup () {
    const drawer = ref(false)

    return {
      drawer,
      toggleDrawer () {
        drawer.value = !drawer.value
      }
    }
  }
}
</script>

<style lang="scss">
</style>