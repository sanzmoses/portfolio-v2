<template>
  <section class="about-me">
    <h1 class="title">ABOUT</h1>
    <h4 class="name text-primary">SANZ MOSES</h4>

    <div class="intro-container">
      <div class="line"></div>
      <p class="text-h6">I am a</p>

      <div class="designation-container">
        <AnimatedString 
          :list="designations" 
          :fontSize="1.3"
          :repeat="true"
          :classic="true"
          classes="left"
          color="primary"
        />
      </div>
    </div> 
    
    <p class="text-weight-thin text-justify">
      I've been working as a professional web developer since April of 2018. My career progressed from being a full-stack developer with Php (Laravel) and Yii, to a more narrowed field in the web development process which is front-end. I am adept in building websites from scratch using only vanilla JS and css preprocessors and also experienced mobile development using React-native and experienced other front-end tools like Angular but my repertoire has always been <span class="text-weight-bold">VueJs</span>.
    </p>
    <p class="text-weight-thin text-justify">
      Although I am more inclined in Web Development as it has been since my bread and butter. I am beginning to explore other fields such as design and even more specialize spheres like web 3d animations.         
    </p>
    <p class="text-weight-thin text-justify">
      Having an Insatiable desire to learn new things, I am always open for opportunities, love figuring things out on my own and constantly improving.
    </p>

    <div class="nav-btn mt-15">
      <!-- <q-icon class="animated fadeOutRight infinite slower mr-1" name="arrow_right_alt"></q-icon> -->

      <q-btn color="white mr-10" outline> 
        <span class="font-weight-bold text-lowercase">
          timeline
        </span>

        <div class="line"></div>
      </q-btn>      
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import AnimatedString from '@/components/Animated/Switch.vue'

export default {
  name: 'AboutMe',
  components: {
    AnimatedString
  },
  setup() {
    const designations = ref([
      "Front-end Developer", 
      "Javascript Developer", 
      "Web Developer"
    ]);

    onMounted(() => {
      
    })
    
    return { 
      designations
    }
  }
}
</script>

<style lang="scss" scoped>
.about-me {
  max-width: 960px;
  padding: 0 20px;
  .title {
    font-weight: bold;
    margin-bottom: 0px;
    opacity: .15;
    text-align: right;
  }

  .name {
    font-weight: bold;
    margin-bottom: 0px;
    margin-top: -30px;
    text-align: right;
  }

  .intro-container {
    position: relative;
    display: flex;
    max-width: 500px;
    .designation-container {
      width: 240px;
      margin-left: 15px;
      margin-bottom: 15px;
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
      width: calc(100vw - 75vw);
      background-color: white;
      position: absolute;
      top: 17px;
      left: 98px;
    }
  }
}
</style>