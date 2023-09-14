import FavoritePhotosVue from "@/views/FavoritePhotos.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/MainPage.vue";
import OnePhotoPageVue from "@/views/OnePhotoPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoritePhotosVue,
  },
  {
    path: "/favorite/:id",
    name: "photo",
    component: OnePhotoPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
