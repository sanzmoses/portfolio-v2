<template >
  <div class="exp-timeline">
    <section class="btn-presentation">
      <div class="nav-btn mt-10">
        <!-- <q-icon class="animated fadeOutRight infinite slower mr-1" name="arrow_right_alt"></q-icon> -->

        <q-btn @click="$emit('navigate', 'about')" color="white mr-10" outline> 
          <div class="line"></div>

          <span class="font-weight-bold text-lowercase">
            about
          </span>
        </q-btn>      
      </div>

      <div class="focus-exp">
        <h3 class="company text-primary">RemotePro.ph</h3>
        <div class="sub-info">
          <span class="date text-accent">February 2021</span> 
          <div class="line-divider"></div>
          <span class="type">Employment</span> 
          <div class="line-divider"></div>
          <span class="resp">Front-end Developer</span>
        </div>

        <p class="desc">Develops web app as front-end developer for an engineering firm using vue and laravel</p>
      </div>
    </section>
   
    <section class="exp-carousel">
      <div class="years">
        <template v-for="year in years" :key="year">
          <div class="year-dot">
            <p>{{ year }}</p>
            <div class="dot"></div>
          </div>
        </template>
      </div>
      <div class="timeline"></div>
      <div class="list-per-year">
        <template v-for="exp in exps" :key="exp">
          <ExpCard :exp="exp" />
        </template>
      </div>
    </section>
  </div>
  <!-- <q-timeline :layout="layout" color="accent">
    <q-timeline-entry heading>
      Experience
      ({{$q.screen.lt.sm ? 'Dense' : ($q.screen.lt.md ? 'Comfortable' : 'Loose')}} 
    </q-timeline-entry>

    <template v-for="(exp, index) in expStore.experience" :key="'exp-'+index">
      <q-timeline-entry
        :title="exp.company"
        :subtitle="formatDate(exp.datestamp.start)"
        :side="(index%2==0)?'left':'right'"
      >
        <div>
          <p class="mb-0 text-bold">{{ '<'+exp.experience.description+'/>' }}</p>
        <p>{{formatDate(exp.datestamp.start)}}</p>
          <p class="text-caption">{{ exp.role }}</p>
          <p class="text-caption mt-2">
            {{ exp.description }}
          </p>
        </div>
      </q-timeline-entry>
    </template>  
  </q-timeline> -->
</template>

<script>
import { useExpStore } from '@/stores/ExperienceStore'
import { useQuasar } from 'quasar'
import { computed, ref } from 'vue'
import moment from 'moment'
import ExpCard from "@/components/Experience/DateExpCard.vue"

export default {
  components: {
    ExpCard
  },
  setup() {
    const expStore = useExpStore();
    const $q = useQuasar()
    const years = ref([2018, 2019, 2020, 2021, 2022])
    const exps = ref([
      {
        id: 10,
        company: 'ZTM Academy',
        address: 'Udemy Course',
        role: 'Student',
        experience: {
          type: 'Online Course',
          description: 'Javascript: The Advanced Concepts', 
        },
        datestamp: {
          start: '2023-01-01',
          end: '2023-31-01'
        },
        description: 'Key concepts, best practices and latest features of Javascript.'
      },
      {
        id: 9,
        company: 'RemotePro.ph',
        address: 'Davao City',
        role: 'Front End Developer',
        experience: {
          type: 'Employment',
          description: 'Self-employed',
        },
        datestamp: {
          start: '2021-02-01',
          end: 'present'
        },
        description: 'Develops web app as front-end developer for an engineering firm using vue and laravel'
      },
      {
        id: 8,
        company: 'Link Value Inc.',
        address: 'Davao City',
        role: 'Front End Developer',
        experience: {
          type: 'Employment',
          description: 'Self-employed',
        },
        datestamp: {
          start: '2020-02-01',
          end: '2021-10-01'
        },
        description: 'Develops web app as front-end developer - with Vue and Nuxt as JS framework, UIKit as library and GIT as version control. Working on Social site for a crypto coin in thailand called LVC.'
      },
    ])

    const layout = computed(() => {
      return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
    })

    const formatDate = (d) => {
      return moment(d).format("MMMM YYYY")
    }

    return {
      expStore,
      layout,
      formatDate,
      years,
      exps
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
      justify-content: center;
    
      .year-dot {
        width: 300px;
        text-align: center;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 25px;
          background-color: white;
          position: absolute;
          bottom: -5px;
          left: calc(50% - 5px)
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
    }
  }
}  
</style>