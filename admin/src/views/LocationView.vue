<template>
  <AppLayout>
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
          <LocalArea />
        </v-card>
      </v-row>

      <v-row style="height: 100%;">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-16 mx-5 rounded-br-xl rounded-tl-xl"
          width="900px"
          dir="rtl"
          transition="scroll-x-transition"
        >
          <ProvinceTabel />
        </v-card>
      </v-row>

      <v-row class="mt-16" style="height: 100%">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-20 mx-5 rounded-br-xl rounded-tl-xl"
          width="900px"
          dir="rtl"
          transition="scroll-x-transition"
        >
          <CityTable />

        </v-card>
      </v-row>
    </v-container>
  </AppLayout>
</template>
  
  <script>
import AppLayout from "../layouts/AppLayout.vue";
import LocalArea from "../components/Location/LocalArea.vue";
import ProvinceTabel from "../components/Location/ProvinceTable.vue";
import CityTable from "../components/Location/CitiesTable.vue";

export default {
  components: {
    AppLayout,
    LocalArea,
    ProvinceTabel,
    CityTable,
  },
};
</script>