<template>
  <div>
    <h1>Home</h1>

    <Projects />
  </div>
</template>

<script>
import Projects from "../components/Home/Projects/index.vue"
export default {
  name: 'Home',
  components: {
    Projects
  }
}
</script>
