<template>
    <v-container>
      <v-row dense>
        <!-- <v-col cols="12">
          <div>الموظفين</div>
          <v-divider />
        </v-col> -->
        <v-col cols="12" sm="6" md="6" lg="2">
          
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.numberStaff" min="0" label="العدد" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
         
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"  v-model="$store.state.organization.organization.employeeStats.maleStaff" min="0" label="الذكور" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.femaleStaff" min="0" label="الإناث" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field v-model="$store.state.organization.organization.employeeStats.noteStaff" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" label="ملاحظات" outlined dense hide-details reverse></v-text-field>
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

      <v-row dense>
        <v-col cols="12">
          <div>المتعاقدين</div>
          <v-divider />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.numberContractors" min="0" label="العدد" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.maleContractors" min="0" label="الذكور" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.femaleContractors" min="0" label="الإناث" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field label="ملاحظات" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.noteContractors" outlined dense hide-details reverse></v-text-field>
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
  
      <v-row dense>
        <v-col cols="12">
          <div>المتطوعين</div>
          <v-divider />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.numberVolunteers" min="0" label="العدد" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.maleVolunteers" min="0" label="الذكور" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" min="0" v-model="$store.state.organization.organization.employeeStats.femaleVolunteers" label="الإناث" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"  v-model="$store.state.organization.organization.employeeStats.noteVolunteers" label="ملاحظات" outlined dense hide-details reverse></v-text-field>
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

      <v-row dense>
        <v-col cols="12">
          <div>اخرى</div>
          <v-divider />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.numberOthers" min="0" label="العدد" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.maleOthers" min="0" label="الذكور" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field type="number" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.femaleOthers" min="0" label="الإناث" outlined dense hide-details reverse></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <v-text-field label="ملاحظات" class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.employeeStats.noteOthers" outlined dense hide-details reverse></v-text-field>
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
      <v-btn color="green darken-4" class="white--text" @click="save">
      إضافة
    </v-btn>
    </v-container>
  </template>
  
  
  <script>
  import axios from 'axios';
  export default{
    data: () => ({
      filesUpload:[]
    }),

    methods: {
      async save() {
        const formData = new FormData();
        formData.append("numberStaff",this.$store.state.organization.organization.employeeStats.numberStaff)
        formData.append("maleStaff", this.$store.state.organization.organization.employeeStats.maleStaff)
        formData.append("femaleStaff", this.$store.state.organization.organization.employeeStats.femaleStaff)
        formData.append("noteStaff", this.$store.state.organization.organization.employeeStats.noteStaff)
        

        formData.append("numberContractors", this.$store.state.organization.organization.employeeStats.numberContractors)
        formData.append("maleContractors", this.$store.state.organization.organization.employeeStats.maleContractors)
        formData.append("femaleContractors", this.$store.state.organization.organization.employeeStats.femaleContractors)
        formData.append("noteContractors", this.$store.state.organization.organization.employeeStats.noteContractors)


        formData.append("numberVolunteers", this.$store.state.organization.organization.employeeStats.numberVolunteers)
        formData.append("maleVolunteers", this.$store.state.organization.organization.employeeStats.maleVolunteers)
        formData.append("femaleVolunteers", this.$store.state.organization.organization.employeeStats.femaleVolunteers)
        formData.append("noteVolunteers", this.$store.state.organization.organization.employeeStats.noteVolunteers)


        formData.append("numberOthers", this.$store.state.organization.organization.employeeStats.numberOthers)
        formData.append("maleOthers", this.$store.state.organization.organization.employeeStats.maleOthers)
        formData.append("femaleOthers", this.$store.state.organization.organization.employeeStats.femaleOthers)
        formData.append("noteOthers", this.$store.state.organization.organization.employeeStats.noteOthers)
        for(var i in this.filesUpload){
          formData.append("filesUpload", this.filesUpload[i])
        }
        console.log(formData,this.$store.state.organization.organization.employeeStats.numberStaff)
        const id = this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_employeeStats/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.employeeStats
          const obj = data[data.length - 1]
          this.$store.state.organization.organization.employeeStats.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });

        
      },

      uploadFile() {
      this.filesUpload.push(event.target.files[0]);
      console.log(this.filesUpload);
    },
    }
  }
  </script>
  