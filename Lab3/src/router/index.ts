import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '@/views/PassengerListView.vue'
import AboutView from '@/views/AboutView.vue'
import PassengerDetailView from '@/views/PassengerDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list-view',
      component: PassengerListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/passenger/:_id',
      name: 'passenger-detail-view',
      component: PassengerDetailView,
      props: true
    }
  ]
})

export default router
