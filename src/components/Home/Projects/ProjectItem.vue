<template>
    <div>
        <p>{{ item.id }} - {{ item.name }}</p>
        <button @click="deleteItem">Delete</button>
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