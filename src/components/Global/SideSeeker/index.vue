<template>
  <div class="side-seeker">
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

    <transition
      @before-enter="beforeEnterArrow"
      @enter="enterArrow"
    >
      <template v-if="show_arrow">
        <Arrow @arrowClicked="itemClicked('next')" />
      </template>
    </transition>
    
    
  </div>
</template>

<script>
import SeekerItem from "./item.vue"
import Arrow from "../Arrow.vue"
import gsap from 'gsap'

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
    active: 1,
    show_arrow: false,
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
      let indexOfCurrentItem = this.items.indexOf(this.current_item);
      if(indexOfCurrentItem >= this.items.length - 1) indexOfCurrentItem = -1
      return this.items[indexOfCurrentItem+=1]
    }
  },
  watch: {
    current_item: function(value) {
      this.$emit("seekerClicked", value)
    }
  },
  methods: {
    itemClicked(id) {
      if(id === 'next' && this.next_item) {
        this.active = this.next_item.id
      } else {
        this.active = id
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
    beforeEnterArrow(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(-30)"
    },
    enterArrow(el, done) {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: .5,
        onComplete: done
      })
    },
  },
  mounted() {
    this.show_arrow = true;
  }
}
</script>

<style lang="scss" scoped>
.side-seeker {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>