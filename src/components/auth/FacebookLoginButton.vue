<template>
  <v-btn
    icon="mdi mdi-facebook"
    border
    height="40"
    variant="text"
    width="40"
    color="#3B5998"
    @click="facebookLogin()"
  />
</template>

<script lang="ts">
import { setupAuthStore } from "@/store/auth";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    async facebookLogin() {
      this.store
        .getLinkGoogleLogin()
        .then((response) => {
          window.location.href = response;
        })
        .catch((error) => {
          console.log(error);
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

<style scoped></style>
