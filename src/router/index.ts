import { createWebHistory, createRouter } from "vue-router";

import { defineAsyncComponent } from "vue";

const Home = defineAsyncComponent(
  () => import(/* webpackChunkName: "HomePage" */ "../pages/HomePage.vue"),
);
const About = defineAsyncComponent(
  () => import(/* webpackChunkName: "AboutPage" */ "../pages/AboutPage.vue"),
);

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
