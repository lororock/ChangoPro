import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HelloWorld.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../components/Scroll.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../components/NoFunt.vue"),
    },
  ],
});

export default router;
