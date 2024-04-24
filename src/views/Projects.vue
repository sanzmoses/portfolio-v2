<template>
  <div class="q-pa-xl">
    <Projects />

    <MouseScroll />
  </div>
</template>

<script>
import Projects from "../components/Home/Projects/index.vue"
import MouseScroll from "@/components/Animated/MouseScroll.vue"

export default {
  name: 'Home',
  components: {
    Projects,
    MouseScroll
  },
}
</script>

