<script setup lang="ts">
import { toRefs,defineProps, useAttrs } from 'vue'
import { type Passenger } from '@/types'
import { useRouter } from 'vue-router';

const props = defineProps<{
    passenger: Passenger
    id: String
}>()
const { passenger } = toRefs(props)
const router = useRouter()
const register = () => {
    //if the registration API call successful
    //Push back to thr passenger details view
    router.push({ name: 'passenger-detail-view'})
}

</script>

<template>
    <p>Register passenger here</p>
    <button @click="register">Register</button>
</template>