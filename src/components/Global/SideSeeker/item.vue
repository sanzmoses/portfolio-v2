<template>
  <div class="item-container" 
    @mouseenter="onHover"
    @mouseleave="onLeave"
    @click="onClick(index)"
  >
      <div :id="`seeker-shape-${index}`" class="shape"></div>
      <div class="text-container">
        <p :id="`seeker-text-${index}`">{{ item }}</p>
      </div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: "SeekerItem",
  props: {
    item: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    shape: null,
    text: null
  }),
  methods: {
    onHover() {
      this.shape.play();
      this.text.play();
    },
    onLeave() {
      if(!this.active) {
        this.shape.reverse();
        this.text.reverse();
      }
    },
    onClick(index) {
      gsap.fromTo("#seeker-shape-"+this.index, {
        scaleY: -1,
      }, {
        scaleY: 1,
      });
    }
  },
  mounted() {
    this.shape = gsap.to("#seeker-shape-"+this.index, {
      height: '25px',
      width: '1px',
      marginLeft: '3px',
      borderRadius: '0px',
      duration: .3,
      paused: true
    });

    this.text = gsap.to("#seeker-text-"+this.index, {
      x: 10,
      duration: .5,
      paused: true
    });

    if(this.active) {
      this.onHover();
    }
  },
  watch: {
    active: function(value) {
      if(value) {
        this.onHover();
      } else {
        this.onLeave();
      }
    }
  }
}
</script>

<style lang="scss">
.item-container {
  display: flex;
  align-items: center;
  margin: 10px 0px;
  cursor: pointer;
  height: 20px;
  caret-color: transparent;

  .shape {
    height: 7px;
    width: 7px;
    border-radius: 25px;
    background-color: white;
  }

  .text-container {
    width: auto;
    padding-right: 20px;
    overflow: hidden;

    p { 
      margin: 0;
      transform: translateX(-100px);
    }
  }
}


</style>