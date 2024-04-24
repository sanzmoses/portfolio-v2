<template>
    <div class="row justify-center">
        <div class="col-xs-12 col-sm-8">
          <div class="relative-position">
            <h1 class="page-title">PROJECTS</h1>
            <template v-for="project in projects" :key="project.name">
              <template v-if="project.id === active_id" >
                <ProjectItem 
                  :id="'project-'+project.id" 
                  :item="project" 
                  class="project" 
                />
              </template>
            </template>
          </div>
        </div>

        <div class="col-sm-2 gt-xs pl-3">
          <SideSeeker :items="projects" @seekerClicked="setShow" />
        </div> 
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import ProjectItem from "./ProjectItem.vue"
import { getData } from '@/composables/projects.js'
import { useProjectStore } from '@/stores/ProjectStore'
import SideSeeker from "@/components/Global/SideSeeker/index.vue";
import gsap from 'gsap'

export default {
  name: "Projects",
  components: {
      ProjectItem,
      SideSeeker
  },
  setup() {
    const { projects } = getData()
    const projectStore = useProjectStore()

    const setShow = (item) => {
      projectStore.SET_ACTIVE_PROJECT(item.id)
    }

    const active_id = computed(() => {
      return projectStore.active_project_id
    })

    return { 
      projects,
      setShow,
      active_id
    }
  },
  mounted() {
    gsap.to(".page-title", {
      opacity: 0.1,
      delay: 1
    });
  }
}
</script>

<style lang="scss" scoped>
.absolute-side {
  position: absolute;
  top: 0;
  right: -10px;
}

.page-title {
  position: absolute;
  margin: 0px;
  opacity: 1;
  font-size: 6em;
  font-weight: bold;
  transform: translate(20px, -74px);
}
</style>