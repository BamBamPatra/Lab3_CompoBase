<script setup lang="ts">
import { ref,onMounted,defineProps } from 'vue'
import { type Passenger } from '@/types'
import PassengerService from '@/services/PassengerService';
import { useRouter } from 'vue-router'

const passenger = ref<Passenger | null>(null)
const props = defineProps({
    _id: {
        type: String,
        required: true
    }
})
const router = useRouter()

onMounted(() => {
    PassengerService.getPassenger(props._id)
        .then((response) => {
            passenger.value = response.data
        })
        .catch((err) => {
            console.log(err);
            router.push({ 
                name: '404-resource-view',
                params: { resource: 'passenger' }})
        })
})
</script>

<template>
    <h1>Passenger in this Airline</h1>
    <div v-if="passenger">
        <nav>
            <router-link :to="{ name: 'passenger-detail-view' }">Detail</router-link>
            |
            <router-link :to="{ name: 'passenger-register-view' }">Register</router-link>
            |
            <router-link :to="{ name: 'passenger-edit-view' }">Edit</router-link>
        </nav>
        <RouterView :passenger="passenger"></RouterView>
    </div>
</template>