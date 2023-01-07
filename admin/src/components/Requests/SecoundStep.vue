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
            :items="$store.state.order.orders"
            :search="search"
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
                <!-- <v-tooltip bottom>
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
                </v-tooltip> -->
  
                <!-- <v-dialog v-model="dialogDelete" max-width="500px">
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
                </v-dialog> -->
              </v-toolbar>
            </template>
  
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                color="green"
                class="mr-2"
                @click="accesptRequest(item)"
              >
                mdi-checkbox-marked-circle
              </v-icon>
              <v-icon small color="red" class="mr-2" @click="(repDialog=true)">
                mdi-minus-circle
              </v-icon>
              <v-icon small class="mr-2" @click="openReport(item)">
                mdi-file-eye
              </v-icon>
              <!-- <v-icon small class="mr-2" disabled> mdi-dots-vertical </v-icon> -->
            </template>
          </v-data-table>
        </v-card>
        <v-dialog
          v-model="repDialog"
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="red" dark dir="rtl" flat
                ><v-icon class="ml-2">mdi-shield-alert-outline</v-icon> إرسال سبب
                الرفض</v-toolbar
              >
              <v-card-text>
                <v-textarea
                  class="mt-5 text-right"
                  label=".....أكتب سبب الرفض"
                  outlined
                  hide-details
                  dir="rtl"
                  reverse
                ></v-textarea>
              </v-card-text>
              <v-card-actions dir="rtl">
                <v-btn
                  class="mb-5 mr-2"
                  outlined
                  color="red"
                  @click="dialog.value = false"
                  >إرسال</v-btn
                >
  
                <v-btn
                  class="mb-5 mr-2"
                  outlined
                  color="red"
                  @click="dialog.value = false"
                  >إغلاق</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
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
      repDialog: false,
      headers: [
        {
          text: "الإسم",
          align: "start",
          sortable: false,
          // filterable: true,
          value: "organization.nameAr",
        },
        { text: "نوع المؤسسة", value: "organization.type" },
        { text: "محلية/دولية", value: "organization.localOrInternational" },
        { text: "الإقليم الجغرافي", value: "organization.mapArea.name" },
        { text: "محلية/دولية", value: "organization.localOrInternational" },
        { text: "هاتف المؤسسة", value: "organization.phone" },
        { text: "حالة الطلب", value: "status" },
  
        {
          text: "قبول المختص/قبول المدير/رفض/معاينة",
          value: "actions",
          sortable: false,
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
    mounted(){
    this.$store.dispatch("order/getOrderUnderImplementing")
  },
    // mounted(){
    //   console.log(this.headers);
    // },
    // async created(){
    //   if (this.$store.state.user.ruol == "مختص"){
    //     await this.$store.dispatch()
    //   }
    // },
  
    methods: {
      async accesptRequest(item) {
        // if(item.status == "قيد الإنتظار"){
        //   await this.$store.state.dispatch("order/updateOrderUnderProcessing",{id:item.id})
        // }
        await this.$store.dispatch("order/updateOrderUnderImplementing", {id: item._id});
      this.$router.go();
      },
  
      rejectItem(item) {
        this.repDialog = true;
      },
      sendReport() {},
  
      // async deleteItemConfirm() {
      //   // this.$store.state.organization.organizations.splice(this.editedIndex, 1);
      //   // this.closeDelete();
      //   let id = this.$store.state.organization.organization._id;
      //   let result = await this.$store.dispatch(
      //     "organization/deleteOrganization",
      //     { id }
      //   );
      //   if (result) {
      //     this.$store.state.organization.organizations.splice(
      //       this.editedIndex,
      //       1
      //     );
      //     this.closeDelete();
      //   } else {
      //     console.log("error");
      //   }
      // },
  
      // closeDelete() {
      //   this.dialogDelete = false;
  
      //   this.editedIndex = -1;
      // },
      openReport(item) {
        let id = item._id;
        this.$router.push("/report?id=" + id);
      },
      // printOrg() {
      //   this.$router.push("/printorganization");
      // },
    },
  };
  </script>