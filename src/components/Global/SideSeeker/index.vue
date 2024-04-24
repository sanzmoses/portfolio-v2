<template>
  <div class="side-seeker">
    <transition
      @before-enter="beforeEnterNumber"
      @enter="enterNumber"
    >
      <template v-if="show_number">
        <h1 class="current_index">{{ index_of_current_item + 1 }}</h1>
      </template>
    </transition>

    <transition-group
     appear
     tag="div"
     :css="false"
     @before-enter="beforeEnter"
     @enter="enter"
    >    
      <SeekerItem 
        v-for="(item, index) in items" 
        :key="'seeker-'+item.id"
        :data-index="index"
        class="seekers"
        @click="itemClicked(item.id)" 
        :item="item"
        :active="active == item.id"
      />
    </transition-group>

    <Arrow @arrowClicked="itemClicked('next')" />
  </div>
</template>

<script>
import SeekerItem from "./item.vue"
import Arrow from "../Arrow.vue"
import gsap from 'gsap'
import { useProjectStore } from '@/stores/ProjectStore'
import { useWheelEvent } from '@/composables/onwheel.js'

export default {
  name: "SideSeeker",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    SeekerItem,
    Arrow
  },
  data: () => ({
    show_number: false,
  }),
  computed: {
    current_item() {
      return this.items.find(item => {
        if(item.id == this.active) {
          return item
        } 

        return null
      })
    },
    next_item() {
      let indexOfCurrentItem = this.index_of_current_item;
      if(indexOfCurrentItem >= this.items.length - 1) indexOfCurrentItem = -1
      return this.items[indexOfCurrentItem+=1]
    },
    prev_item() {
      let indexOfCurrentItem = this.index_of_current_item - 1;
      if(this.index_of_current_item <= 0) indexOfCurrentItem = this.items.length - 1
      return this.items[indexOfCurrentItem]
    },
    index_of_current_item() {
      return this.items.indexOf(this.current_item)
    },
    active() {
      const projectStore = useProjectStore()
      return projectStore.active_project_id
    }
  },
  methods: {
    itemClicked(id) {
      const projectStore = useProjectStore()

      if(id === 'next' && this.next_item) {
        projectStore.SET_ACTIVE_PROJECT(this.next_item.id)
      } else {
        projectStore.SET_ACTIVE_PROJECT(id)
      }      
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(-30)"
    },
    enter(el, done) {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        delay: el.dataset.index * 0.15,
        duration: .5,
        onComplete: done
      })
    },
    beforeEnterNumber(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(-30)"
    },
    enterNumber(el, done) {
      gsap.to(el, {
        y: -20,
        opacity: .1,
        duration: .5,
        onComplete: done
      })
    },
    scrollEvent(direction) {
      this.itemClicked(direction === 'next' ? direction: this.prev_item.id)
    }
  },
  watch: {
    current_item: function(value) {
      this.$emit("seekerClicked", value)
    },
  },
  mounted() {
    setTimeout(() => {
      this.show_number = true;
    }, 2000)

    useWheelEvent(this.scrollEvent)
  },
}
</script>

<style lang="scss" scoped>
.side-seeker {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.current_index {
  position: absolute;
  margin: 0px;
  opacity: .7;
  font-size: 15em;
  transform: translateX(-80px);
}
</style>