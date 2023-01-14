<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3 text-sm">اهداف المؤسسة</div>
          <v-divider />
        </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="goal"
          outlined
          dense
          hide-details
          label="أهداف المؤسسة"
          dir="rtl"
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
          :items="organizationGoalItem"
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
    orgGoals: [],
    goalFile: [],
    headers: [
      { text: "أهداف المؤسسة ", value: "goal" },
      { text: "مرفقات", value: "organizationGoalUpload"},

      { text: "تعديل", value: "actions", sortable: false },
    ],

    _id: "",
    goal: "",
    organizationGoalUpload: "",

  }),
  computed: {
    organizationGoalItem (){
      return  this.$store.state.organization.organization.organizationGoal
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.organizationGoalItem.indexOf(
          item
        );
        const subItem =
        this.organizationGoalItem[this.editedIndex];
      const organizationGoalId = subItem._id;
        this._id= `${organizationGoalId}`,
       (this.goal = item.goal);
    },
    async editOrganizationGoalItem () {
      const formData = new FormData();
      formData.append("goal", this.goal)
      formData.append("organizationGoalUpload", this.goalFile[0]);

      const id = this._id;

      await axios
        .patch(`/api/Organizations/update_new_organizationGoal/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.organizationGoal
          const obj = data[this.editedIndex]
          this.organizationGoalItem.splice(this.editedIndex, 1, obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },  
    async save(){
      const formData = new FormData();
      formData.append("goal", this.goal)
      formData.append("organizationGoalUpload", this.goalFile[0]);

      const id = this.$route.params.id;


      await axios
        .patch(`/api/Organizations/new_organizationGoal/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.organizationGoal
          const obj = data[data.length - 1]
          this.organizationGoalItem.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });

    },
    add() {
      if (this._id == undefined || this._id == "") {

        this.save();

      } else {
        this.editOrganizationGoalItem()
        // Object.assign(
        //   this.organizationGoalItem[
        //     this.editedIndex
        //   ],
        //   {
        //     goal: this.goal,
        //   }
        // );
      }

      (this._id = "");
      (this.goal = "");
      this.organizationGoalUpload = "";
    },
    uploadFile() {
      this.goalFile.push(event.target.files[0]);
      console.log(this.goalFile);
    },
  },
};
</script>
  
  <style scoped>
</style>