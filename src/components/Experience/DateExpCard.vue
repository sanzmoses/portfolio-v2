<template>
  <div :class="['date-exp', { 'text-primary': is_active }]">
    <h5>
      <span class="date">{{ date }}</span> 
      <span class="month">{{ month }}</span>
    </h5>
    <p class="company">{{ company }}</p>
    <p class="role">{{ role }}</p>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import moment from "moment"
import _ from "lodash"

export default {
  name: 'DateExpCard',
  components: { },
  props: {
    exp: {
      type: Object,
      required: true
    },
    active: {
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

    const is_active = computed(() => {
      return _.isEqual(exp, props.active)
    })

    onMounted(() => {
    })
    
    return { 
      exp,
      company,
      role,
      date,
      month,
      is_active
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

  .company {
    margin-bottom: 0px;
    font-size: 16px;
  }

  .role {
    font-size: 14px;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .date-exp {
    padding: 10px;
    .date {
      font-size: 25px;
    }

    .month {
      font-size: 18px;
    }

    .company {
      font-size: 14px;
    }

    .role {
      font-size: 12px;
    }
  } 
}

@media (max-width: $breakpoint-xs-max) { 
  .date-exp {
    h5 {
      line-height: 17px;
    }
    .date {
      font-size: 20px;
      display: block;
    }
    .month {
      font-size: 15px;
      display: block;
    }
    .company {
      font-size: 13px;
    }
    .role {
      font-size: 11px;
    }
  }
}

</style>
