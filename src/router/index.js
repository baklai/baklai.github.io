import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index.vue')
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-router',
      component: () => import('@/views/Index.vue')
    }
  ]
});

export default router;
