<template lang="">
  <div class="q-pa-md q-py-xl">

    <q-chip square size="lg" class="text-weight-bold">
      <q-avatar icon="star" color="accent" text-color="black" />
      Typography
    </q-chip>

    <p class="q-my-xl"></p>
    
    <h1><span class="text-weight-bold">Sanz</span> loves kaye 12345</h1>

    <h2>Sanz loves kaye 12345</h2>

    <h3>Sanz loves kaye 12345</h3>

    <h4>Sanz loves kaye 12345</h4>

    <h5>Sanz loves kaye 12345</h5>

    <h6>Sanz loves kaye 12345</h6>

    <p>Sanz loves kaye 12345</p>

    <p>Lorem, ipsum dolor sit amet <b>consectetur adipisicing elit.</b> Dicta debitis quasi <i>repellendus rem reprehenderit excepturi omnis aliquam,</i> <code>saepe neque a, dolorum porro nesciunt esse? </code> Totam, nulla. Debitis minus perspiciatis odit!</p>

    <template v-if="pretty_json">
      <highlightjs
        language="javascript"
        :code="pretty_json"
      />
    </template>

  </div>
</template>

<script>
import { getData } from '@/composables/projects.js'

export default {
  setup() {
    const { pretty_json } = getData()
    
    return { pretty_json }
  },
}
</script>

<style lang="scss">  
</style>