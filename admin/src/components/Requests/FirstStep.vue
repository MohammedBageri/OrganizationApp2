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
          <v-item-group v-model="type">
            <v-item v-slot="{ active, toggle }" value="newOrder">
              <v-btn @click="newOrder" :color="active ? 'grey' : '#14425a'" class="ml-2 white--text elevation-2">طلبات جديدة</v-btn>
            </v-item>
            <v-item v-slot="{ active, toggle }" value="reNewOrder">
              <v-btn @click="reNewOrder" :color="active ? 'grey' : '#14425a'" class=" white--text elevation-2">طلبات تجديد</v-btn>
            </v-item>
          </v-item-group>
        
          <!-- <v-btn @click="newOrder" color="#14425a" class=" white--text elevation-2">طلبات جديدة</v-btn>
          <v-btn @click="reNewOrder" color="#14425a" class="mr-2 white--text elevation-2">طلبات تجديد</v-btn> -->
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
            <v-icon small color="red" class="mr-2" @click="rejectItem(item)">
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
                v-model="msg"
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
                @click="sendReport"
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
    msg:"",
    reportId:null,
    dialog: false,
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
        text: "قبول المختص/رفض/معاينة",
        value: "actions",
        sortable: false,
      },
    ],
    type: 'newOrder',


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
    this.newOrder()
  },

  methods: {
    async accesptRequest(item) {
      // let conformId = item._id;
      // if(item.status == "قيد الإنتظار"){
      //   await this.$store.dispatch("order/updateOrderUnderProcessing",{id:})
      // }
      console.log(item._id)
      await this.$store.dispatch("order/updateOrderUnderProcessing", {id: item._id});
      this.$router.go();
    },

    rejectItem(item) {
      this.reportId = item._id
      console.log(".....id...",item);

      this.repDialog = true;
    },
    async sendReport() {
      console.log("........",this.reportId);
      await this.$store.dispatch("order/updateOrderNotCompleted", {id: this.reportId, note:this.msg});
      this.dialog = true
    },


    openReport(item) {
      console.log(item.organization)
      let id = item.organization._id;
      this.$router.push("/report?id=" + id);
    },
    async newOrder() {
      this.type = 'newOrder'
      await this.$store.dispatch("order/getOrderUnderProcessing", {type: ''})
    },
    async reNewOrder() {
      this.type = 'reNewOrder'
      await this.$store.dispatch("order/getOrderUnderProcessing", {type: 'تجديد الترخيص'})
    }
    // printOrg() {
    //   this.$router.push("/printorganization");
    // },
  },
};
</script>