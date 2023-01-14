<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3">مشاريع المؤسسة</div>
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
          v-model="ExecutionPlace"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="مكان التنفيذ"
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
          v-model="costProject"
          outlined
          dense
          label="ميزانية المشروع"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="fundingSource"
          outlined
          dense
          label="جهة التمويل"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-file-input
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          show-size
          label="المرفقات"
          reverse
          outlined
          dense
          @change="uploadFile"
        ></v-file-input>
      </v-col>
    </v-row>

    <v-btn color="green darken-4" class="white--text" @click="add">
      إضافة
    </v-btn>

    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
        <v-data-table
          :items="organizationProjectItems"
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
  data () {
    return {
      organizationProject: [],
      projects: [],
      headers: [
        { text: "اسم المشروع", value: "name" },
        { text: "مكان التنفيذ", value: "ExecutionPlace" },
        { text: "المستفيدين", value: "beneficiaries" },
        { text: "ميزانية المشروع", value: "costProject" },
        { text: "جهة التمويل", value: "fundingSource" },
        {text: "المرفق", value: "projectUpload"},

        { text: "تعديل", value: "actions", sortable: false },
      ],

      _id: "",
      name: "",
      ExecutionPlace: "",
      beneficiaries: "",
      costProject: "",
      fundingSource: "",
      projectUpload: "",
    }
  },
  computed: {
    organizationProjectItems(){
      return this.$store.state.organization.organization.organizationProject
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.organizationProjectItems.indexOf(item);

      // (this._id = item._id),
      const subItem =
        this.organizationProjectItems[this.editedIndex];
      const organizationProjectItemsId = subItem._id;
      this._id= `${organizationProjectItemsId}`,
        (this.name = item.name),
        (this.ExecutionPlace = item.ExecutionPlace),
        (this.beneficiaries = item.beneficiaries),
        (this.costProject = item.costProject),
        (this.fundingSource = item.fundingSource);
        this.projectUpload = item.projects;
    },
    async editOrganizationProject(){
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('ExecutionPlace', this.ExecutionPlace)
      formData.append('beneficiaries', this.beneficiaries)
      formData.append('costProject', this.costProject)
      formData.append('fundingSource', this.fundingSource)
      formData.append('projectUpload', this.projects[0])

      // formData.projectUpload.push(this.projects)
      const id =  this._id;
      const orgPj = await axios.patch(`/api/Organizations/update_new_organizationProject/${id}`,formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then( (res) =>{
        console.log('res',res);
        const data = res.data.result.organizationProject;
          const obj = data[this.editedIndex];
          this.organizationProjectItems.splice(this.editedIndex, 1, obj)
      }).catch( (err) =>{
        console.log(err);
      })

    },
    async save () {
      // const formData = this.organizationProjectItems;
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('ExecutionPlace', this.ExecutionPlace)
      formData.append('beneficiaries', this.beneficiaries)
      formData.append('costProject', this.costProject)
      formData.append('fundingSource', this.fundingSource)
      formData.append('projectUpload', this.projects[0])

      // formData.projectUpload.push(this.projects)
      const id =  this.$route.params.id;
      const orgPj = await axios.patch(`/api/Organizations/new_organizationProject/${id}`,formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then( (res) =>{
        console.log('res',res);
        const data = res.data.result.organizationProject;
          const obj = data[data.length - 1];
          this.organizationProjectItems.push(obj);
      }).catch( (err) =>{
        console.log(err);
      })
      console.log(orgPj)
    },
    async add() {
      if (this._id == undefined || this._id == "") {
        // this.organizationProjectItems.push({
        //   name: this.name,
        //   ExecutionPlace: this.ExecutionPlace,
        //   beneficiaries: this.beneficiaries,
        //   costProject: this.costProject,
        //   fundingSource: this.fundingSource,
        //   projectUpload: this.projects
        // });
        
       this.save()
      
      } else {
        this.editOrganizationProject()
        // Object.assign(
        //   this.organizationProjectItems[
        //     this.editedIndex
        //   ],
        //   {
        //     name: this.name,
        //     ExecutionPlace: this.ExecutionPlace,
        //     beneficiaries: this.beneficiaries,
        //     costProject: this.costProject,
        //     fundingSource: this.fundingSource,
        //     projectUpload: this.projects
        //   }
        // );
        
      // await this.save()
      }
      (this._id = ""),
        (this.name = ""),
        (this.ExecutionPlace = ""),
        (this.beneficiaries = ""),
        (this.costProject = ""),
        (this.fundingSource = "");
        this.projectUpload= ""
        
    },
    checkLetter (e) {
      console.log(e)
    },
    uploadFile() {
      this.projects.push(event.target.files[0]);
      console.log(this.projects);
    },
  },
};
</script>
  
  <style scoped>
</style>