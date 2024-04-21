<template>
  <div class="about-container">
    <template v-if="nav == 'about'">
      <AboutMe @navigate="navTo" />
    </template>
    <template v-else>
      <ExperienceTimeline @navigate="navTo" />
    </template>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import _ from 'lodash'  
import ExperienceTimeline from "./Components/ExperienceTimeline.vue"
import Skills from "./Components/Skills.vue"
import AboutMe from "./Components/AboutMe.vue"

export default {
  name: 'About',
  components: {
    ExperienceTimeline,
    AboutMe,
    Skills,
  },
  setup () {
    const nav = ref('about');

    const navTo = name => {
      nav.value = name
    }

    return {
      nav,
      navTo
    }
  },
}
</script>


<style lang="scss" scoped>
.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

</style>
