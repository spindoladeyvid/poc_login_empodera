<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>
    <template v-slot:append>
      <v-btn @click="logout()">Sair</v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <!--  -->
  </v-navigation-drawer>
</template>

<script lang="ts">
import { useAuthStore } from "@/store/auth";
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({ drawer: null }),
  methods: {
    logout() {
      this.store.logout();
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
