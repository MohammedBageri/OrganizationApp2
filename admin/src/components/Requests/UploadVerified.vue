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
            reverse
          >
          </v-text-field>
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
              رفع السند المعمد
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
  }),
  mounted(){
    this.$store.dispatch("order/getOrderCompleted")
  },
  methods: {
    upload(item) {
      this.uploadDialog = true;
      this.id = item._id
    },
    async uploadCertficate(){
      const formData = new FormData();
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
  },
};
</script>

<style scoped>
</style>