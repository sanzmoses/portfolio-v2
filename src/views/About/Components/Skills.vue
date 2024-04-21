<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="col-4">
        <p class="text-h5 text-primary">Skills</p>
        <div class="q-pa-md text-white">
          <q-icon color="white" name="fab fa-html5" />
          <q-tree
            :nodes="skills_on_tree"
            node-key="label"
            v-model:expanded="expanded"
            dark
          />
        </div>
      </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useSkillsStore } from '@/stores/SkillsStore'

export default {
  name: 'Skills',
  components: {
    
  },
  setup () {
    const skills_store = useSkillsStore()
    const expanded = ref([ 'Satisfied customers (with avatar)', 'Good food (with icon)' ])

    const skills_on_tree = skills_store.skills.map(skill => {
      const tag_children = skill.tags.map(tag => {
        return { 
          label: `Tag : ${tag}` 
        }
      })

      const children = [
        { label: `Skill level : ${skill.skillLevel}` },
        { label: `Experience : ${skill.exp} months` },
        { label: 'Tags', children: tag_children  }
      ]

      return {
        label: skill.name,
        icon: skill.logo,
        iconColor: skill.color,
        children: children,
      }
    })

    return {
      expanded,
      skills_store,
      skills_on_tree
    }
  },
}
</script>
