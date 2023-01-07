<template>
    <AppLayout>
    <v-container class="mt-16" style="height: 100%">

      <v-row class="content-row" style="height: 100%">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-16 rounded-br-xl rounded-bl-xl"
          width="900px"
          dir="rtl"
        >
          <PrymentTable />
        </v-card>
      </v-row>
    </v-container>
  </AppLayout>
</template>
  
  <script>
  import AppLayout from "../../layouts/AppLayout.vue";
  import PrymentTable from "../../components/Requests/PaymentTable.vue";
  import _ from "lodash";
  export default {
    components: {
      AppLayout,
      PrymentTable
    },
    
  };
  </script>