<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
        <div class="mb-3">الفروع و المكاتب التابعة للمؤسسة</div>
        <v-divider />
      </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="name"
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="اسم الفرع"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          type="date"
          v-model="dateCreated"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="تاريخ الإنشاء"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="permitNumber"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="رقم التصريح"
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
        <v-combobox
          :items="$store.state.states"
          item-value="_id"
          item-text="name"
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="state"
          outlined
          dense
          label="المحافظة"
          reverse
        ></v-combobox>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-combobox
          :items="$store.state.cities"
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          item-value="_id"
          item-text="name"
          v-model="city"
          outlined
          dense
          label="المديرية"
          reverse
        ></v-combobox>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="street"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="الشارع"
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
        <v-combobox
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="ownOrRent"
          :items="items"
          outlined
          dense
          label="ملك/إيجار"
          reverse
        ></v-combobox>
      </v-col>
    </v-row>

    <v-btn color="green darken-4" class="white--text" @click="add">
      إضافة
    </v-btn>

    <v-row>
      <v-col cols="12">
        <v-data-table
          :items="$store.state.organization.organization.branche"
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
import dayjs from 'dayjs';
import axios from 'axios'
export default {
  data: () => ({
    brnache: [],
    headers: [
      { text: "اسم الفرع", value: "name" },
      { text: "تاريخ الإنشاء", value: "dateCreated" },
      { text: "رقم التصريح", value: "permitNumber" },
      { text: "المحافظة", value: "state.name" },
      { text: "المديرية", value: "city.name" },
      { text: "الشارع", value: "street" },
      { text: "ملك/إيجار", value: "ownOrRent" },
      // { text: "تعديل/حذف", value: "actions", sortable: false },
    ],
    _id: "",
    name: "",
    dateCreated: "",
    permitNumber: "",
    state: "",
    city: "",
    street: "",
    ownOrRent: "",
    editedIndex: 0,
    items: ["ملك", "إيجار"],
  }),

  methods: {
    editItem(item) {
      this.editedIndex =
        this.$store.state.organization.organization.branche.indexOf(item);
      //this.$store.state.organization.organization.branche = Object.assign({},item)
      // (this._id = item._id),
      this._id= `${this.editedIndex}`,
        (this.name = item.name),
        (this.dateCreated = dayjs(item.dateCreated).format("YYYY-MM-DD")),
        (this.permitNumber = item.permitNumber),
        (this.state = item.state),
        (this.city = item.city),
        (this.street = item.street),
        (this.ownOrRent = item.ownOrRent);
    },

    async save(){
      const formData = this.$store.state.organization.organization.branche
      const id =this.$route.params.id 
      console.log(formData);
      await axios
        .patch(`/api/Organizations/${id}`,formData)
        .then(res =>{
          console.log(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    },

    add() {
      if (this._id == undefined || this._id == "") {
        this.$store.state.organization.organization.branche.push({
          name: this.name,
          dateCreated: this.dateCreated,
          permitNumber: this.permitNumber,
          state: this.state,
          city: this.city,
          street: this.street,
          ownOrRent: this.ownOrRent,
        });
      } else {
        Object.assign(this.$store.state.organization.organization.branche[this.editedIndex], {
          name: this.name,
          dateCreated: this.dateCreated,
          permitNumber: this.permitNumber,
          state: this.state,
          city: this.city,
          street: this.street,
          ownOrRent: this.ownOrRent,
        });
      }

      this._id = "";
      this.name = "";
      this.dateCreated = "";
      this.permitNumber = "";
      this.state = "";
      this.city = "";
      this.street = "";
      this.ownOrRent = "";
    },
  },

};
</script>
  
  <style scoped>
</style>