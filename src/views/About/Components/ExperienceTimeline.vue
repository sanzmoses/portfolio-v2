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

      <div class="focus-card" >
        <transition
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="onEnter"
          @leave="onLeave"
        >
          <FocusedExpCard 
            :key="active_exp.id" 
            :data="active_exp" 
          />
        </transition>
      </div>
    </section>
   
    <section class="exp-carousel">
      <div class="years">
        <div class="years-dots">
          <template v-for="(year, index) in years" :key="year">
            <div 
              @click="setActiveYear(year, index)" 
              :class="['year-dot', 
                { 
                  active: active_year == year,
                  edges: checkIfEdgesOfActiveYearIndex(index),
                }
              ]"
            >
              <p :class="[`year-${year}`]">{{ year }}</p>
              <div :class="['dot', `dot-${year}`]"></div>
            </div>
          </template>
        </div>
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
import _ from 'lodash'
import gsap from 'gsap'
import moment from 'moment'
import { useExpStore } from '@/stores/ExperienceStore'
import { useQuasar } from 'quasar'
import { computed, ref, onMounted, watch } from 'vue'
import ExpCard from "@/components/Experience/DateExpCard.vue"
import FocusedExpCard from "@/components/Experience/FocusedExpCard.vue"
import { useWheelEvent } from '@/composables/onwheel.js'

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
    const active_year = ref(2019)
    const active_exp = ref(null)
    const is_forward = ref(false)
    
    let timeline = gsap.timeline({
      ease: 'Power2.inOut',
      duration: 0.4,
      onReverseComplete: () => {
        emit('navigate', 'about')
      },
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
      let start = 770;
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
      const previous_year = active_year.value
      is_forward.value = (year - previous_year) > 0

      gsap.to(".years-dots", {
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

          gsap.to(`.year-${previous_year}`, {
            y: 0,
            scale: 1,
            duration: 0.2,
            ease: 'Power2.inOut',
          })

          gsap.to(`.year-${year}`, {
            y: -10,
            scale: 2,
            duration: 0.1,
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

    const goAboutMe = () => {
      timeline.timeScale(1.5);
      timeline.reverse();
    }

    const checkIfEdgesOfActiveYearIndex = (index) => {
      const active_yr_index = years.value.findIndex(yr => yr == active_year.value)
      return Math.abs(index - active_yr_index) >= 2
    }

    const beforeEnter = (el, done) => {
      gsap.set(el, {
        x: is_forward.value ? 50: -50,
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
        x: is_forward.value ? -50: 50,
        opacity: 0,
        duration: .5,
        onComplete: done
      })
    }

    active_exp.value = exps_year.value[0]
    watch(exps_year, () => {
      selectExp(exps_year.value[0])
    })

    const delta = ref(0)

    onMounted(() => {
      // set default active year

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
          y: -30,
          onComplete: () => {
            const starting_year = 2021
            const active_year_index = years.value.findIndex(x => x == starting_year)
            setActiveYear(starting_year, active_year_index)
          }
        }, "<")

      timeline.play()

      useWheelEvent((direction) => {
        const active_yr_index = years.value.findIndex(yr => yr == active_year.value)
        let year = years.value[active_yr_index];
        let index = active_yr_index

        if(direction === "next") {
          if(active_yr_index == years.value.length - 1) return;
          year = years.value[index += 1];
        } else {
          if(active_yr_index == 0) return;
          year = years.value[index -= 1];
        }

        setActiveYear(year, index)
      })
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
      checkIfEdgesOfActiveYearIndex,
      delta,
      useWheelEvent
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
    .years-dots {
      display: flex;
      justify-content: center;
      z-index: 1;
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
            color: #45e3ff;
          }
          .dot {
            background-color: #45e3ff;
          }
        }

        &.edges {
          p {
            color: #ffffff79;
          }
          .dot {
            background-color: #ffffff77;
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