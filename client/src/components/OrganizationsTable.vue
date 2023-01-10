<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
      <v-card class="rounded-br-xl rounded-bl-xl">
        <v-card-title>
          
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="بحث"
            single-line
            hide-details
            reverse
            class="hidden-print-only"
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="search.length > 0 ? $store.state.organization.organizations : []"
          :search="search"
          sort-by="calories"
          class="elevation-1 rounded-br-xl rounded-bl-xl"
          dir="ltr"
          rounded="lg"
        >
          <template v-slot:top>
            <v-toolbar flat class="rounded-br-xl rounded-bl-xl" dir="rtl">
              <v-toolbar-title>
                <h5> المنظمات المصرحه من الوزارة </h5>
                
                <v-spacer></v-spacer>
              </v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
  
            </v-toolbar>
            
          </template>
          <template v-slot:item.lastRenewalDate="{ item }">
            {{ filterDate(item.lastRenewalDate) }}
          </template>

        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import day from "dayjs";
import axios from "axios";

export default {
  data: () => ({
    dialogDelete: false,
    search: "",
    headers: [
      { text: "إيميل المؤسسة", align: "center", sortable: false, value: "email" },
      { text: "هاتف المؤسسة", align: "center", sortable: false, value: "phone" },
      { text: "تاريخ التأسيس", align: "center", sortable: false, value: "lastRenewalDate" },
      { text: "النطاق الجغرافي", align: "center", sortable: false, value: "mapArea.name" },
      { text: "نوع المؤسسة", align: "center", sortable: false, value: "type" },

      {
        text: " الإسم",
        align: "center",
        sortable: false,
        filterable: true,
        value: "nameAr",
      },
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
    printOrg() {
      this.$router.push("/printorganization");
    },
    filterDate (lastRenewalDate){
      return day(lastRenewalDate).format("YYYY-MM-DD");
    }
  },
};
</script>