import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '@/views/PassengerListView.vue'
import AboutView from '@/views/AboutView.vue'
import PassengerDetailView from '@/views/passenger/DetailView.vue'
import PassengerRegisterView from '@/views/passenger/RegisterView.vue'
import PassengerEditView from '@/views/passenger/EditView.vue'
import PassengerLayoutView from '@/views/passenger/LayoutView.vue'

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
      name: 'passenger-layout-view',
      component: PassengerLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail-view',
          component: PassengerDetailView,
          props: true
        },
        {
          path: 'register',
          name: 'passenger-register-view',
          component: PassengerRegisterView,
          props: true
        },
        {
          path: 'edit',
          name: 'passenger-edit-view',
          component: PassengerEditView,
          props: true
        }
      ]
    }
  ]
})

export default router
