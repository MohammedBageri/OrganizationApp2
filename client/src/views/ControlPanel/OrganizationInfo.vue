<template>
    <ControlPanelLayout>
      <v-container>
          <v-row style="height: 100%;">
          <v-card
            style="z-index: 1"
            rounded="lg"
            class="mt-16 mx-5"
            width="900px"
            height="900px"
            dir="rtl"
           
          >
            <Page1 />

          </v-card>
        </v-row>
      </v-container>
    </ControlPanelLayout>
  </template>
  
  <script>
  import ControlPanelLayout from "../../layouts/ControlPanelLayout.vue";
  import Page1 from "../../components/RrportPages/page1.vue"
  export default {
    components: {
      ControlPanelLayout,
      Page1
    },
    async mounted(){
      try {
        const organization = await this.$store.dispatch('organization/getOrganizationByEmail')
        console.log(organization)
      } catch (error) {
        console.log(error)  
      }
    }
  };
  </script>
  
  <style scoped>
  </style>