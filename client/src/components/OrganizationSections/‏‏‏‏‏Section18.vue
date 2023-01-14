<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3 text-sm">لوائح المؤسسة</div>
          <v-divider />
        </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="regulation"
          outlined
          dense
          hide-details
          label="اللوائح"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-select
        class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="isAvailable"
          :items="items"
          outlined
          dense
          hide-details
          label="متوفر/غير متوفر"
          reverse
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
        class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          type="number"
          v-model="numberDoors"
          outlined
          dense
          hide-details
          label="عدد الأبواب"
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
          type="number"
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="numberLuck"
          outlined
          dense
          label="عدد الفصول"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          type="number"
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="numberMaterials"
          outlined
          dense
          label="عدد المواد"
          reverse
        ></v-text-field>
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
          :items="organizationRegulationItem"
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
    items: ["متوفر", "غير متوفر"],

    regulations: [],
    regulationsFile: [],
    headers: [
      { text: "اللوائح", value: "regulation" },
      { text: "متوفر/غير متوفر", value: "isAvailable" },
      { text: "عدد الأبواب", value: "numberDoors" },
      { text: "عدد الفصول", value: "numberLuck" },
      { text: "عدد المواد", value: "numberMaterials" },
      { text: "ملاحظات", value: "note" },
      {text: "المرفقات", value: "organizationRegulationUpload"},
      { text: "تعديل", value: "actions", sortable: false },
    ],

    _id: "",
    regulation: "",
    isAvailable: "",
    numberDoors: "",
    numberLuck: "",
    numberMaterials: "",
    note: "",
    organizationRegulationUpload: ""
  }),
  computed: {
    organizationRegulationItem () {
      return this.$store.state.organization.organization.organizationRegulation
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex =
        this.organizationRegulationItem.indexOf(
          item
        );
        const subItem =
        this.organizationRegulationItem[this.editedIndex];
      const organizationRegulationId = subItem._id;
      // (this._id = item._id),
      this._id= `${organizationRegulationId}`,
        (this.regulation = item.regulation),
        (this.isActive = item.isAvailable),
        (this.numberDoors = item.numberDoors),
        (this.numberLuck = item.numberLuck),
        (this.numberMaterials = item.numberMaterials),
        (this.note = item.note);
        this.organizationRegulationUpload = item.regulationsFile
    },
    async editOrganizationRegulationItem (){
      const formData = new FormData();
      formData.append("regulation", this.regulation);
      formData.append("isActive", this.isAvailable);
      formData.append("numberDoors", this.numberDoors);
      formData.append("numberLuck", this.numberLuck);
      formData.append("numberMaterials", this.numberMaterials);
      formData.append("note", this.note);
      formData.append("organizationRegulationUpload",this.regulationsFile[0]);

      const id = this._id;

      await axios
        .patch(`/api/Organizations/update_new_organizationRegulation/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.organizationRegulation
          const obj = data[this.editedIndex]
          this.organizationRegulationItem.splice(this.editedIndex, 1, obj)
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async save()  {
      const formData = new FormData();
      formData.append("regulation", this.regulation);
      formData.append("isActive", this.isActive);
      formData.append("numberDoors", this.numberDoors);
      formData.append("numberLuck", this.numberLuck);
      formData.append("numberMaterials", this.numberMaterials);
      formData.append("note", this.note);
      formData.append("organizationRegulationUpload",this.regulationsFile[0]);

      const id = this.$route.params.id;

      await axios
        .patch(`/api/Organizations/new_organizationRegulation/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          const data = res.data.result.organizationRegulation
          const obj = data[data.length - 1]
          this.organizationRegulationItem.push(obj)
        })
        .catch((err) => {
          console.log(err);
        });
    },

    
    add() {
      if (this._id == undefined || this._id == "") {
        this.save();
      } else {
        this.editOrganizationRegulationItem()
        // Object.assign(
        //   this.organizationRegulationItem[
        //     this.editedIndex
        //   ],
        //   {
        //     regulation: this.regulation,
        //     isAvailable: this.isAvailable,
        //     numberDoors: this.numberDoors,
        //     numberLuck: this.numberLuck,
        //     numberMaterials: this.numberMaterials,
        //     note: this.note,
        //   }
        // );
      }

      (this._id = ""),
        (this.regulation = ""),
        (this.isActive = ""),
        (this.numberDoors = ""),
        (this.numberLuck = ""),
        (this.numberMaterials = ""),
        (this.note = "");
        this.organizationRegulationUpload= "";
    },
    uploadFile() {
      this.regulationsFile.push(event.target.files[0]);
      console.log(this.regulationsFile);
    },
  },

};
</script>
  
  <style scoped>
</style>