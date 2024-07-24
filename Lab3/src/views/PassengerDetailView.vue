<script setup lang="ts">
import { ref,onMounted,defineProps } from 'vue'
import Passenger from '@/types/Passenger'
import PassengerService from '@/services/PassengerService';

const passenger = ref<Passenger>(null)
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
    <div v-if="passenger">
        <h2>{{ passenger.name }}</h2>
        <span>Trips: {{ passenger.trips }}</span>

        <div v-for="airline in passenger.airline" :key="airline._id" class="airline-details">
            <img :src="airline.logo" alt="Airline Logo" class="airline-logo" />
            <h3>{{ airline.name }}</h3>
            <p>Country: {{ airline.country }}</p>
        </div>
    </div>
</template>