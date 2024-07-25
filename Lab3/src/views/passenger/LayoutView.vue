<script setup lang="ts">
import { ref,onMounted,defineProps } from 'vue'
import Passenger from '@/types/Passenger'
import PassengerService from '@/services/PassengerService';

const passenger = ref<Passenger | null>(null)
const props = defineProps({
    _id: {
        type: String,
        required: true
    }
})

onMounted(() => {
    PassengerService.getPassengersByID(props._id)
        .then((response) => {
            passenger.value = response.data
        })
        .catch((error) => {
            console.error('There was an error!' , error);
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