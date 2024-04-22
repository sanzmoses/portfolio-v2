

<template>
 <div class="focus-exp">
    <h3 class="company text-primary">
      {{ exp.company }}
    </h3>
    <div class="sub-info">
      <span class="date text-accent">
        {{ formatDate(exp.datestamp.start) }}
      </span> 
      <div class="line-divider"></div>
      <span class="type">
        {{ exp.experience.type }}
      </span> 
      <div class="line-divider"></div>
      <span class="resp">
        {{ exp.role }}
      </span>
    </div>

    <p class="desc">{{ exp.description }}</p>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'FocusedExpCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {},
  setup(props) {
    const exp = computed(() => {
      return props.data
    })

    const formatDate = (d) => {
      return moment(d).format("MMMM YYYY")
    }

    onMounted(() => { })
    
    return { 
      exp,
      formatDate
    }
  }
}
</script>

<style lang="scss" scoped>
.focus-exp {
  max-width: 620px;
  margin: 0 auto;
  min-height: 240px;

  .company {
    margin-bottom: 0px;
    font-size: 50px;
  }

  .sub-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .date {
      font-size: 20px;
    }

    .line-divider {
      width: 20px;
      height: 1px;
      background-color: white;
      margin: 0px 10px;
    }
  }

  .desc {
    max-width: 500px;
  }
}
</style>
