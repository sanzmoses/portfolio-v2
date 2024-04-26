<template>
  <div class="mouse-scroll" 
    :style="{ 
      left: position.x - 40 + 'px', 
      top: position.y + 'px', 
    }"
  >
    <div class="mousey">
      <div class="scroller"></div>
    </div>
  </div>
</template>

<script>
import { useMousePointer } from "@/composables/attach-pointer.js"
import { onMounted } from 'vue'
import gsap from 'gsap'

export default {
  name: 'MouseScroll',
  setup() {
    const { position } = useMousePointer()

    const timeline = gsap.timeline({
      duration: .4,
      onComplete: () => {
        setTimeout(() => {
          timeline.reverse()
        }, 5000)
      }
    })

    onMounted(() => {
      timeline.fromTo(".mouse-scroll", {
        opacity: 0
      }, {
        opacity: 1
      })

      timeline.play()

      setInterval(() => {
        timeline.play()
      }, 5000)
    })

    return { 
      position
    }
  }
}
</script>

<style lang="scss" scoped>
.mouse-scroll {
  position: absolute;
  margin: auto;
  width : 34px;
  height: 55px;
}
.mousey {
  width: 3px;
  padding: 6px 10px 8px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {  }
  50% { transform: translateY(8px); }
  100% {  }
}
</style> 