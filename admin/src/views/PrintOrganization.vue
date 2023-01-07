<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <!-- :data="$store.state.organization.organization" -->
          <div class="page">

          <PrintOrganization />


          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

 
<script>
import PrintOrganization from "../components/PrintOrganization/PrintOrganizationComp.vue";
export default {
  components: {
    PrintOrganization,
  },
  data: () => ({
    section: 1,
    items: [],
  }),
  methods: {
    sort() {},
  },
  async created() {
    await this.$store.dispatch("organization/getOrganizations");
  },
};
</script>

<style scoped>
.row {
  justify-content: center;
}

.page {
  height: 1040px;
  width: 794px;
  border: 2px solid;
  padding: 30px;
  size: 7in 9.25in;
  font-size: 16px;
  margin-bottom: 6px;
}

</style>