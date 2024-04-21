<template>
  <div :class="['container', 'text-'+color, classes]" :style="{ fontSize: fontSize+'em', height: fontSize+.5+'em' }">
    
    <template v-for="(word, word_index) in list" :key="`word-${word}-${word_index}`">
      <span :class="`letter letter-${word_index}`">{{ word }}</span>
    </template>

  </div>
</template>

<script>
import gsap from 'gsap'
import { ref, onMounted } from 'vue'

export default {
  name: "Typing",
  props: {
    list: {
      type: [Array, String],
      required: true
    },
    fontSize: {
      type: Number,
      default: 1.2,
    },
    repeat: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "white"
    },
    classes: {
      type: String,
      default: "right"
    },
    classic: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const blink = ref(false)

    const { fontSize, repeat, list, classic } = props

    let timeline = gsap.timeline({
      repeat: (repeat)? -1: 0,
      delay: 1
    })
    
    const displacement = fontSize * 22;
    const dynamic_disp = classic? -displacement: displacement

    onMounted(() => {
      if(list.length > 1) {
        list.forEach((item, index) => {
          timeline
          .fromTo(`.letter-${index}`,
          {
            y: dynamic_disp,
          },
          {
            y: 3
            ,
            duration: .5,
            ease: 'Power.easeIn',
          })
          .to(`.letter-${index}`, {
            y: displacement,
            delay: 2,
            duration: .5,
            ease: 'Power.easeOut',
          })
        })
      } else {
        timeline
          .fromTo(`.letter-0`,
          {
            y: displacement,
            duration: .5,
            ease: 'Power.easeIn',
          },
          {
            y: 3
            ,
            duration: .5,
            ease: 'Power.easeIn',
          })
      }
      
      
      timeline.play()
    })   
    
    return {
      blink
    }
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
  overflow: hidden;

  &.right {
    .letter {
      position: absolute !important;
      top: 0;
      right: 0;
    }
  }

  &.left {
    .letter {
      position: absolute !important;
      top: 0;
      left: 0;
    }
  }
 
}

</style>