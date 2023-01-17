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
            :items="$store.state.organization.organizations"
            :search="search"
            sort-by="calories"
            class="elevation-1 rounded-br-xl rounded-bl-xl"
            dir="rtl"
            rounded="lg"
          >
            <template v-slot:top>
              <v-toolbar flat class="rounded-br-xl rounded-bl-xl">
                <v-toolbar-title>
                  طلبات قيد المعالجة
                  <v-spacer></v-spacer>
                </v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="rounded-br-xl rounded-tl-xl white--text"
                      v-bind="attrs"
                      v-on="on"
                      color="#14425a"
                      @click="printOrg"
                    >
                      طباعة
                      <v-icon class="mr-2">mdi-printer</v-icon>
                    </v-btn>
                  </template>
                  <span>طباعة بالفرز</span>
                </v-tooltip>
  
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card dir="rtl">
                    <v-card-title class="text-h5" align="center" justify="center"
                      >هل تريد حذف هذا العنصر؟</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-3" text @click="deleteItemConfirm"
                        >نعم</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >إلغاء الامر</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            
              <template v-slot:item.actions="{ item }">
               
                <v-icon small color="green" class="mr-2" @click="editItem(item)">
                    mdi-checkbox-marked-circle
                </v-icon>
                <v-icon small color="red" class="mr-2" @click="deleteItem(item)">
                    mdi-minus-circle
                </v-icon>
                <v-icon small class="mr-2" @click="openReport(item)">
                    mdi-file-eye
                </v-icon>
                <!-- <v-icon small class="mr-2" disabled> mdi-dots-vertical </v-icon> -->
                
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
        {
          text: "الإسم",
          align: "start",
          sortable: false,
          filterable: true,
          value: "nameAr",
        },
        { text: "مجال عمل المؤسسة", value: "type" },
        { text: "محلية/دولية", value: "localOrInternational" },
        { text: "المحافظة", value: "state.name" },
        { text: "المديرية", value: "city.name" },
        { text: "هاتف المؤسسة", value: "phone" },
        { text: "الحالة", value: "isActive" },
  
  
        { text: "قبول المختص/قبول المدير/رفض/معاينة", value: "actions", sortable: false },
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
    },
  };
  </script>