<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Empodera</v-toolbar-title>
    <template v-slot:append>
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="brown" size="large">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded variant="text" @click="goProfile()">
                Meus dados
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded variant="text" @click="logout()"> Sair </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>
  <navegation-drawer v-model="drawer" />
</template>

<script lang="ts">
import NavegationDrawer from "@/components/layouts/admin/NavegationDrawer.vue";
import { useAuthStore } from "@/store/auth";
import { defineComponent } from "vue";
export default defineComponent({
  components: { NavegationDrawer },
  data: () => ({
    drawer: null,
    user: {
      initials: "DS",
      fullName: "Deyvid Spindola",
      email: "deyvid.spindola@ciandt.com",
    },
  }),
  methods: {
    logout() {
      this.store.logout();
    },
    goProfile() {
      this.$router.push({ name: "my_profile" });
    },
  },
  setup() {
    const store = useAuthStore();
    return {
      store,
    };
  },
});
</script>
