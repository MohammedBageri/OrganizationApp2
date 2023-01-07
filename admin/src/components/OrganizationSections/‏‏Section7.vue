<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
        <div class="mb-3">بيانات لجنة الراقبة</div>
        <v-divider />
      </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="name"
          outlined
          dense
          hide-details
          label="الأسم الرباعي"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="placeOfBirth"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="مكان الميلاد"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          type="date"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="dateOfBirth"
          outlined
          dense
          hide-details
          label="تاريخ الميلاد"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <!-- <div>title</div> -->
        <v-divider />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="currentPlace"
          outlined
          dense
          label="مكان الإقامة الحالي"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="job"
          outlined
          dense
          label="الوظيفة"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="qualification"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="الصفة في المؤسسة"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense class="mb-2">
      <v-col cols="12">
        <!-- <div>title</div> -->
        <v-divider />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="phone"
          outlined
          dense
          label="الهاتف"
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

    <v-btn @click="add" color="green darken-4" class="white--text"> إضافة </v-btn>

    <v-row>
      <v-col cols="12">
        <v-data-table
          :items="$store.state.organization.organization.oversightCommitte"
          :headers="headers"
          :hide-default-footer="true"
        >
          <!-- <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template> -->
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  
  <script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  data: () => ({
    committeeInfo: [],
    committeeInfoFile: [],
    headers: [
      { text: "الإسم الرباعي", value: "name" },
      { text: "مكان الميلاد", value: "placeOfBirth" },
      { text: "تاريخ الميلاد", value: "dateOfBirth" },
      { text: "مكان الإقامة", value: "currentPlace" },
      { text: "الوظيفة", value: "job" },
      { text: "الصفة في المؤسسة", value: "qualification" },
      { text: "الهاتف", value: "phone" },
      {text: "المرفقات", value: "oversightCommitteUpload"},

      // { text: "تعديل/حذف", value: "actions", sortable: false },
    ],
    _id: "",
    name: "",
    placeOfBirth: "",
    dateOfBirth: "",
    currentPlace: "",
    job: "",
    qualification: "", //change the name
    phone: "",
    oversightCommitteUpload: ""
  }),

  methods: {
    editItem(item) {
    this.editedIndex =
      this.$store.state.organization.organization.oversightCommitte.indexOf(
        item
      );
    // (this._id = item._id),
    this._id= `${this.editedIndex}`,
      (this.name = item.name),
      (this.placeOfBirth = item.placeOfBirth),
      (this.dateOfBirth = dayjs(item.dateOfBirth).format("YYYY-MM-DD")),
      (this.currentPlace = item.currentPlace),
      (this.job = item.job),
      (this.qualification = item.qualification),
      (this.phone = item.phone);
  },
  async save(){
    const formData = new FormData();
    formData.append("name", this.name);
    formData.append('placeOfBirth', this.placeOfBirth);
    formData.append('dateOfBirth', this.dateOfBirth);
    formData.append('currentPlace', this.currentPlace);
    formData.append('job', this.job);
    formData.append('qualification', this.qualification);
    formData.append('phone', this.phone);
    formData.append('oversightCommitteUpload', this.committeeInfoFile[0]);

    const id =  this.$route.params.id;
    await axios
        .patch(`/api/Organizations/new_oversightCommitte/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.oversightCommitte
          const obj = data[data.length - 1]
          this.$store.state.organization.organization.oversightCommitte.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      if (this._id == undefined || this._id == "") {

        this.save();


      } else {
        Object.assign(
          this.$store.state.organization.organization.oversightCommitte[
            this.editedIndex
          ],
          {
            name: this.name,
            placeOfBirth: this.placeOfBirth,
            dateOfBirth: this.dateOfBirth,
            currentPlace: this.currentPlace,
            job: this.job,
            qualification: this.qualification,
            phone: this.phone,
          }
        );
      }

      (this._id = ""),
        (this.name = ""),
        (this.placeOfBirth = ""),
        (this.dateOfBirth = ""),
        (this.currentPlace = ""),
        (this.job = ""),
        (this.qualification = ""),
        (this.phone = "")
        this.oversightCommitteUpload= ""
    },
    uploadFile() {
      this.committeeInfoFile.push(event.target.files[0]);
      console.log(this.committeeInfoFile);
    },
  },
};
</script>
  
  <style scoped>
</style>