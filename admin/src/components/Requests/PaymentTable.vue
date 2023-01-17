<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-card rounded="xl">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="بحث"
            single-line
            full-width="10px"
            reverse
          >
          </v-text-field>
          <v-item-group v-model="type">
            <v-item v-slot="{ active, toggle }" value="newOrder">
              <v-btn @click="newOrder" :color="active ? 'grey' : '#14425a'" class=" ml-2 white--text elevation-2">طلبات جديدة</v-btn>
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
          class="elevation-1 rounded-br-xl roundes-bl-xl"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="openPayment(item)">
                mdi-credit-card-sync-outline
            </v-icon>
          </template>
        </v-data-table>
        <!-- <v-btn color="green" @click="paymentDialog = true">Open</v-btn> -->

        <v-dialog
        v-model="paymentDialog"
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="green" dark dir="rtl" flat>
              <v-icon class="ml-2">mdi-credit-card-sync-outline</v-icon>
            بيانات السند
            </v-toolbar>
            <v-card-text dir="rtl">
              <v-row dense>
                <v-col cols="12" md="12" sm="12" lg="12">
                  <v-text-field
                  v-model="amount"
                color="#14425a"
                class="mt-10 rounded-l-xl rounded-tr-xl rounded-br-0"
                label="المبلغ"
                outlined
                dense
                reverse
              ></v-text-field>
              <v-text-field
                v-model="bNumber"
                color="#14425a"
                class=" rounded-l-xl rounded-tr-xl rounded-br-0"
                label="رقم السند"
                outlined
                dense
                reverse
              ></v-text-field>
                </v-col>
              </v-row>
             
              
              <v-text-field
                v-model="bDate"
                color="#14425a"
                class="rounded-l-xl rounded-tr-xl rounded-br-0"
                label="تاريخ السند"
                outlined
                type="date"
                dense
                reverse
              ></v-text-field>
              <v-text-field
                v-model="bNote"
                color="#14425a"
                class="rounded-l-xl rounded-tr-xl rounded-br-0"
                label="البيان"
                outlined
                dense
                reverse
              ></v-text-field>
              
              <v-file-input
                color="#14425a"
                class="rounded-l-xl rounded-tr-xl rounded-br-0"
                @change="uploadFile"
                outlined
                dense
              ></v-file-input>
            </v-card-text>
            <v-card-actions dir="rtl">
              <v-btn
                class="mb-5 mr-2"
                outlined
                color="green"
                @click="uploadBond"
                >رفع</v-btn
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
      
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    search: "",
    id:null,
    bondFile: [],
    paymentDialog: false,
    headers: [
      {
        text: "الإسم",
        align: "center",
        sortable: false,
        // filterable: true,
        value: "organization.nameAr",
      },
      { text: "نوع المؤسسة",  align: "center", sortable: false,value: "organization.type" },
      { text: "محلية/دولية", align: "center", sortable:false, value: "organization.localOrInternational" },
      { text: "الإقليم الجغرافي", value: "organization.mapArea.name", sortable: false },
      { text: "محلية/دولية", value: "organization.localOrInternational", sortable: false },
      { text: "هاتف المؤسسة", value: "organization.phone", sortable: false },
      { text: "حالة الطلب", value: "status", sortable: false },
      {
        text: "رفع السندات",
        value: "actions",
        sortable: false,
      },

    ],
    amount: "",
    bNumber: "",
    bDate: "",
    bNote: "",

    type: 'newOrder'
    
  }),
  mounted() {
    this.newOrder()
  },
  methods: {
    openPayment(item){
      console.log(item)
        this.id = item._id
        this.paymentDialog= true
    },

    async uploadBond(item){
     const formData = new FormData();
     formData.append("bondAmount", this.amount)
     formData.append("bondNumber", this.bNumber)
     formData.append("bondDate", this.bDate)
     formData.append("bondNote", this.bNote)
    
    // formData.append("bondAmount", 50)
    //  formData.append("bondNumber", "543543")
    //  formData.append("bondDate", this.bDate)
    //  formData.append("bondNote", "this.bNote")
     formData.append("bond", this.bondFile[0])
     
    //  const id = "63982a86fe809fde293bdf75"
     const id = this.id
    //  console.log(id,'?????')
     await axios
            .patch(`/api/Orders/order_completed/${id}`,formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },})
            .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
        });

        this.$router.go();
    },

    uploadFile() {
      this.bondFile.push(event.target.files[0]);
      console.log(this.bondFile);
    },
    async newOrder() {
      this.type = 'newOrder'
      await this.$store.dispatch("order/getOrderBeforPayment", {type: ''})
    },
    async reNewOrder() {

      this.type = 'reNewOrder'
      await this.$store.dispatch("order/getOrderBeforPayment", {type: 'تجديد الترخيص'})
    }

  }
};
</script>

<style scoped>
</style>