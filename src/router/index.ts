import { createWebHistory, createRouter } from "vue-router";

import { defineAsyncComponent } from "vue";

const Home = defineAsyncComponent(() => import("../views/HomePage.vue"));
const About = defineAsyncComponent(() => import("../views/AboutPage.vue"));

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
