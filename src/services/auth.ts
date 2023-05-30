import { IUserLogin } from "@/interfaces/authInterface";
import { apiUrl } from ".";
import { setupAuthStore } from "@/store/auth";

const authService = {
  async login(payload: IUserLogin) {
    return apiUrl
      .post("/auth", payload)
      .then((response) => response)
      .catch((err: Error) => {
        throw err;
      });
  },
  // retorna o link para o login com o Google no drupal
  async getLinkGoogleLogin() {
    return apiUrl
      .get("/login/ecoe")
      .then((response) => response)
      .catch((err: Error) => {
        throw err;
      });
  },
  // retorna para o drupal e o drupal retorna para o front o token
  async loginGoogle(payload: any) {
    return apiUrl.post(`/login/token${payload}`);
  },
  // verifica se o token está expirado
  async isExpiredToken() {
    const authStore = setupAuthStore();
    const expire_token =
      (authStore.expire_token as unknown as number) > Date.now() / 1000
        ? true
        : false;
    return expire_token;
  },
  // atualiza o store com o novo token
  async refreshTokenGoogle() {
    return apiUrl.post("/login/refreshtoken");
  },
  // valida o token e verifica se o usuário está logado
  async isAuthenticated() {
    const authStore = setupAuthStore();
    if (!authStore.isLoggedIn && (await this.isExpiredToken())) {
      return false;
    } else if (authStore.isLoggedIn && !this.isExpiredToken()) {
      return true;
    }
    return false;
  },
};

export default authService;
