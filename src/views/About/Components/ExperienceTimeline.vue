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

      <transition
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="onEnter"
        @leave="onLeave"
      >
        <FocusedExpCard 
          :key="active_exp.id" 
          :data="active_exp" 
          class="focus-card" 
        />
      </transition>
      
    </section>
   
    <section class="exp-carousel">
      <div class="years">
        <template v-for="(year, index) in years" :key="year">
          <div 
            @click="setActiveYear(year, index)" 
            :class="['year-dot', `year-${year}`, { active: active_year == year }]"
          >
            <p>{{ year }}</p>
            <div class="dot"></div>
          </div>
        </template>
      </div>
      <div class="timeline"></div>
      
      <div class="list-per-year">
        <template v-for="exp in exps_year" :key="`expcard-${exp.id}`">
          <ExpCard :active="active_exp"  :exp="exp" @click="selectExp(exp)" />
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
import FocusedExpCard from "@/components/Experience/FocusedExpCard.vue"
import gsap from 'gsap'

export default {
  name: "ExperienceTimeline",
  components: {
    ExpCard,
    FocusedExpCard,
  },
  setup(props, { emit }) {
    const expStore = useExpStore();
    const experiences = expStore.experience
    const $q = useQuasar()
    const exps = ref([])
    const active_year = ref(2021)
    const active_exp = ref(null)
    const current_center = ref(300)
    
    let timeline = gsap.timeline({
      ease: 'Power2.inOut',
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

    const year_placement = computed(() => {
      let start = 1080;
      return years.value.map((yr, index) => {
        return start - (index * 300)
      })
    })

    const exps_year = computed(() => {
      return _.filter(experiences, function(exp) {
        const date_object = moment(exp.datestamp.start);
        const year = date_object.format('YYYY');
        return year == active_year.value
      });
    })

    const selectExp = exp => {
      active_exp.value = exp
    }

    const setActiveYear = (year, index) => {
      const x = year_placement.value[index]
      gsap.to(".years", {
        x,
        ease: 'Power3.inOut',
        duration: 0.5,
        onStart: () => {
          gsap.to(".list-per-year", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: 'Power2.inOut',
          })
        },
        onComplete: () => {
          active_year.value = year

          gsap.fromTo(".list-per-year", {
            y: -20,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'Power2.inOut',
          })
        }
      })
    }

    const goAboutMe = () => timeline.reverse();

    const beforeEnter = (el, done) => {
      gsap.set(el, {
        x: -50,
        opacity: 0,
        duration: .5,
        onComplete: done
      })
    }

    const onEnter = (el, done) => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: .5,
        onComplete: done
      })
    }

    const onLeave = (el, done) => {
      gsap.to(el, {
        x: 50,
        opacity: 0,
        duration: .5,
        onComplete: done
      })
    }

    active_exp.value = exps_year.value[0]
    watch(exps_year, () => {
      selectExp(exps_year.value[0])
    })

    onMounted(() => {
      timeline
        .from(".nav-btn", {
          opacity: 0,
          x: 20
        })
        .from(".line", {
          opacity: 0,
          x: -800
        }, "<")
        .from(".focus-card", {
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
          y: -30
        }, "<")

      timeline.play()
    })

    return {
      expStore,
      layout,
      years,
      exps,
      active_year,
      experiences,
      exps_year,
      active_exp,
      selectExp,
      goAboutMe,
      setActiveYear,
      beforeEnter,
      onEnter,
      onLeave,
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
      width: calc(100vw - 60vw);
      background-color: white;
      height: 1px;
      top: 17px;
      right: 73px;
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
        padding: 10px;
        margin-bottom: -15px;

        p {
          font-size: 16px;
          margin-bottom: 15px;
          transition: all 0.6s ease-out;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 25px;
          background-color: white;
          position: absolute;
          left: calc(50% - 5px);
          transition: all 0.4s ease-in-out;
        }
        &.active {
          p {
            transform: translateY(-25px) scale(2.5);
            margin-bottom: 15px;
            color: #45e3ff;
          }
          .dot {
            transform: translateY(0px) scale(1.5);
            background-color: #45e3ff;
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