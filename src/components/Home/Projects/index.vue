<template>
    <div>
        <template v-for="project in projects" :key="project.name">
            <ProjectItem :item="project" />
        </template>
    </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue"
import { getData } from '@/composables/projects.js'

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
}
</script>