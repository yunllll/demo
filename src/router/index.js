import { createRouter, createWebHashHistory } from 'vue-router'
import web2Rank from '../views/web2Rank.vue'

const routes = [
  {
    path: '/web2Rank',
    name: 'web2Rank',
    component: web2Rank
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/index.vue')
  },
  {
    path: '/run',
    name: 'run',
    component: () => import('../views/run.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../components/sign.vue')
  },
  {
    path: '/calcloan',
    name: 'calcloan',
    component: () => import('../views/CalcLoan.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
