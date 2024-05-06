<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-md-8">
      <div class="relative-position">
        <h1 class="page-title">PROJECTS</h1>
        <template v-for="project in projects" :key="project.name">
          <template v-if="is_tablet">
            <ProjectItem 
              :id="'project-'+project.id" 
              :item="project" 
              class="project mb-20" 
            />
          </template>
          <template v-else>
            <template v-if="project.id === active_id" >
              <ProjectItem 
                :id="'project-'+project.id" 
                :item="project" 
                class="project" 
              />
            </template>
          </template>
          
        </template>
      </div>
    </div>

    <div class="col-sm-2 gt-sm pl-3">
      <SideSeeker :items="projects" @seekerClicked="setShow" />
    </div> 
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ProjectItem from "./ProjectItem.vue"
import { getData } from '@/composables/projects.js'
import { useResponsive } from '@/composables/responsive.js'
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
    const { is_mobile, is_tablet } = useResponsive()

    const setShow = (item) => {
      projectStore.SET_ACTIVE_PROJECT(item.id)
    }

    const active_id = computed(() => {
      return projectStore.active_project_id
    })

    return { 
      projects,
      setShow,
      active_id,
      is_mobile,
      is_tablet
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

@media (max-width: $breakpoint-xs-max) {
  .page-title {
    font-size: 4em;
  }
}
</style>