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
        <template v-if="!loading">
          <q-img
            :img-class="`image-ss ${drawer?'on-filter':''}`"
            :class="[drawer?'col-6 col-md-8':'col-12']"
            :src="getImageUrl(project.img)"
            :ratio="16/9"
          />
        </template>
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
import { ref, watchEffect } from 'vue'
import { getData } from '@/composables/projects.js'

export default {
  name: "BrowserCard",
  setup () {
    const drawer = ref(true)
    const { pretty_json, project } = getData()

    const loading = ref(true)

    const getImageUrl = (name) => {
        return new URL(`../assets/screenshots/${name}`, import.meta.url).href
    }

    watchEffect(() => {
      if(project.value) {
        console.log("project", project.value.img)
        loading.value = false
      }
    })

    return {
      loading,
      drawer,
      project,
      pretty_json,
      getImageUrl,
      toggleDrawer () {
        drawer.value = !drawer.value
      }
    }
  },
  computed: {
    static_image() {
      if(this.project) {
        console.log(this.project)
        // return require(this.project.img)
      }

      return ""
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
    width: 100%;
  }

  .image-ss {
    margin-top: -20px !important;
    transition: all 0.4s ease-in-out;

    &.on-filter {
      filter: grayscale(100%);
    }
  }
}


</style>