<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
        <div class="mb-3">بيانات مجلس الأمناء</div>
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
          label="مكان الإقامة"
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
          v-model="adjective"
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

    <v-btn color="green darken-4" class="white--text" @click="add"> إضافة </v-btn>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :items="$store.state.organization.organization.boardOfTruste"
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
import dayjs from "dayjs";
import axios from "axios";
export default {
  data: () => ({
    boardInfo: [],
    boardFile: [],
    headers: [
      { text: "الإسم الرباعي", value: "name" },
      { text: "مكان الميلاد", value: "placeOfBirth" },
      { text: "تاريخ الميلاد", value: "dateOfBirth" },
      { text: "مكان الإقامة", value: "currentPlace" },
      { text: "الوظيفة", value: "job" },
      { text: "الصفة في المؤسسة", value: "adjective" },
      { text: "الهاتف", value: "phone" },
      { text: "المرفقات", value: "BoardOfTrusteUpload"},

      // { text: "تعديل/حذف", value: "actions", sortable: false },
    ],
    _id: "",
    name: "",
    placeOfBirth: "",
    dateOfBirth: "",
    currentPlace: "",
    job: "",
    adjective: "", //change the name
    phone: "",
    BoardOfTrusteUpload: ""
  }),

  methods: {
    editItem(item) {
      this.editedIndex =
        this.$store.state.organization.organization.boardOfTruste.indexOf(item);

      // (this._id = item._id),
      this._id= `${this.editedIndex}`,
        (this.name = item.name),
        (this.placeOfBirth = item.placeOfBirth),
        (this.dateOfBirth = dayjs(item.dateOfBirth).format("YYYY-MM-DD")),
        (this.currentPlace = item.currentPlace),
        (this.job = item.job),
        (this.adjective = item.adjective),
        (this.phone = item.phone);
    },
    async save() {
      const formData = new FormData();

      formData.append("name", this.name)
      formData.append("placeOfBirth", this.placeOfBirth)
      formData.append("dateOfBirth", this.dateOfBirth) 
      formData.append("currentPlace", this.currentPlace)
      formData.append("job", this.job)  
      formData.append("adjective", this.gualification)
      formData.append("phone", this.phone)
      formData.append("BoardOfTrusteUpload", this.boardFile[0])

      const id = this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_boardOfTruste/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.boardOfTruste
          const obj = data[data.length - 1]
          this.$store.state.organization.organization.boardOfTruste.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });


    },
    add() {
      if (this._id == undefined || this._id == "") {

        this.save()
      } else {
        Object.assign(
          this.$store.state.organization.organization.boardOfTruste[
            this.editedIndex
          ],
          {
            name: this.name,
            placeOfBirth: this.placeOfBirth,
            dateOfBirth: this.dateOfBirth,
            currentPlace: this.currentPlace,
            job: this.job,
            adjective: this.adjective,
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
        (this.adjective = ""),
        (this.phone = "");
        this.BoardOfTrusteUpload=""
    },

    uploadFile() {
      this.boardFile.push(event.target.files[0]);
      console.log(this.boardFile);
    },
  },
};
</script>
  
  <style scoped>
</style>