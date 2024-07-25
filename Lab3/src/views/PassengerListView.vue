<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue';
import { ref, onMounted } from 'vue';
import PassengerService from '@/services/PassengerService';
import { Passenger } from '@/types/Passenger';

const passengers = ref<Passenger[] | null>(null);

onMounted(() => {
  PassengerService.getPassengers()
    .then((response) => {
      console.log(response.data);
      passengers.value = response.data.data; 
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
});
</script>

<template>
  <h1>Passengers of This Airline</h1>
  <div class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger._id" :passenger="passenger" />
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 20px;
}
</style>

