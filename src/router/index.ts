import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", redirect: "/Home" },
  { path: "/Home", component: () => import("@/pages/HomePage.vue") },
  {
    path: "/About",
    component: () => import("@/pages/AboutPage.vue"),
  },
  {
    path: "/ETC",
    component: () => import("@/pages/ETCPage.vue"),
  },
  {
    path: "/Static",
    component: () => import("@/pages/StaticPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
