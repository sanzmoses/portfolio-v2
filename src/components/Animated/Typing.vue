<template>
  <div :class="['flex', 'text-'+color]" :style="{ fontSize }">
    
    <template v-for="(word, word_index) in processed_list" :key="`word-${word}-${word_index}-${dataId}`">
      <template v-for="(letter, letter_index) in word" :key="`animate-${letter}-${letter_index}-${dataId}`">
        <span :class="`letter letter-${word_index}-${dataId}`">{{ letter }}</span>
      </template>
      <div :class="[`blinker-${word_index}-${dataId} text-blinker`, { 'blink': blink }]"></div>
      <span :class="[`opacity-0 extra-${word_index}-${dataId}`]">|</span>
    </template>
    <span class="opacity-0">|</span>

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
      type: String,
      default: "16px",
    },
    reverse: {
      type: Boolean,
      default: true
    },
    repeat: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "white"
    },
    dataId: {
      type: String,
      required
    }
  },
  setup(props) {
    const blink = ref(false)

    const { reverse, repeat, list } = props
    let processed_list;

    if(Array.isArray(list)) {
      processed_list = list.map(item => {
        return item.split("")
      });    
    } else {
      processed_list = [].concat([list])
    }

    let timeline = gsap.timeline({
      repeat: (repeat)? -1: 0
    })
    
    onMounted(() => {
      processed_list.forEach((item, index) => {
        const index_id = `${index}-${dataId}`
        timeline
        .to(`.blinker-${index_id}`, {
          keyframes: [
            { opacity: 0, visibility:"hidden", duration: .2, ease: "none" },
            { opacity: 1, visibility:"visible", duration: .2 },
          ],
          duration: .5,
          repeatDelay: .3,
          repeat: .5,
          ease: "none"
        })
        .to(`.letter-${index_id}`, {
          display: "inline-block",
          duration: .5,
          stagger: .1,
          ease: 'elastic',
        })
        .to(`.blinker-${index_id}`, {
          keyframes: [
            { opacity: 0, visibility:"hidden", duration: .2, ease: "none" }, // BLINK VISIBILITY
            { opacity: 1, visibility:"visible", duration: .2 },
          ],
          duration: .5,
          repeatDelay: .3,
          repeat: (reverse)? 1: -1,
          ease: "none"
        })
        .to(`.letter-${index_id}`, {
          display: "none",
          duration: .5,
          stagger: -0.1, // REVERSE STAGGER
          ease: 'elastic',
        })
        .to(`.blinker-${index_id}`, {
          display: "none",
        })
        .to(`.letter-${index_id}`, {
          display: "none",
        }, "<")
        .to(`.extra-${index_id}`, {
          display: "none",
        }, "<")
      })
      
      timeline.play()
    })   
    
    return {
      processed_list,
      blink,
    }
  }
}
</script>

<style lang="scss">
.letter {
  display: none;
}

.text-blinker {
  display: block;
  width: .8em;
  background-color: white;
  opacity: 0;
  
  &.blink {
    animation: cursor-blink 1.5s steps(2) infinite;
  }
}

@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}

.opacity-0 {
  opacity: 0;
}
</style>