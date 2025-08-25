import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import('../views/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
