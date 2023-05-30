import type { IGetUsersData, IUserLogin } from "@/interfaces/authInterface";
import router from "@/router";
import { apiUrl } from "@/services";
import authService from "@/services/auth";
import { attachAuthHeaders, removeAuthHeaders } from "@/utils/apiUtils";
import { defineStore } from "pinia";
import pinia from ".";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    token: "" as string,
    expire_token: "" as string,
    user: "" as unknown as IGetUsersData,
  }),
  getters: {
    loggedIn: (state) => state.user.id !== null,
  },
  actions: {
    async login(payload: IUserLogin) {
      try {
        return await authService
          .login(payload)
          .then(async (response) => {
            if (response.status === 200) {
              return await this.updateStore(response.data);
            }
            return false;
          })
          .catch((err: any) => {
            throw err;
          });
      } catch (error: any) {
        throw Error(error);
      }
    },
    async getLinkGoogleLogin() {
      try {
        return await authService
          .getLinkGoogleLogin()
          .then(async (response) => {
            if (response.status === 200) {
              return response.data.authorization_endpoint;
            }
            return false;
          })
          .catch((err: any) => {
            throw err;
          });
      } catch (error: any) {
        throw Error(error);
      }
    },
    async loginGoogle(payload: any) {
      try {
        return await authService.loginGoogle(payload).then(async (response) => {
          if (response.status === 200) {
            return await this.updateStore(response.data);
          }
          return false;
        });
      } catch (error: any) {
        throw Error(error);
      }
    },
    async refreshTokenGoogle() {
      try {
        return await authService
          .refreshTokenGoogle()
          .then(async (response) => {
            if (response.status === 200) {
              return await this.updateStore(response.data);
            }
            return false;
          })
          .catch((err: any) => {
            throw err;
          });
      } catch (error: any) {
        throw Error(error);
      }
    },
    async updateStore(data?: any) {
      if (data) {
        attachAuthHeaders(apiUrl, data.id_token);
        this.token = data.id_token;
        this.expire_token = data.expire;
        this.isLoggedIn = true;
        return true;
      }
      return false;
    },
    async logout() {
      removeAuthHeaders(apiUrl);
      window.localStorage.clear();
      router.push({ name: "Login" });
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});

export function setupAuthStore() {
  return useAuthStore(pinia);
}
