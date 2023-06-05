<template>
  <v-item-group class="d-flex justify-space-between mt-4 px-6 pt-2 pb-6">
    <v-item> <google-login-button /> </v-item>
    <v-item>
      <facebook-login-button />
    </v-item>
    <v-item>
      <twitter-login-button />
    </v-item>
    <v-item>
      <linkedin-login-button />
    </v-item>
  </v-item-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GoogleLoginButton from "./GoogleLoginButton.vue";
import TwitterLoginButton from "./TwitterLoginButton.vue";
import FacebookLoginButton from "./FacebookLoginButton.vue";
import LinkedinLoginButton from "./LinkedinLoginButton.vue";
export default defineComponent({
  components: {
    GoogleLoginButton,
    TwitterLoginButton,
    FacebookLoginButton,
    LinkedinLoginButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
