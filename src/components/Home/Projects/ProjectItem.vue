<template>
  <div class="col-12 col-md-6 pa-2">
    <h6 class="ma-0 text-primary">Project Name</h6>
    <h4 class="mt-0">{{ item.name }}</h4>
    <highlightjs
      language="json"
      :code="formatted"
    />
      <!-- <q-btn  @click="deleteItem" color="deep-orange" glossy label="Delete" /> -->
  </div>
</template>

<script>
export default {
    name: "Project Item",
    props: {
        item: {
          type: Object,
          required: true,
        },
    },
    computed: {
      formatted() {
        return JSON.stringify(this.item, undefined, 2)
      }
    },
    methods: {
        deleteItem() {
          console.log("deleting item", this.item.id)
            // fetch(`http://localhost:3000/projects/${this.item.id}`, {
            //     method: 'DELETE',
            // })
            // .then(response => {
            //     console.log("response", response.json())
            // })
        }
    }
}
</script>