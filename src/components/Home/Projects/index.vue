<template>
    <div>
        <template v-for="project in projectStore.projects" :key="project.name">
            <ProjectItem :item="project" />
        </template>
    </div>
</template>

<script>
import { ref } from 'vue'
import ProjectItem from "./ProjectItem.vue"
import { useProjectStore } from '/src/stores/ProjectStore'

export default {
    name: "Projects",
    components: {
        ProjectItem
    },
    setup() {
        const projectStore = useProjectStore()

        const projects = ref([])
        const error = ref(null)

        const load = async () => {
            try { 
                let data = await fetch('http://localhost:3000/projects')
                if(!data.ok) {
                    throw Error("no data available")
                }

                projects.value = await data.json()

            } catch (err) {
                error.value = err.message
            }
        }

        load()

        return { 
            projectStore,
            projects, 
            error, 
            load
        }
    },
}
</script>