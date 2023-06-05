<template>
  <v-app>
    <v-app-bar class="app-bar" app>
      <v-toolbar-title>Landpage</v-toolbar-title>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <v-row class="bg-green align-center justify-center">
        <v-col>
          <v-container>
            <v-row>
              <v-col>
                <h1>Olá</h1>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-footer>Olá Mundo</v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="sass">
@use "@/styles/settings"
.app-bar {
  background-color: #000;
}
</style>
