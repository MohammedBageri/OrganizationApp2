<template>
  <AppLayout>
    <v-container class="mt-20" style="height: 100%">
      <v-row class="content-row mb-5">
        <v-card dir="rtl" class="rounded-tr-xl rounded-tl-xl" width="900px">
          <div>
            <v-container>
              <v-row>
                <v-col cols="6" class="mt-3" sm="4" md="4" lg="2">
                  <v-img
                    src="/Yemen.png"
                    max-height="150"
                    max-width="150"
                  ></v-img>
                </v-col>
                <v-col cols="6" class="mt-5" sm="6" md="6" lg="4">
                  <h3>وزارة الشئون الإجتماعية و العمل</h3>
                  <h5>نظام تسجيل المؤسسات و تجديد الرخص</h5>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-card>
      </v-row>

      <v-row class="content-row" style="height: 100%">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-20 rounded-br-xl rounded-bl-xl"
          width="900px"
          dir="rtl"
          transition="scroll-x-transition"
        >
          <OrganizationTable />
        </v-card>
      </v-row>
    </v-container>
  </AppLayout>
</template>

<script>
import AppLayout from "../layouts/AppLayout.vue";
import OrganizationTable from "../components/OrganizationsTable.vue";
export default {
  components: {
    AppLayout,
    OrganizationTable,
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

<style>
.content-row {
  width: 90%;
}
@media screen and (max-width: 1264px) {
  .content-row {
    width: 100%;
  }
}
</style>
