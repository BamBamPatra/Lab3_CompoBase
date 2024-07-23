<script setup lang="ts">
import { ref } from 'vue'
// defineProps<{
//   msg: string
// }>()
const passenger = ref ({
    
    name: "John Doe",
    trips: 250,
    airline: 5

})
</script>

<template>
 <div class="passenger-class">
    <div class="passenger-card">
        <h2> {{ passenger.name }}</h2>
        <span> {{ passenger.trips }}</span>
    </div>
 </div>
</template>

<style scoped>

.passenger-class {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 19px;
}

.passenger-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
</style>