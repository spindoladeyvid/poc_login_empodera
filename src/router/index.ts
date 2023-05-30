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
    path: "/admin",
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const expiredToken = await authService.isExpiredToken();
  if (expiredToken) {
    await useAuthStore().refreshTokenGoogle();
  }
  const isAuthenticated = await authService.isAuthenticated();
  if (to.meta.requiresAuth && isAuthenticated) {
    next("");
  } else {
    next();
  }
});

export default router;
