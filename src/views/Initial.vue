<template>
  <section class="initial-loader">
    <p>Loading</p>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useGlobalStore } from '/src/stores/GlobalStore'

export default {
  name: 'Initial',
  setup() {
    const lorem = ref(null);
    const global_store = useGlobalStore()
    const setInitialLoading = global_store.SET_INITIAL_LOADING
    const router = useRouter()

    setTimeout(() => {
      setInitialLoading(false)
      router.push("/projects");
    }, 50000)

    return { }
  }
}
</script>

<style lang="scss" scoped>
.initial-loader {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
