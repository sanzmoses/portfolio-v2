<template>
  <div class="date-exp">
    <h5>
      <span class="date">{{ date }}</span> 
      <span class="month">{{ month }}</span>
    </h5>
    <p>{{ company }}</p>
    <p>{{ role }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import moment from "moment"

export default {
  name: 'DateExpCard',
  components: { },
  props: {
    exp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const exp = props.exp;
    const company = exp.company
    const role = exp.role

    // Parse the date string using Moment.js
    const date_object = moment(exp.datestamp.start);

    // Extract the date and month
    const date = date_object.date(); // Get the date (day of the month)
    const month = date_object.format('MMMM');

    onMounted(() => {
      
    })
    
    return { 
      exp,
      company,
      role,
      date,
      month
    }
  }
}
</script>

<style lang="scss" scoped>
.date-exp {
  width: 310px;
  padding: 20px;
  margin-top: 20px;

  h5 {
    margin-bottom: 10px;
    margin-top: 0px;
    font-weight: bold;
  }
  .date {
    font-size: 30px;
    margin-right: 10px;
  }

  .month {
    font-size: 20px;
  }

  p {
    margin-bottom: 0px;
  }
}
</style>
