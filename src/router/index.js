import Vue from "vue";
import VueRouter from "vue-router";
import CapstonesIndex from "../views/Index.vue";
import CapstonesShow from "../views/Show.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Index", component: CapstonesIndex },
  { path: "/capstones/:id", name: "Show", component: CapstonesShow },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
