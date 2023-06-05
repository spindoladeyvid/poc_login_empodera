<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <h1>Meus Dados</h1>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col class="v-col-xs-12 v-col-md-9 v-col-sm-9 v-col-lg-7 v-col-xl-6">
          <v-form>
            <v-text-field label="Nome" name="name" variant="outlined" />
            <v-text-field label="Email" name="email" variant="outlined" />
            <v-text-field label="Senha" name="password" variant="outlined" />
            <v-btn
              type="submit"
              class="text-none"
              color="indigo-darken-3"
              variant="flat"
            >
              SALVAR
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({}),
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
