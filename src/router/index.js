import UserDetail from "@/components/UserDetail.vue";
import UsersList from "@/components/UsersList.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "UsersList",
    component: UsersList,
  },
  {
    path: "/user/:id",
    name: "UserDetail",
    component: UserDetail,
  },
];

const router = createRouter({
  history: createWebHistory(), // Используем history API
  routes,
});

export default router;
