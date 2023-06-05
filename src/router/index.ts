// Composables
import authService from "@/services/auth";
import { useAuthStore } from "@/store/auth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "LandPage",
    component: () =>
      import(
        /* webpackChunkName: "landpage" */ "@/views/landpage/Landpage.vue"
      ),
  },
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "login",
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
    alert("Token expirado");
    const refreshToken = useAuthStore().refresh_token;
    await useAuthStore().refreshTokenGoogle(refreshToken);
  }
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); //se não estiver logado, redireciona para a página de login
  } else {
    next();
  }
});

export default router;
