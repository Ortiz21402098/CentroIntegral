import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Nosotros from '../views/nosotros.vue'
import Turno from '../views/turno.vue'
import Iniciar from '../views/iniciar.vue'
import Cuenta from '../views/cuenta.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nosotros',
      name: 'Nosotros',
      component: Nosotros,
    },
    {
      path: '/turno',
      name: 'turno',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Turno,
    },
    {
      path: '/iniciar',
      name: 'iniciar',
      component: Iniciar,
    },
    {
      path: '/cuenta',
      name: 'Cuenta',
      component: Cuenta,
    },
  ],
})

export default router
