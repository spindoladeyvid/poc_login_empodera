<template>
  <v-row class="bg-green align-center justify-center">
    <v-col>
      <v-container class="fill-height">
        <v-responsive class="d-flex fill-height">
          <v-row>
            <v-col>
              <v-progress-linear
                v-model="skill"
                color="amber"
                class="bg-white"
                striped
                height="30"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>Fala pouco para você completar seu perfil</p>
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { useAuthStore } from "@/store/auth";
import { computed, defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    skill: 25,
  }),
  setup() {
    const store = useAuthStore();
    return {
      user: computed(() => store.user),
      store,
    };
  },
});
</script>

<style scoped>
.bg-green {
  min-height: 150px;
  height: 200px;
  background-color: green;
}
.bg-white {
  background-color: white;
}
</style>
