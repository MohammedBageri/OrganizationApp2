<template>
  <div>
    <PrintHeader />
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
      <v-card class="rounded-br-xl rounded-bl-xl" elevation="0">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="بحث"
            single-line
            hide-details
            reverse
            class="hidden-print-only"
          >
          </v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="$store.state.organization.organizations"
          :search="search"
          sort-by="calories"
          class="elevation-0 rounded-br-xl rounded-bl-xl"
          dir="rtl"
          d
          rounded="lg"
          :hide-default-footer="true"
          :footer-props="{ disablePagination: true }"
        >
          <template v-slot:top>
            <v-toolbar
              flat
              class="rounded-br-xl rounded-bl-xl hidden-print-only"
            >
              <v-toolbar-title>المنظمات</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
                  <v-btn
                    class="rounded-br-xl rounded-tl-xl white--text hidden-print-only"
                    color="#14425a"
                    @click="print"
                  >
                    <small>طباعة</small>
                    <v-icon class="mr-2">mdi-printer</v-icon>
                  </v-btn>
              <v-btn class="rounded-br-xl rounded-tl-xl white--text hidden-print-only " color="#14425a" @click="backTo">
                العودة
                <v-icon class="mr-2">mdi-arrow-left-bold-circle</v-icon>
              </v-btn>

            </v-toolbar>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
  
<script>
import PrintHeader from '../PrintOrganization/PrintHeader.vue'
import day from "dayjs";
import axios from "axios";

export default {
  components: {
    PrintHeader
  },
  data: () => ({
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "الإسم",
        align: "start",
        sortable: false,
        filterable: true,
        value: "nameAr",
      },
      { text: "نوع المؤسسة", value: "type" },
      { text: "محلية/دولية", value: "localOrInternational" },
      { text: "المحافظة", value: "state.name" },
      { text: "المديرية", value: "city.name" },
      { text: "هاتف المؤسسة", value: "phone" },
      { text: "الحالة", value: "isActive" },
    ],

    editedIndex: -1,
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    async editItem(item) {
      this.$store.state.organization.organization = Object.assign({}, item);
      this.$store.state.organization.organization.lastRenewalDate = day(
        this.$store.state.organization.organization.lastRenewalDate
      ).format("YYYY-MM-DD");
      this.$store.state.organization.organization.permitDate = day(
        this.$store.state.organization.organization.permitDate
      ).format("YYYY-MM-DD");
      this.$store.state.organization.organization.DateisActive = day(
        this.$store.state.organization.organization.DateisActive
      ).format("YYYY-MM-DD");
      this.$store.state.organization.organization.lastRenewalDate = day(
        this.$store.state.organization.organization.lastRenewalDate
      ).format("YYYY-MM-DD");
      const res = await axios.get(
        `/uploads${this.$store.state.organization.organization.logo}`,
        {
          responseType: "blob",
        }
      );
      let theBlob = res.data;
      const fileName =
        this.$store.state.organization.organization.logo.slice(8);

      this.$store.state.organization.image = new File([theBlob], fileName, {
        lastModified: new Date(),
        type: theBlob.type,
      });
      if (this.$store.state.organization.organization.OrganizationalChart) {
        const res = await axios.get(
          `/uploads${this.$store.state.organization.organization.OrganizationalChart}`,
          {
            responseType: "blob",
          }
        );
        let theBlob = res.data;
        const fileName =
          this.$store.state.organization.organization.OrganizationalChart.slice(
            8
          );
        this.$store.state.organization.chart = new File([theBlob], fileName, {
          lastModified: new Date(),
          type: theBlob.type,
        });
      }
      this.$router.push("/organization/create");
    },

    deleteItem(item) {
      this.editedIndex =
        this.$store.state.organization.organizations.indexOf(item);
      this.$store.state.organization.organization = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      // this.$store.state.organization.organizations.splice(this.editedIndex, 1);
      // this.closeDelete();
      let id = this.$store.state.organization.organization._id;
      let result = await this.$store.dispatch(
        "organization/deleteOrganization",
        { id }
      );
      if (result) {
        this.$store.state.organization.organizations.splice(
          this.editedIndex,
          1
        );
        this.closeDelete();
      } else {
        console.log("error");
      }
    },

    closeDelete() {
      this.dialogDelete = false;

      this.editedIndex = -1;
    },
    openReport(item) {
      let id = item._id;
      this.$router.push("/report?id=" + id);
    },
    backTo(){
      this.$router.push('/organizations')
    },
    print(){
      window.print();
    }
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 2px solid black;
  text-align: center;
  font-size: 14px;
}
</style>