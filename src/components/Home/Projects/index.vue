<template>
    <div class="row">
        <template v-for="project in projects" :key="project.name">
            <ProjectItem :id="'project-'+project.id" :item="project" class="project" />
        </template>
    </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue"
import { getData } from '@/composables/projects.js'
import gsap from 'gsap'

export default {
  name: "Projects",
  components: {
      ProjectItem
  },
  setup() {
    const { projects } = getData()

    return { 
      projects
    }
  },
  mounted() {
    setTimeout(() => {
      this.projects.forEach(project => {
        gsap.from("#project-"+project.id, {
          scrollTrigger: {
            trigger: "#project-"+project.id,
            // start: "top center",
            // end: "20%",
            toggleActions: "restart pause resume none",
            scrub: 1,
          },
          x: -100,
          opacity: 0,
          
        });
      })
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
</style>