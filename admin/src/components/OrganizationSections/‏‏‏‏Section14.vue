<template>
  <v-container class="rounded-lg">
    <!-- <v-row dense class="mb-5">
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="nameRevenue"
          outlined
          dense
          hide-details
          label="الإرادات"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="debit"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="مدين"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          outlined
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          dense
          hide-details
          label="دائن"
          reverse
          disabled
        ></v-text-field>
      </v-col>
    </v-row> -->
    <!-- <v-row dense>
      <v-col cols="12">
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="note"
          outlined
          dense
          label="ملاحظات"
          reverse
        ></v-text-field>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-file-input
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          show-size
          label="المرفقات"
          @click="uploadFile"
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
          :items="revenueItem"
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
    income: [],
    revenueFile : [],
    headers: [
      { text: "الميزانية", value: "nameRevenue" },
      { text: "مدين", value: "debit" },
      { text: "ملاحظة", value: "note" },
      { text: "", value: "revenueUpload"},

      { text: "تعديل", value: "actions", sortable: false },
    ],

    _id: "",
    nameRevenue: "",
    debit: "",
    note: "",
    revenueUpload: ""
  }),
  computed: {
    revenueItem () {
      return this.$store.state.organization.organization.revenue
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.revenueItem.indexOf(item);

      // (this._id = item._id),
      this._id= `${this.editedIndex}`
        // (this.nameRevenue = item.nameRevenue),
        // (this.debit = item.debit),
        // (this.note = item.note);
        // (this.revenueUpload= this.revenueFile)
    },
    async editRevenueItem (){
      const formData = new FormData();
      // formData.append("nameRevenue", this.nameRevenue);
      // formData.append("debit", this.debit);
      // formData.append("note", this.note);
      formData.append("revenueUpload", this.revenueFile[0])

      const id =  this._id;

      await axios
      .patch(`/api/Organizations/new_revenue/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.revenue
          const obj = data[this.editedIndex]
          this.revenueItem.splice(this.editedIndex, 1, obj)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async save() {
      const formData = new FormData();
      // formData.append("nameRevenue", this.nameRevenue);
      // formData.append("debit", this.debit);
      // formData.append("note", this.note);
      formData.append("revenueUpload", this.revenueFile[0])

      const id =  this.$route.params.id;

      await axios
      .patch(`/api/Organizations/new_revenue/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.revenue
          const obj = data[data.length - 1]
          this.revenueItem.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },
    add() {
      if (this._id == undefined || this._id == "") {
        this.save()

      } else {
        this.editRevenueItem()
        // Object.assign(
        //   this.revenueItem[this.editedIndex],
        //   {
        //     nameRevenue: this.nameRevenue,
        //     debit: this.debit,
        //     note: this.note,
        //     revenueUpload: this.revenueFile
        //   }
        // );
      }
      (this._id = ""),
        (this.nameRevenue = ""),
        (this.debit = ""),
        (this.note = "");
    },

    uploadFile() {
      this.revenueFile.push(event.target.files[0]);
      console.log(this.revenueFile);
    },
  },

};
</script>
  
  <style scoped>
</style>