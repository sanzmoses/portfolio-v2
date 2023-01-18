<template>
  <div class="project-card"> 
    
    <q-card class="no-border-radius" flat :bordered="false">

      <q-img
        class="col-12 image-ss on-filter"
        :src="getImageUrl(project.img)"
        :ratio="16/9"
      />

      <template v-if="project">
        <div class="overlay-section">
          <div class="bg-div"></div>
          <div class="content">
            <p class="text-h4 text-weight-bold mt-2 text">{{ project.name }}</p>

            <p class="text-body1 text-weight-thin text">
              <q-icon class="text-h5" :name="project.icon" />
              {{ project.description }}
            </p>
          </div>
        </div>
      </template>
          
    </q-card>
  </div>
</template>

<script>
import { process } from '@/composables/jsonHighlighter.js'
import gsap from 'gsap'
import { onMounted } from 'vue'

export default {
  name: "BrowserCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const { syntaxHighlight } = process(props.project)
    const project = props.project

    const getImageUrl = (name) => {
      return new URL(`../assets/screenshot/a_${name}`, import.meta.url).href
    }

    onMounted(() => {
      gsap.to('.text', {
        x: 0,
        opacity: 1,
        ease: 'Power.easeIn',
        duration: .4,
        stagger: .1
      }); 
    })

    return {
      project,
      syntaxHighlight,
      getImageUrl,
    }
  },
}
</script>

<style lang="scss">
.project-card {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 650px;
  overflow: hidden;
  position: relative;

  .overlay-section {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    padding: 20px;

    .bg-div {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      background: $grey-10;
      z-index: 9;
      opacity: .7;
    }

    .content {
      position: relative;
      z-index: 10;
      text-align: left;
    }
  }

  .image-ss {
    transition: all 0.4s ease-in-out;

    &.on-filter {
      filter: grayscale(100%);
    }
  }
}

</style>