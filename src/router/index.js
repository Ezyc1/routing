import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home",
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About",
      }
    },
    {
      path: '/my',
      name: 'my view',
      component: () => import('../views/MyView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import("../views/NoShow.vue"),
      meta: {
        title: "404",
      }
    },
    {
      path: '/users',
      name: 'Användare',
      component: () => import("../views/UsersView.vue"),
    },
    {
      path: '/users/:id',
      name: 'User view',
      component: () => import("../views/SingleUserView.vue"),
      props:true
    },
  ]
})
router.beforeEach((to) => {
  document.title = to.meta?.title ?? "Default title";
});
export default router

