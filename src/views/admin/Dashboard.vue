<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <h1>Olá {{ user.name }}!</h1>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { useAuthStore } from "@/store/auth";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useAuthStore();
    return {
      user: computed(() => store.user),
      store,
    };
  },
});
</script>

<style></style>
