<template>
    <div class="text-center q-pt-sm">

        <template v-for="route in routes" :key="route.name">
            <q-btn 
                :label="route.name" 
                @click="goTo(route.link)" 
                class="q-mr-sm" 
                color="white" 
                text-color="primary" 
                push
            />
        </template>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue'

export default {
    setup() {
        const routes = ref([
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' },
            { name: 'Components', link: '/components' },
        ])

        const router = useRouter();

        const goTo = (value) => {
            router.push(value);
        }   

        return { 
            goTo,
            routes
         }
    },
}
</script>