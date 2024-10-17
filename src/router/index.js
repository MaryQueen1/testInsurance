import UserDetail from "@/components/UserDetail.vue";
import UsersList from "@/components/UsersList.vue";
import { createRouter, createWebHashHistory } from "vue-router";

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
  history: createWebHashHistory(), // Используем history API
  routes,
});

export default router;
