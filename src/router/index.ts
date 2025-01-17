import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../views/HomePage.vue";
import About from "../views/AboutPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
