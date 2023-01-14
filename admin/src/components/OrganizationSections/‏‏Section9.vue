<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
        <div class="mb-3">اللجنة الدائمة التابعة للمؤسسة</div>
        <v-divider />
      </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="name"
          outlined
          dense
          hide-details
          label="اسم اللجنة"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <!-- <v-col cols="4">
          <v-text-field type="number" min="0" v-model="numberOfEmployees"  outlined dense hide-details label="عدد الاعضاء" reverse></v-text-field>
        </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          type="number"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          min="0"
          v-model="countMale"
          outlined
          dense
          hide-details
          label="عدد الذكور"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
              <v-text-field
                type="number"
                min="0"
                v-model="countFemale"
                class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
                outlined
                dense
                label="عدد الإناث"
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
          v-model="note"
          outlined
          dense
          label="ملاحظة"
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

    <v-btn color="green darken-4" class="white--text" @click="add"> إضافة </v-btn>

    <v-row>
      <v-col cols="12">
        <v-data-table
          :items="standingCommitteItem"
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
    standingCommitte: [],
    standFile: [],
    headers: [
      { text: "اسم اللجنة", value: "name" },
      { text: "عدد الذكور", value: "countMale" },
      { text: "عدد الإناث", value: "countFemale" },
      { text: "ملاحظة", value: "note" },
      { text: "مرفقات", value: "standingCommitteUpload"},
      { text: "تعديل", value: "actions", sortable: false },
    ],
    _id: "",
    name: "",
    countMale: "",
    countFemale: "",
    note: "", //PC : Permanent Committee
    standingCommitteUpload: ""
  }),
  computed: {
    standingCommitteItem(){
      return  this.$store.state.organization.organization.standingCommitte
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.standingCommitteItem.indexOf(
          item
        );
        const subItem =
        this.standingCommitteItem[this.editedIndex];
      const standingCommitteId = subItem._id;
      // this._id= item._id,
      this._id= `${standingCommitteId}`,
      this.name=item.name,
        (this.countMale = item.countMale),
        (this.countFemale = item.countFemale),
        (this.note = item.note);
    },
    async editStandingCommitteItem(){
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("countMale", this.countMale);
      formData.append("countFemale", this.countFemale);
      formData.append("note", this.note);
      formData.append("standingCommitteUpload", this.standFile[0])

      const id = this._id;

      await axios
        .patch(`/api/Organizations/update_new_standingCommitte/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.standingCommitte
          const obj = data[this.editedIndex]
          this.standingCommitteItem.splice(this.editedIndex, 1, obj)
        })
        .catch((err) => {
          console.log(err);
        });


    },
    async save() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("countMale", this.countMale);
      formData.append("countFemale", this.countFemale);
      formData.append("note", this.note);
      formData.append("standingCommitteUpload", this.standFile[0])

      const id = this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_standingCommitte/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.standingCommitte
          const obj = data[data.length - 1]
          this.standingCommitteItem.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });



    },
    add() {
      if (this._id == undefined || this._id == "") {

        this.save()
      } else {
        this.editStandingCommitteItem()
        // Object.assign(
        //   this.standingCommitteItem[
        //     this.editedIndex
        //   ],
        //   {
        //     name: this.name,
        //     countMale: this.countMale,
        //     countFemale: this.countFemale,
        //     note: this.note,
        //   }
        // );
      }
      (this._id = ""),
        (this.name = ""),
        (this.countMale = ""),
        (this.countFemale = ""),
        (this.note = "");
        this.standingCommitteUpload = ""
    },
    uploadFile() {
      this.standFile.push(event.target.files[0]);
      console.log(this.standFile);
    },
  },
};
</script>
  
  <style scoped>
</style>