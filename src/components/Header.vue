<template>
    <div>
        <button @click="goTo('/')">Home</button>
        <button @click="goTo('/about')">About</button>   
    </div>
</template>

<script>
export default {
    methods: {
        goTo(value) {
            this.$router.push(value);
        }
    }
}
</script>