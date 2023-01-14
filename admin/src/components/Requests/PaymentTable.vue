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
            reverse
          >
          </v-text-field>
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

        <v-dialog
        v-model="paymentDialog"
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="green" dark dir="rtl" flat>
              <v-icon class="ml-2">mdi-credit-card-sync-outline</v-icon>
              رفع سند الدفع
            </v-toolbar>
            <v-card-text dir="rtl">
              <v-file-input
                color="#14425a"
                class="mt-10 rounded-l-xl rounded-tr-xl rounded-br-0"
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
    
  }),
  mounted() {
    this.$store.dispatch("order/getOrderBeforPayment")
  },
  methods: {
    openPayment(item){
      console.log(item)
        this.id = item._id
        this.paymentDialog= true
    },

    async uploadBond(item){
     const formData = new FormData();
     formData.append("bond", this.bondFile[0])
     
     const id = this.id
     console.log(id,'?????')
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

  }
};
</script>

<style scoped>
</style>