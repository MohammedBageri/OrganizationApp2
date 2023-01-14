<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3 text-sm">الانشطة والمشاريع الممولة من اشخاص او جهات عربية/اجنبية</div>
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
          v-model="fundingSourceAndNationality"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="الجهة المانحة وجنسيتها"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="executionPlace"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="مكان التنفيذ"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <!-- <div>title</div> -->
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <!-- Number or String -->
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="numberBeneficiaries"
          outlined
          dense
          label="عدد المستفيدون"
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
      <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
        <v-data-table
          :items="
           activitiesAndProjectsItem
          "
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
    gloablActivity: [],
    activityFile: [],
    headers: [
      { text: "اسم المشروع", value: "name" },
      { text: "جهة المانحة وجنسيتها", value: "fundingSourceAndNationality" },
      { text: "مكان التنفيذ", value: "executionPlace" },
      { text: "عدد المستفيدين", value: "numberBeneficiaries" },
      { text: "فترة التنفذ", value: "executionTime" },
      { text: "تكلفة المشروع", value: "costProject" },
      {text: "المرفقات", value: "activityUpload"},
      { text: "تعديل", value: "actions", sortable: false },
    ],

    _id: "",
    name: "",
    fundingSourceAndNationality: "",
    executionPlace: "",
    numberBeneficiaries: "",
    executionTime: "",
    costProject: "",
    activityUpload: ""
  }),
  computed: {
    activitiesAndProjectsItem() {
      return this.$store.state.organization.organization.activitiesAndProjectsByOthersOrganization
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.activitiesAndProjectsItem.indexOf(
          item
        );

      // (this._id = item._id),
      const subItem =
        this.activitiesAndProjectsItem[this.editedIndex];
      const activitiesAndProjectsId = subItem._id;
      this._id= `${activitiesAndProjectsId}`,
        (this.name = item.name),
        (this.fundingSourceAndNationality = item.fundingSourceAndNationality),
        (this.executionPlace = item.executionPlace),
        (this.numberBeneficiaries = item.numberBeneficiaries),
        (this.executionTime = item.executionTime),
        (this.costProject = item.costProject);
    },
    async editactivitiesItem(){

      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("fundingSourceAndNationality", this.fundingSourceAndNationality);
      formData.append("executionPlace", this.executionPlace);
      formData.append("numberBeneficiaries", this.numberBeneficiaries);
      formData.append("executionTime", this.executionTime);
      formData.append("costProject", this.costProject);
      formData.append("activityUpload", this.activityFile[0])

      const id = this._id;

      await axios
        .patch(`/api/Organizations/update_new_activity/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.activitiesAndProjectsByOthersOrganization
          const obj = data[this.editedIndex]
          this.activitiesAndProjectsItem.splice(this.editedIndex,1 , obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },
    async save() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("fundingSourceAndNationality", this.fundingSourceAndNationality);
      formData.append("executionPlace", this.executionPlace);
      formData.append("numberBeneficiaries", this.numberBeneficiaries);
      formData.append("executionTime", this.executionTime);
      formData.append("costProject", this.costProject);
      formData.append("activityUpload", this.activityFile[0])

      const id = this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_activity/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.activitiesAndProjectsByOthersOrganization
          const obj = data[data.length - 1]
          this.activitiesAndProjectsItem.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },
    add() {
      if (this._id == undefined || this._id == "") {
        this.save();
      } else {
        this.editactivitiesItem()
        // Object.assign(
        //   this.$store.state.organization.organization
        //     .activitiesAndProjectsByOthersOrganization[this.editedIndex],
        //   {
        //     name: this.name,
        //     fundingSourceAndNationality: this.fundingSourceAndNationality,
        //     executionPlace: this.executionPlace,
        //     numberBeneficiaries: this.numberBeneficiaries,
        //     executionTime: this.executionTime,
        //     costProject: this.costProject,
        //   }
        // );
      }

      (this._id = ""),
        (this.name = ""),
        (this.fundingSourceAndNationality = ""),
        (this.executionPlace = ""),
        (this.numberBeneficiaries = ""),
        (this.executionTime = ""),
        (this.costProject = "");
        this.activityUpload= ""
    },
    uploadFile() {
      this.activityFile.push(event.target.files[0]);
      console.log(this.activityFile);
    },
  },
};
</script>
  
  <style scoped>
</style>