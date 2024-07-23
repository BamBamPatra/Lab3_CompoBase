<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
 <div class="passenger-class"></div>
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