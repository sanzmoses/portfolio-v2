<template >
  <div class="exp-timeline">
    <section class="btn-presentation">
      <div class="nav-btn mt-10">
        <!-- <q-icon class="animated fadeOutRight infinite slower mr-1" name="arrow_right_alt"></q-icon> -->

        <q-btn @click="goAboutMe" color="white mr-10" outline> 
          <div class="line"></div>

          <span class="font-weight-bold text-lowercase">
            about
          </span>
        </q-btn>      
      </div>

      <template v-if="active_exp">
        <div class="focus-exp">
          <h3 class="company text-primary">{{ active_exp.company }}</h3>
          <div class="sub-info">
            <span class="date text-accent">{{ formatDate(active_exp.datestamp.start) }}</span> 
            <div class="line-divider"></div>
            <span class="type">{{ active_exp.experience.type }}</span> 
            <div class="line-divider"></div>
            <span class="resp">{{ active_exp.role }}</span>
          </div>

          <p class="desc">{{ active_exp.description }}</p>
        </div>
      </template>
    </section>
   
    <section class="exp-carousel">
      <div class="years">
        <template v-for="year in years" :key="year">
          <div @click="active_year = year" :class="['year-dot', { active: active_year == year }]">
            <p>{{ year }}</p>
            <div class="dot"></div>
          </div>
        </template>
      </div>
      <div class="timeline"></div>
      <div class="list-per-year">
        <template v-for="exp in exps_year" :key="exp">
          <ExpCard :exp="exp" @click="selectExp(exp)" />
        </template>
      </div>
    </section>
  </div>
  
</template>

<script>
import { useExpStore } from '@/stores/ExperienceStore'
import { useQuasar } from 'quasar'
import { computed, ref, onMounted, watch } from 'vue'
import moment from 'moment'
import _ from 'lodash'
import ExpCard from "@/components/Experience/DateExpCard.vue"
import gsap from 'gsap'

export default {
  name: "ExperienceTimeline",
  components: {
    ExpCard
  },
  setup(props, { emit }) {
    const expStore = useExpStore();
    const experiences = expStore.experience
    const $q = useQuasar()
    // const years = ref([2018, 2019, 2020, 2021, 2022])
    const exps = ref([])
    const active_year = ref(2021)
    const active_exp = ref(null)
    
    let timeline = gsap.timeline({
      ease: 'Power4.easeInOut',
      duration: 0.4,
      onReverseComplete: () => {
        emit('navigate', 'about')
      }
    })

    const layout = computed(() => {
      return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
    })

    const years = computed(() => {
      const yrs = experiences.map(exp => {
        const date_object = moment(exp.datestamp.start);
        return date_object.format('YYYY');
      })

      return _.intersection(yrs).sort()
    })

    const exps_year = computed(() => {
      return _.filter(experiences, function(exp) {
        const date_object = moment(exp.datestamp.start);
        const year = date_object.format('YYYY');
        return year == active_year.value
      });
    })

    const formatDate = (d) => {
      return moment(d).format("MMMM YYYY")
    }

    const selectExp = exp => {
      active_exp.value = exp
    }

    const goAboutMe = () => {
      timeline.reverse();
    }

    active_exp.value = exps_year.value[0]

    watch(exps_year, () => {
      active_exp.value = exps_year.value[0]
    })

    onMounted(() => {
      
      timeline
      .from(".nav-btn", {
        opacity: 0,
        x: 20
      })
      .from(".line", {
        opacity: 0,
        x: -500
      }, "<")
      .from(".focus-exp", {
        opacity: 0,
        y: -20
      })
      .from(".years", {
        opacity: 0,
        x: -50
      })
      .from(".timeline", {
        opacity: 0,
        x: 50
      }, "<")
      .from(".list-per-year", {
        opacity: 0,
        x: 50
      }, "<")

      timeline.play()
    })

    return {
      expStore,
      layout,
      formatDate,
      years,
      exps,
      active_year,
      exps_year,
      active_exp,
      selectExp,
      goAboutMe,
    }
  },
}
</script>

<style lang="scss" scoped>
.exp-timeline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .btn-presentation {
    width: 100%;
    max-width: 960px;
    padding: 0 20px;
  }
  .nav-btn {
    text-align: left;
    position: relative;

    .line {
      position: absolute;
      width: calc(100vw - 75vw);
      background-color: white;
      height: 1px;
      top: 17px;
      right: 73px;
    }
  }

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

  .exp-carousel {
    margin-top: 50px;
    width: 100%;
    .years {
      display: flex;
      justify-content: end;
    
      .year-dot {
        width: 300px;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
        display: flex;
        align-items: end;
        justify-content: center;
        
        p {
          font-size: 16px;
          margin-bottom: 15px;
          transition: all 0.4 ease-out;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 25px;
          background-color: white;
          position: absolute;
          bottom: -5px;
          left: calc(50% - 5px);
          transition: all 0.4 ease-in-out;
        }

        &.active {
          p {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #45e3ff;
            transition: all 0.4 ease-in-out;
          }
          .dot {
            width: 18px;
            height: 18px;
            bottom: -10px;
            background-color: #45e3ff;
            transition: all 0.4 ease-in-out;
          }
        }
      }
    }

    .timeline {
      width: 100%;
      height: 1px;
      background: rgb(69,227,255);
      background: linear-gradient(90deg, rgba(69,227,255,0) 0%, rgba(69,227,255,1) 51%, rgba(0,212,255,0) 100%);
    }

    .list-per-year {
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
  }
}  
</style>