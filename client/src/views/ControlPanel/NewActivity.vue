<template>
    <ControlPanelLayout>
      <v-container>
          <v-row style="height: 100%;">
          <v-card
            style="z-index: 1"
            rounded="lg"
            class="mt-16 mx-5 rounded-br-xl rounded-tl-xl"
            width="900px"
            dir="rtl"
            transition="scroll-x-transition"
          >
          <v-card-title>
            إضافة نشاط
            <v-card
                  height="80"
                  width="80"
                  elevation="2"
                  class="mb-8 rounded-l text-center hidden-md-and-down"
                  style="position: absolute; margin-right: 115px;"
                >
                  <v-icon large class="mt-6" color="#14425a">mdi-clipboard-text</v-icon>
                </v-card>
          </v-card-title>
            <NewActivity />
          </v-card>
        </v-row>
      </v-container>
    </ControlPanelLayout>
  </template>
  
  <script>
  import ControlPanelLayout from "../../layouts/ControlPanelLayout.vue";
  import NewActivity from "../../components/ControlPanel/NewActivityComp.vue"
  export default {
    components: {
      ControlPanelLayout,
      NewActivity
    },
  };
  </script>
  
  <style scoped>
  </style>