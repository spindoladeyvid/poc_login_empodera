// Composables
import authService from "@/services/auth";
import { useAuthStore } from "@/store/auth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
      },
    ],
  },
  {
    path: "/admin/",
    component: () => import("@/layouts/admin/Default.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/admin/Dashboard.vue"
          ),
      },
      {
        path: "meus-dados",
        name: "my_profile",
        component: () =>
          import(
            /* webpackChunkName: "myProfile" */ "@/views/admin/MyProfile.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const expiredToken = authService.isExpiredToken();
  const isAuthenticated = await authService.isAuthenticated();

  if (expiredToken && isAuthenticated) {
    console.log("Token expirado");
    alert("Token expirado");
    // await useAuthStore().refreshTokenGoogle();
  }
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("");
  } else {
    next();
  }
});

export default router;
