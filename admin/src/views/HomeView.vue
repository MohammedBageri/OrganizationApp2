<template>
  <AppLayout>
    <main>
      <v-container class="mt-16 " style="height: 100%;">
      <v-row style="height: 100%;">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-20 mx-5 rounded-br-xl rounded-tl-xl"
          width="900px"
          dir="rtl"
          transition="scroll-x-transition"
        >
          <Home />
        </v-card>
      </v-row>
      </v-container>
    </main>
  </AppLayout>
</template>

<script>
import AppLayout from "../layouts/AppLayout.vue";

import Home from "../components/Home.vue"
export default {
  components: {
    AppLayout,
    Home,
  },
  data: () => ({
  }),
  methods: {
    
  },
};
</script>