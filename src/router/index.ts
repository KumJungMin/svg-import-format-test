import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/HomePage.vue";
import About from "../views/AboutPage.vue";

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
