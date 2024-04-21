<template>
  <div class="about-container">
    <AboutMe />
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
    const lorem = ref(null);

    lorem.value = '';

    return {
      lorem
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
