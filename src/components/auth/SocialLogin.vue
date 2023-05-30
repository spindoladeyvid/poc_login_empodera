<template>
  <v-item-group class="d-flex justify-space-between mt-4 px-6 pt-2 pb-6">
    <v-item> <google-login-button /> </v-item>
    <v-item>
      <v-btn
        icon="mdi mdi-facebook"
        border
        height="40"
        variant="text"
        width="40"
        color="#3B5998"
      />
    </v-item>
    <v-item>
      <v-btn
        icon="mdi mdi-twitter"
        border
        height="40"
        variant="text"
        width="40"
        color="#00ACEE"
      />
    </v-item>
    <v-item>
      <v-btn
        icon="mdi mdi-linkedin"
        border
        height="40"
        variant="text"
        width="40"
        color="#0E76A8"
      />
    </v-item>
  </v-item-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GoogleLoginButton from "./GoogleLoginButton.vue";
export default defineComponent({
  components: {
    GoogleLoginButton,
    // FacebookLoginButton,
    // TwitterLoginButton,
    // LinkedinLoginButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
