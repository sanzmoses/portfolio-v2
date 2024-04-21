<template>
  <div 
    class="project-card" 
    @mouseenter="onHover"
    @mouseleave="timeline.resume()"
  > 
    <div class="outer-text upper-left">
      <AnimatedString 
        :list="project.responsibilities" 
        :fontSize="1.3"
        :repeat="responsibilities_length > 1 ? true: false"
        color="primary"
      />
    </div>

    <div class="outer-text upper-right">
      <a target="_blank" :href="project.link" class="link-name text-accent">
        {{ project.nickname }}
        <q-icon color="accent" name="mdi-call-made" />      
        <span class="underline"></span>    
      </a>
    </div>

    <q-card 
      class="no-border-radius" 
      :bordered="false"
      flat 
    >
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

          <!-- <div class="content-details">
            <div class="bg-div-details"></div>
            <p class="text-subtitle mb-0">Project:</p> 
            <p class="text-body1 text-primary">{{ project.nickname  }}</p>

            <p class="text-subtitle mb-0">Work Type:</p> 
            <p class="text-body1 text-primary">{{ project.type }}</p>
          </div>    -->

        </div>
      </template>
          
    </q-card>

    <div class="outer-text lower-right" ref="tools">
      <template v-for="(tool, index) in project.tools" :key="'tool-'+tool">
        <section class="tool-container">
          <p :class="['tool', 'tool-'+index]">{{ tool }}</p>
          <div v-if="index < tools_length - 1" :class="['toolline', 'toolline-'+index]"></div> 
        </section>
      </template>
    </div>

  </div>
</template>

<script>
import gsap from 'gsap'
import { process } from '@/composables/jsonHighlighter.js'
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import AnimatedString from './Animated/Switch.vue'

export default {
  name: "BrowserCard",
  components: {
    AnimatedString
  },
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
    let skills_timeline = gsap.timeline({ delay: 1 })

    const getImageUrl = (name) => {
      return new URL(`../assets/screenshot/a_${name}`, import.meta.url).href
    }

    const responsibilities_length = computed(() => {
      return project.responsibilities.length
    })

    const tools_length = computed(() => {
      return project.tools.length
    })

    function onHover() {
      let progress = Math.trunc(timeline.progress() * 100);
      if(progress < 32) {
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

      gsap.fromTo(".link-name", {
        y: 100,
      }, {
        y: 0,
        duration: .5,
        ease: 'Power.easeOut',
        delay: 1
      })

      gsap.fromTo(".underline", {
        x: -150,
      }, {
        x: 150,
        duration: 1.5,
        ease: 'Power.easeOut',
        repeat: -1
      })

      project.tools.forEach((tool, index) => {
        skills_timeline.fromTo('.tool-'+index, {
          x: -100,
        }, {
          x: 0,
          duration: .5,
          ease: 'Power.easeOut',
        }); 
        
        if(index < tools_length.value - 1) {
          skills_timeline.fromTo('.toolline-'+index, {
            width: 0,
          }, {
            width: 30,
            duration: .1,
            ease: 'Power.easeIn',
          }, ">")
        };
      })

      timeline.play();
      skills_timeline.play()
    })    

    return {
      project,
      syntaxHighlight,
      title,
      subtitle,
      on_filter,
      timeline,
      responsibilities_length,
      getImageUrl,
      onHover,
      tools_length,
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
  overflow: visible;
  position: relative;
  padding: 0px 0px 0px 25px;

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

  .content-details {
    position: absolute;
    bottom: 20px;
    padding: 30px 30px;
    max-width: 30em;

    .bg-div-details {
      position: absolute !important;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: $dark-page
    }

    * {
      position: relative;
    }
  }

  .outer-text {
    position: absolute;

    &.upper-right {
      top: -25px;
      right: -10px;
      min-width: 130px;
      display: flex;
      overflow: hidden;
    }

    &.upper-left {
      top: 51px;
      left: -57px;
      min-width: 130px;
      transform: rotate(-90deg);
    }

    &.lower-right {
      bottom: -28px;
      left: 28px;
      display: flex;
      align-items: center;

      .tool-container {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
      }

      .tool {
        margin: 0px;

        &line {
          width: 30px;
          border-top: 1px solid white;
          height: 1px;
          margin: 0px 20px;
        }
      }
    }
  }

  .link-name {
    z-index: 10;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;

    .underline {
      border-bottom: 1px dashed rgb(0, 81, 255);
      display: inline-block;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
  }
}

</style>