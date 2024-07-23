<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue';
import Passenger from '@/types/Passenger'
import { ref } from 'vue'

const passengers = ref<Passenger[]>([
  {
    id: '667aafa67ad8fb01404342c4',
    name: 'bymuxgvxqwiofkq',
    trips: '250'
  },
  {
    id: '667aafa77ad8fb61a74342c9',
    name: 'ryslhhskulhenxg',
    trips: '250'
  }
])

</script>

<template>
  <div class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger"/>
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>