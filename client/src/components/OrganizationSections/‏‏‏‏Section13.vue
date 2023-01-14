<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3 text-sm">الحسابات البنكية</div>
          <v-divider />
        </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="bankName"
          outlined
          dense
          hide-details
          label="اسم البنك"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="address"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="المركز الرئيسي/الفرع"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="numberAccount"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="رقم الحساب"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <!-- <div>title</div> -->
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="currency"
          outlined
          dense
          label="العملة"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="balance"
          outlined
          dense
          label="الرصيد البنكي"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-file-input
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          show-size
          label="المرفقات"
          @change="uploadFile"
          reverse
          outlined
          dense
        ></v-file-input>
      </v-col>
    </v-row>

    <v-btn color="green darken-4" class="white--text" @click="add">
      إضافة
    </v-btn>

    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
        <v-data-table
          :items="bankAccountItem"
          :headers="headers"
          :hide-default-footer="true"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  
  <script>
  import axios from 'axios';
export default {
  data: () => ({
    bankAccounts: [],
    bankFile: [],
    headers: [
      { text: "اسم البنك", value: "bankName" },
      { text: "المركز الرئيسي/الفرع", value: "address" },
      { text: "رقم الحساب", value: "numberAccount" },
      { text: "العملة", value: "currency" },
      { text: "الرصيد البنكي", value: "balance" },
      { text: "مرفقات", value:"bankUpload" },

      { text: "تعديل", value: "actions", sortable: false },
    ],

    _id: "",
    bankName: "",
    address: "",
    numberAccount: "",
    currency: "",
    balance: "",
    bankUpload: ""
  }),
  computed: {
    bankAccountItem (){
      return this.$store.state.organization.organization.bankAccount
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.bankAccountItem.indexOf(item);

      // (this._id = item._id),
      const subItem =
        this.bankAccountItem[this.editedIndex];
      const bankAccountId = subItem._id;
      this._id= `${bankAccountId}`,
        (this.bankName = item.bankName),
        (this.address = item.address),
        (this.numberAccount = item.numberAccount),
        (this.currency = item.currency),
        (this.balance = item.balance);
    },
    async editBankAccountItem(){
      const formData = new FormData();

      formData.append("bankName", this.bankName)
      formData.append("address", this.address)
      formData.append("numberAccount", this.numberAccount) 
      formData.append("currency", this.currency)
      formData.append("balance", this.balance)
      formData.append("bankUpload", this.bankFile[0])

      const id = this._id;

      await axios
        .patch(`/api/Organizations/update_new_bankAccount/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          // console.log("res", res);
          const data = res.data.result.bankAccount
          const obj = data[this.editedIndex]
          this.bankAccountItem.splice(this.editedIndex, 1, obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },

    async save() {
      const formData = new FormData();

      formData.append("bankName", this.bankName)
      formData.append("address", this.address)
      formData.append("numberAccount", this.numberAccount) 
      formData.append("currency", this.currency)
      formData.append("balance", this.balance)
      formData.append("bankUpload", this.bankFile[0])

      const id = this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_bankAccount/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.bankAccount;
          const obj = data[data.length - 1]
          this.bankAccountItem.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });


    },

    add() {
      if (this._id == undefined || this._id == "") {
        this.save()
      } else {
        this.editBankAccountItem();
        // Object.assign(
        //   this.bankAccountItem[
        //     this.editedIndex
        //   ],
        //   {
        //     bankName: this.bankName,
        //     address: this.address,
        //     numberAccount: this.numberAccount,
        //     currency: this.currency,
        //     balance: this.balance,
        //   }
        // );
      }

      (this._id = ""),
        (this.bankName = ""),
        (this.address = ""),
        (this.numberAccount = ""),
        (this.currency = ""),
        (this.balance = "");
        this.bankUpload= ""
    },
    uploadFile() {
      this.bankFile.push(event.target.files[0]);
      console.log(this.bankFile);
    },
  },
};
</script>
  
  <style scoped>
</style>