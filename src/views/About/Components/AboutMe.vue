<template>
  <section class="about-me">
    <div class="title">
      <h1 class="text text-title">ABOUT</h1>
    </div>

    <div class="name text-primary">
      <h4 class="text text-name">SANZ MOSES</h4>
    </div>

    <div class="intro-container p-body">
      <div class="line line-top"></div>
      <p class="mb-0 about-text">I am a</p>

      <div class="designation-container">
        <AnimatedString 
          :list="designations" 
          :fontSize="is_mobile ? 1: 1.3"
          :repeat="true"
          :classic="true"
          classes="left"
          color="primary"
        />
      </div>
    </div> 
    
    <p class="text-weight-thin text-justify p-body about-text">
      I've been working as a professional web developer for {{ years_fromnow }} years. My career progressed from being a full-stack developer with Php (Laravel) and Yii, to a more narrowed field in the web development process which is front-end. I am adept in building websites from scratch using only vanilla JS and css preprocessors and also experienced mobile development using React-native and experienced other front-end tools like Angular but my repertoire has always been <span class="text-weight-bold">VueJs</span>.
    </p>
    <p class="text-weight-thin text-justify p-body about-text">
      Although I am more inclined in Front-end development as it has been since my bread and butter. I am beginning to explore other domains such as design and web 3d animations.         
    </p>
    <p class="text-weight-thin text-justify p-body about-text">
      Having an Insatiable desire to learn new things, I am always open for opportunities, love figuring things out on my own and constantly improving.
    </p>

    <div class="exp-yrs-container">
      <h1 class="text-weight-bold text-yrs">
        <span class="mr-1">{{ years_fromnow }}</span>
        <span class="text-h3">yrs of exp</span>
      </h1>
    </div>

    <div class="nav-btn mt-15">
      <!-- <q-icon class="animated fadeOutRight infinite slower mr-1" name="arrow_right_alt"></q-icon> -->

      <q-btn @click="goTimeline" color="white mr-10" outline> 
        <span class="font-weight-bold text-lowercase">
          timeline
        </span>

        <div class="line line-bot"></div>
      </q-btn>      
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import AnimatedString from '@/components/Animated/Switch.vue'
import gsap from 'gsap'
import moment from 'moment'
import { useResponsive } from '@/composables/responsive.js'

export default {
  name: 'AboutMe',
  components: {
    AnimatedString
  },
  setup(props,  { emit }) {
    const start_working = ref("2018-04-15")
    const { is_mobile } = useResponsive()

    const designations = ref([
      "Front-end Developer", 
      "Javascript Developer", 
      "Web Developer",
    ]);

    const years_fromnow = computed(() => {
      return moment().diff(start_working.value, 'years')
    })

    let timeline = gsap.timeline({
      ease: 'Power2.inOut',
      duration: 0.4,
      onReverseComplete: () => {
        emit('navigate', 'exp')
      }
    })

    const goTimeline = () => {
      // Reverse the timeline
      timeline.timeScale(1.5);
      timeline.reverse();
    }

    onMounted(() => {
      timeline
      .from(".text-title", {
          y: 200,
        })
      .from(".text-name", {
          y: -100,
        }, "<")
      .from(".text-yrs", {
          y: 300,
        }, "<")
      .from(".p-body", {
          x: -20,
          opacity: 0
        })
      .from(".nav-btn", {
          x: 20,
          opacity: 0
        }, "<")
      .to(".text-yrs", {
          opacity: 0.1,
        }, "<")
      .from(".line-top", {
          x: -800,
        })
      .from(".line-bot", {
          x: 800,
        }, "<")
      .to(".text-title", {
          opacity: 0.15,
        }, "<")
      

      timeline.play()
    })
    
    return { 
      designations,
      goTimeline,
      years_fromnow,
      is_mobile
    }
  }
}
</script>

<style lang="scss" scoped>
.about-me {
  position: relative;
  max-width: 960px;
  padding: 0 20px;
  .title {
    overflow: hidden;
    .text {
      font-weight: bold;
      margin: 0px;
      text-align: right;
    }
  }

  .name {
    overflow: hidden;
    margin-top: -30px;
    .text {
      font-weight: bold;
      margin: 0px;
      text-align: right;
    }
  }

  .intro-container {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 500px;
    margin-bottom: 5px;

    .designation-container {
      width: 240px;
      margin-left: 15px;
      margin-bottom: 5px;
    }

    .line {
      height: 1px;
      width: calc(100vw - 1000px);
      background-color: white;
      position: absolute;
      top: 15px;
      right: 520px;
    }
  }

  .nav-btn {
    text-align: right;
    position: relative;

    .line {
      height: 1px;
      width: calc(100vw - 60vw);
      background-color: white;
      position: absolute;
      top: 17px;
      left: 98px;
    }
  }

  .exp-yrs-container {
    overflow: hidden;
    position: absolute;
    transform: translate(-60px, -50px);

    h1 {
      margin: 0px;
    }
  }

  .about-text {
    font-size: 16px;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .about-me {
    .exp-yrs-container {
      transform: translate(0px, -50px) !important;
    }

    .text-title {
      font-size: 5.5em;
    }

    .text-name {
      font-size: 2em;
    }

    .about-text {
      font-size: 13px;
    }
  }
}
</style>