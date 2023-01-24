<template>
  <div 
    class="project-card" 
    @mouseenter="onHover"
    @mouseleave="timeline.resume()"
  > 
    
    <q-card class="no-border-radius" flat :bordered="false">

      <q-img
        :class="['col-12 image-ss', {'on-filter': on_filter}]"
        :src="getImageUrl(project.img)"
        :ratio="16/9"
      />

      <template v-if="project">
        <div class="overlay-section">
          <div class="bg-div"></div>
          <div class="content">
            <div class="gentext-container title-container">
              <p ref="title" class="text-h2 text-weight-bold mb-0">{{ project.name }}</p>
            </div>
            
            <div class="gentext-container subtitle-container">
              <p ref="subtitle" class="text-body1 text-weight-thin">
                {{ project.link }}
              </p>
            </div>            
          </div>
        </div>
      </template>
          
    </q-card>
  </div>
</template>

<script>
import { process } from '@/composables/jsonHighlighter.js'
import gsap from 'gsap'
import { onMounted, onBeforeUnmount, ref } from 'vue'

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
    const title = ref(null);
    const subtitle = ref(null);
    const on_filter = ref(true)
    let frontText;
    let timeline = gsap.timeline()

    const getImageUrl = (name) => {
      return new URL(`../assets/screenshot/a_${name}`, import.meta.url).href
    }

    function onHover() {
      let progress = Math.trunc(timeline.progress() * 100);
      if(progress < 32) {
        console.log("progress", progress)
        timeline.tweenTo(1)
      }
    }

    onMounted(() => {
      gsap.set(title.value, {
        opacity: 0,
        y: 30
      })

      gsap.set(subtitle.value, {
        opacity: 0,
        y: -50
      })

      timeline.to([title.value, subtitle.value], {
        y: 0,
        opacity: 1,
        ease: 'Power.easeInOut',
        duration: .4,
        delay: .5,
        snap: true,
      }); 

      timeline.to(title.value, {
        y: 50,
        opacity: 0,
        delay: 2,
        ease: 'Power.easeIn',
      }); 

      timeline.to(subtitle.value, {
        y: -30,
        opacity: 0,
        ease: 'Power.easeOut',
      }, "<"); 

      timeline.to(".bg-div", {
        opacity: 0,
        ease: 'Power.easeInOut',
        duration: .5,
        onStart: () => {
          on_filter.value = false
        }
      })

      timeline.play();
    })    

    return {
      project,
      syntaxHighlight,
      title,
      subtitle,
      on_filter,
      getImageUrl,
      timeline,
      onHover
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
      opacity: .9;
    }

    .content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 10;
      text-align: center;
      height: 100%;
    }
  }

  .image-ss {
    transition: all 0.4s ease-in-out;

    &.on-filter {
      filter: grayscale(100%);
    }
  }

  .gentext-container {
    overflow: hidden;
  }
}

</style>