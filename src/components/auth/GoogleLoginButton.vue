<template>
  <v-btn
    @click="googleLogin()"
    icon="mdi mdi-google"
    border
    height="40"
    variant="text"
    width="40"
    color="#EA4335"
  />
</template>

<script lang="ts">
import { setupAuthStore } from "@/store/auth";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    async googleLogin() {
      this.store
        .getLinkGoogleLogin()
        .then((response) => {
          window.location.href = response;
          // const myWidth = 450;
          // const myHeight = 550;

          // const left = (screen.width - myWidth) / 2;
          // const top = (screen.height - myHeight) / 4;
          // window.open(
          //   response,
          //   "Login with Google",
          //   `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${myWidth}, height=${myHeight}, top=${top}, left=${left}`
          // );
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
