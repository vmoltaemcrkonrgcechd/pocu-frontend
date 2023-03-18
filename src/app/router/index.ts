import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Weapon } from "@/pages/weapon/ui";

const routes: RouteRecordRaw[] = [
  {
    path: "/weapon",
    component: Weapon,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
