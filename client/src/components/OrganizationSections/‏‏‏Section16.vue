<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3 text-sm">الاشخاص والجهات الداعمة والمانحة للمؤسسة</div>
          <v-divider />
        </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="nameSupportingStation"
          outlined
          dense
          hide-details
          label="الجهة المانحة،الشركاء"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="nationality"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="جنسية الجهة"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-file-input
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          show-size
          label="المرفقات"
          reverse
          @change="uploadFile"
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
          :items="$store.state.organization.organization.peopleAndSupporting"
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
  import axios from 'axios';
export default {
  data: () => ({
    supportive: [],
    suportUpload: [],
    headers: [
      { text: "الجهة المانحة للشركة", value: "nameSupportingStation" },
      { text: "جنسية الجهة", value: "nationality" },
      { text: "المرفقات", value: "peopleAndSupportingStationUpload" },

      // { text: "تعديل/حذف", value: "actions", sortable: false },
    ],

    _id: "",
    nameSupportingStation: "",
    nationality: "",
    peopleAndSupportingStationUpload: "",
  }),

  methods: {
    editItem(item) {
      this.editedIndex =
        this.$store.state.organization.organization.peopleAndSupporting.indexOf(
          item
        );

      // (this._id = item._id),
      (this._id = `${this.editedIndex}`),
        (this.nameSupportingStation = item.nameSupportingStation),
        (this.nationality = item.nationality);
    },

    async save() {
      const formData = new FormData();
      formData.append("nameSupportingStation", this.nameSupportingStation);
      formData.append("nationality", this.nationality);
      formData.append("peopleAndSupportingStationUpload", this.suportUpload[0]);

      const id =  this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_peopleAndSupporting/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.peopleAndSupporting
          const obj = data[data.length - 1]
          this.$store.state.organization.organization.peopleAndSupporting.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async add() {
      if (this._id == undefined || this._id == "") {
        this.save();
      } else {
        const id =  this.$route.params.id;
        const obj = Object.assign(
          this.$store.state.organization.organization.peopleAndSupporting[
            this.editedIndex
          ],
          {
            nameSupportingStation: this.nameSupportingStation,
            nationality: this.nationality,
            // peopleAndSupportingStationUpload: this.suportUpload[0],
          }
        );
        console.log(obj)
        await axios.patch(
            `/api/Organizations/${id}`,
            {
              peopleAndSupporting:  this.$store.state.organization.organization.peopleAndSupporting,
            }
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      }

      this._id = "";
      (this.nameSupportingStation = ""), (this.nationality = "");
      this.peopleAndSupportingStationUpload = "";
    },
    uploadFile() {
      this.suportUpload.push(event.target.files[0]);
      console.log(this.suportUpload);
    },
  },
};
</script>
  
  <style scoped>
</style>