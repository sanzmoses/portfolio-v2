<template>
  <div>

<!-- for pre code syntax -->
<pre class="text-caption text-weight-thin">
<code v-html="syntaxHighlight(project)"></code>
</pre>

  </div>
</template>

<script>
import { ref } from 'vue'
import { process } from '@/composables/jsonHighlighter.js'
import { useComponentsPageStore } from '/src/stores/ComponentsPageStore'
import { useSkillsStore } from '@/stores/SkillsStore'

export default {
  name: "Reference",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const { syntaxHighlight } = process(props.project)
    const compagestore = useComponentsPageStore()
    const skills_store = useSkillsStore()

    const drawer = ref(true)
    const drawer_toggled = ref(false)

    const project = props.project

    console.log('lodash', _.find(skills_store.skills, { exp: '12'}))
    
    // standard practise
    const getImageUrl = (name) => {
        return new URL(`../assets/screenshot/a_${name}`, import.meta.url).href
    }

    return {
      drawer,
      project,
      getImageUrl,
      drawer_toggled,
      syntaxHighlight,
      compagestore,

      // possible
      toggleDrawer () {
        drawer.value = !drawer.value
        drawer_toggled.value = true;
      },
    }
  }
}
</script>
<style lang="">
  
</style>