<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3 text-sm">الانشطة والمشاريع الممولة ذاتيا او من اشخاص او جهات محلية يمنية</div>
          <v-divider />
        </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="name"
          outlined
          dense
          hide-details
          label="اسم المشروع"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="fundingSource"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="جهة التمويل"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="beneficiaries"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="المستفيدون"
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
          v-model="executionPlace"
          outlined
          dense
          label="مكان التنفيذ"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="executionTime"
          outlined
          dense
          label="فترة التنفيذ"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="costProject"
          outlined
          dense
          label="تكلفة المشروع"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row dense>
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
      <v-col cols="12">
        <v-data-table
          :items="projectsByPeopleItem"
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
    projectsByPeople: [],
    projectFile: [],
    headers: [
      { text: "اسم المشروع", value: "name" },
      { text: "جهة التمويل", value: "fundingSource" },
      { text: "المستفيدون", value: "beneficiaries" },
      { text: "مكان التنفيذ", value: "executionPlace" },
      { text: "فترة التنفذ", value: "executionTime" },
      { text: "تكلفة المشروع", value: "costProject" },
      { text: "المرفقات", value: "projectsByPeopleUpload"},

      { text: "تعديل", value: "actions", sortable: false },
    ],
    _id: "",
    name: "",
    fundingSource: "",
    beneficiaries: "",
    executionPlace: "",
    executionTime: "",
    costProject: "",
    projectsByPeopleUpload: ""
  }),
  computed: {
    projectsByPeopleItem(){
      return   this.$store.state.organization.organization.projectsByPeople
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.projectsByPeopleItem.indexOf(
          item
        );
        const subItem =
        this.projectsByPeopleItem[this.editedIndex];
      const projectsByPeopleId = subItem._id;
      // (this._id = item._id),
      this._id= `${projectsByPeopleId}`,
        (this.name = item.name),
        (this.fundingSource = item.fundingSource),
        (this.beneficiaries = item.beneficiaries),
        (this.executionPlace = item.executionPlace),
        (this.executionTime = item.executionTime),
        (this.costProject = item.costProject);
    },
    async editProjectsByPeopleItem(){
      const formData = new FormData()

      formData.append("name", this.name);
      formData.append("fundingSource", this.fundingSource);
      formData.append("beneficiaries", this.beneficiaries);
      formData.append("executionPlace", this.executionPlace);
      formData.append("executionTime", this.executionTime);
      formData.append("costProject", this.costProject)
      formData.append("projectsByPeopleUpload", this.projectFile[0])

      const id = this._id;

      await axios
        .patch(`/api/Organizations/update_new_projectsByPeople/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.projectsByPeople
          const obj = data[this.editedIndex]
          this.projectsByPeopleItem.splice(this.editedIndex, 1, obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },
    async save(){
      const formData = new FormData()

      formData.append("name", this.name);
      formData.append("fundingSource", this.fundingSource);
      formData.append("beneficiaries", this.beneficiaries);
      formData.append("executionPlace", this.executionPlace);
      formData.append("executionTime", this.executionTime);
      formData.append("costProject", this.costProject)
      formData.append("projectsByPeopleUpload", this.projectFile[0])

      const id = this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_projectsByPeople/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.projectsByPeople
          const obj = data[data.length - 1]
          this.projectsByPeopleItem.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },
    add() {
      if (this._id == undefined || this._id == "") {
        this.save()
      } else {
        this.editProjectsByPeopleItem()
        // Object.assign(
        //   this.projectsByPeopleItem[
        //     this.editedIndex
        //   ],
        //   {
        //     name: this.name,
        //     fundingSource: this.fundingSource,
        //     beneficiaries: this.beneficiaries,
        //     executionPlace: this.executionPlace,
        //     executionTime: this.executionTime,
        //     costProject: this.costProject,
        //   }
        // );
      }

      (this._id = ""),
        (this.name = ""),
        (this.fundingSource = ""),
        (this.beneficiaries = ""),
        (this.executionPlace = ""),
        (this.executionTime = ""),
        (this.costProject = "");
        this.projectsByPeopleUpload= ""
    },

    uploadFile() {
      this.projectFile.push(event.target.files[0]);
      console.log(this.projectFile);
    },
  },
};
</script>
  
  <style scoped>
</style>