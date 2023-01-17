<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
      <v-card rounded="xl">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="بحث"
            single-line
            full-width
            reverse
          >
          </v-text-field>
          <v-item-group v-model="type">
            <v-item v-slot="{ active, toggle }" value="newOrder">
              <v-btn @click="newOrder" :color="active ? 'grey' : '#14425a'" class="ml-2 white--text elevation-2">طلبات جديدة</v-btn>
            </v-item>
            <v-item v-slot="{ active, toggle }" value="reNewOrder">
              <v-btn @click="reNewOrder" :color="active ? 'grey' : '#14425a'" class=" white--text elevation-2">طلبات تجديد</v-btn>
            </v-item>
          </v-item-group>
        
        </v-card-title>
        <v-data-table
          :headers="headers"
          :search="search"
          :items="$store.state.order.orders"
          class="elevation-1 rounded-br-xl rounded-bl-xl"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="upload(item)">
              mdi-file-upload-outline
            </v-icon>
          </template>
        </v-data-table>
        <!-- <v-btn color="green" @click="uploadDialog=true">Open</v-btn> -->
      </v-card>

      <v-dialog
        v-model="uploadDialog"
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="green" dark dir="rtl" flat>
              <v-icon class="ml-2">mdi-file-upload-outline</v-icon>
              رفع الترخيص المعمد
            </v-toolbar>
            <v-card-text dir="rtl">
              <v-text-field
                v-model="pNumber"
                color="#14425a"
                class="mt-10 rounded-l-xl rounded-tr-xl rounded-br-0"
                label="رقم الترخيص"
                outlined
                dense
                reverse
              ></v-text-field>
              <v-text-field
                v-model="pDate"
                color="#14425a"
                type="date"
                class=" rounded-l-xl rounded-tr-xl rounded-br-0"
                label="تاريخ الترخيص"
                outlined
                dense
                reverse
              ></v-text-field>
              <v-text-field
                v-model="eDate"
                color="#14425a"
                type="date"
                class=" rounded-l-xl rounded-tr-xl rounded-br-0"
                label="تاريخ إنتهاء الترخيص"
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
                @click="uploadCertficate"
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
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    search: "",
    uploadDialog: false,
    id: null,
    certficateFile: [],
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
        text: "رفع التصريح",
        align: "center",
        value: "actions",
        sortable: false,
      },
    ],

    pNumber: "",
    pDate: "",
    eDate: "",
    type: 'newOrder'
  }),
  mounted(){
    this.newOrder()
  },
  methods: {
    upload(item) {
      this.uploadDialog = true;
      this.id = item._id
    },
    async uploadCertficate(){
      const formData = new FormData();
      formData.append("permitNumber", this.pNumber)
      formData.append("permitDate", this.pDate)
      formData.append("permitExpireData", this.eDate)
     formData.append("certficate", this.certficateFile[0])
     
     const id = this.id
     console.log(id,'yyy')
     await axios
            .patch(`/api/Orders/order_uploadCertficate/${id}`,formData, {
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
      this.certficateFile.push(event.target.files[0]);
      console.log(this.certficateFile);
    },

    async newOrder() {
      this.type = 'newOrder'
      await this.$store.dispatch("order/getOrderCompleted", {type: ''})
      
    },
    async reNewOrder() {
      this.type = 'reNewOrder'
      await this.$store.dispatch("order/getOrderCompleted", {type: 'تجديد الترخيص'})
      
    }
  },
};
</script>

<style scoped>
</style>