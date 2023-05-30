<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="3">
          <v-card title="Login">
            <v-card-text>
              <v-form @submit.prevent="onSubmit">
                <v-text-field
                  v-model="email"
                  label="Email"
                  single-line
                  variant="outlined"
                />
                <v-text-field
                  v-model="password"
                  label="Senha"
                  single-line
                  variant="outlined"
                />
                <v-row>
                  <v-col>
                    <router-link class="text-none" to="/login">
                      Esqueci minha senha
                    </router-link>
                  </v-col>
                </v-row>
                <v-btn
                  type="submit"
                  class="text-none mt-4 mb-4"
                  color="indigo-darken-3"
                  variant="flat"
                >
                  LOGAR
                </v-btn>
              </v-form>
              <p color="mt-4 font-weight-black">
                OU SE PREFERIR UTILIZE AS REDES SOCIAIS PARA REALIZAR O LOGIN
              </p>
              <social-login />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { setupAuthStore } from "@/store/auth";
import { defineComponent } from "vue";
import SocialLogin from "@/components/auth/SocialLogin.vue";
export default defineComponent({
  components: {
    SocialLogin,
  },
  data: () => ({
    email: "",
    password: "",
  }),
  created() {
    const param = this.$route;
    if (param.fullPath != "/") {
      this.redirectDrupal(param.fullPath);
    }
  },
  methods: {
    async onSubmit() {
      this.store
        .login({ email: this.email, password: this.password })
        .then((isLoggedIn: boolean) => {
          if (isLoggedIn) {
            this.$router.push({ name: "Dashboard" });
          }
        })
        .catch((err: Error) => {
          alert(err);
        });
    },
    async redirectDrupal(param: any) {
      this.store.loginGoogle(param).then(() => {
        if (this.store.isLoggedIn) {
          this.$router.push({ name: "Dashboard" });
        }
      });
    },
  },
  setup() {
    const store = setupAuthStore();
    return {
      store,
    };
  },
});
</script>
