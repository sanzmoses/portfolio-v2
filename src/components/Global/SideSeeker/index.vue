<template>
  <div class="side-seeker">
    
    <template v-for="(item, index) in items" :key="'seeker-'+index">
      <SeekerItem 
        @click="active = index" 
        :item="item" 
        :index="index" 
        :active="active === index"
      />
    </template>

  </div>
</template>

<script>
import SeekerItem from "./item.vue"

export default {
  name: "SideSeeker",
  components: {
    SeekerItem
  },
  data: () => ({
    items: [
      "Home",
      "About",
      "Contact"
    ],
    active: 0
  })
}
</script>

<style lang="scss" scoped>
</style>