<template>
  <div>
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
            fetch(`http://localhost:3000/projects/${this.item.id}`, {
                method: 'DELETE',
            })
            .then(response => {
                console.log("response", response.json())
            })
        }
    }
}
</script>