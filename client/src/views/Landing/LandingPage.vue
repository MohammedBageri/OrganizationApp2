<template>
  <AppLayout>
    <v-container class="mt-16" style="height: 100%">
      <v-row justify="center" align="center" class="mb-5">
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
      <v-row justify="center" align="center" style="height: 100%">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            class="{ 'on-hover': hover } mt-5"
            dir="rtl"
            rounded
            width="900px"
          >
            <LandingPage class="mt-16 mr-5" />
          </v-card>
        </v-hover>
      </v-row>

      <v-row justify="center" align="center" style="height: 100%">
        <v-hover v-slot="{ hover }">
          <v-card
            style="z-index: 1"
            :elevation="hover ? 12 : 2"
            rounded="lg"
            class="{ 'on-hover': hover } mt-16 rounded-br-xl rounded-bl-xl"
            width="900px"
            dir="rtl"
          >
            <v-col class="mt-4" cols="12" lg="8" md="6" sm="12">
              <v-icon
                x-large
                class="mr-2 mt-3"
                color="green"
                style="position: absolute"
                >mdi-checkbox-marked-circle</v-icon
              >
              <h2 class="mr-16">يمكنك البحث عن المنظمات</h2>
              <h3 class="mr-16">المصرحة من الوزارة عن طريق الجدول ادناه</h3>
            </v-col>

            <v-col cols="12" lg="12" md="12" sm="12">
              <OrganizationTable />
            </v-col>
          </v-card>
        </v-hover>
      </v-row>
    </v-container>
  </AppLayout>
</template>

<script>
import LandingPage from "../../components/LandingPage.vue";
import AppLayout from "../../layouts/AppLayout.vue";
import OrganizationTable from "../../components/OrganizationsTable.vue";
export default {
  components: {
    OrganizationTable,
    LandingPage,
    AppLayout,
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

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 100%;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
