<template lang="">
  <div class="q-pa-md q-py-xl">

    <h5 class="q-mt-none text-weight-thin">Typography</h5>
    
    <h1><span class="text-weight-bold">Sanz</span> loves kaye 12345</h1>

    <h2>Sanz loves kaye 12345</h2>

    <h3>Sanz loves kaye 12345</h3>

    <h4>Sanz loves kaye 12345</h4>

    <h5>Sanz loves kaye 12345</h5>

    <h6>Sanz loves kaye 12345</h6>

    <p>Sanz loves kaye 12345</p>

    <p>Lorem, ipsum dolor sit amet <b>consectetur adipisicing elit.</b> Dicta debitis quasi <i>repellendus rem reprehenderit excepturi omnis aliquam,</i> <code>saepe neque a, dolorum porro nesciunt esse? </code> Totam, nulla. Debitis minus perspiciatis odit!</p>

    <pre>
      <code class="language-javascript"> 
export default {
  company: "Linkvalue",
  role: "front-end developer"
}
      </code> 
    </pre>
    
    <pre>
      <code class="javascript">
export default {
  company: "Linkvalue",
  role: "front-end developer"
}
      </code>
    </pre>

    <highlightjs
        language="json"
        code="console.log('Hello World');"
    />


  </div>
</template>

<script>
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
export default {
  components: {
        highlightjs: hljsVuePlugin.component
    }
}
</script>

<style lang="scss">  
</style>