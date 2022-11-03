<template>
  <div class="browser-card">
    <q-bar dark class="bg-dark text-white">
      <template v-if="project">
        <div class="text-left">
          <!-- <q-badge outline color="primary" :label="project.name" /> -->

          <q-chip
            color="primary"
            text-color="black"
            size="sm"
          >
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="ellipsis">
              {{ project.name }}
              <q-tooltip>{{ project.name }}</q-tooltip>
            </div>
          </q-chip>
          
        </div>
        <div class="col text-center">
          <p class="text-caption q-ma-none">{{ project.link }}</p>
        </div>
      </template>

      <q-btn dense flat round icon="lens" size="7px" color="red" />
      <q-btn dense flat round icon="lens" size="7px" color="yellow" />
      <q-btn @click="toggleDrawer" dense flat round icon="lens" size="7px" color="green" />
    </q-bar>    
    
    <q-card class="no-border-radius" flat :bordered="false">
      <q-card-section horizontal>
        <q-img
          :class="[drawer?'col-6 col-md-8':'col-12']"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          :ratio="16/9"
        />
        <q-card-section v-show="drawer" class="console-section">
          <template v-if="pretty_json">
            <highlightjs
              class="text-caption text-weight-thin q-ma-none"
              language="json"
              :code="pretty_json"
            />
          </template>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getData } from '@/composables/projects.js'

export default {
  name: "BrowserCard",
  setup () {
    const drawer = ref(false)
    const { pretty_json, project } = getData()
    
    return {
      drawer,
      project,
      pretty_json,
      toggleDrawer () {
        drawer.value = !drawer.value
      }
    }
  }
}
</script>

<style lang="scss">
.browser-card {
  max-width: 900px;
  max-height: 600px;
  overflow: hidden;
  border-radius: 5px;

  .console-section {
    max-height: 600px;
    overflow: auto;
    padding: 0px;
  }
}
</style>