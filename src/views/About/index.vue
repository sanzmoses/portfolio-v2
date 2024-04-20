<template>
  <div class="q-pa-xl">
    <h3 class="q-mt-none text-center">{{ '<About/>' }}</h3>

    <div class="row">
      <!-- <div class="col-4">
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
      </div> -->
      
      <div class="col-1"></div>
      <div class="col-5">
        <section class="pr-5">
          <ExperienceTimeline />
        </section>
      </div>
      <div class="col-1"></div>
      <div class="col-4">
        <section class="pr-5 fixed" style="max-width: 550px;">
          <p class="text-h6">I am a <span class="text-accent">Front-end Developer</span></p>
          <p class="text-weight-thin">
            I've been working as a professional web developer since April of 2018. My career progressed from being a full-stack developer with Php (Laravel) and Yii, to a more narrowed field in the web development process which is front-end. I am adept in building websites from scratch using only vanilla JS and css preprocessors and also experienced mobile development using React-native and experienced other front-end tools like Angular but my repertoire has always been <span class="text-weight-bold">Vue js</span>.
          </p>
          <p class="text-weight-thin">
            Although I am more inclined in Web Development as it has been since my bread and butter. I am beginning to explore other fields such as design and even more specialize spheres like web 3d animations.         
          </p>
          <p class="text-weight-thin">
            Having an Insatiable desire to learn new things, I am always open for opportunities, love figuring things out on my own and constantly improving.
          </p>
        </section>
      </div>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSkillsStore } from '@/stores/SkillsStore'
import _ from 'lodash'  
import ExperienceTimeline from "./Components/ExperienceTimeline.vue"

export default {
  name: 'About',
  components: {
    ExperienceTimeline
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
  mounted() {

  }
}
</script>


<style lang="scss" scoped>
.sticky {
  position: sticky;
}
</style>
